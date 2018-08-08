require('dotenv').config();
const express = require('express');
session = require('express-session');
axios = require('axios');
massive = require('massive');

const app = express();

const {
 SERVER_PORT,
 REACT_APP_DOMAIN,
 REACT_APP_CLIENT_ID,
 CLIENT_SECRET,
 SESSION_SECRET,
 CONNECTION_STRING
} = process.env;


massive(CONNECTION_STRING).then(db => {
 app.set('db', db)
});

app.use(session({
 secret: SESSION_SECRET,
 resave: false,
 saveUninitialized: false  
}));


app.get('/auth/callback', async (req, res) => {
 let payload = {
   client_id: REACT_APP_CLIENT_ID,
   client_secret: CLIENT_SECRET,
   code: req.query.code,
   grant_type: 'authorization_code',
   redirect_uri: `http://${req.headers.host}/auth/callback`
 };

 let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);
  

  let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`);

  const db = req.app.get('db');
  let {sub, email, name, picture} = resWithUserData.data;
  let foundUser = await db.user.find_user([sub]);


  if (foundUser[0]) {
      req.session.user = foundUser[0];
      res.redirect('/#/');
  } else {
    let createdUser = await db.user.create_user([name, email, sub, picture]);
    req.session.user = createdUser[0];
    res.redirect('/#/');
  };
});

app.get('api.user-data', (req, res) => {
 if(req.session.user) {
    res.status(200).send(req.session.user);
 } else {
     res.status(401).send('Nice try sucka!');
 };
});

app.get('/api/logout', (req, res) => {
 req.session.destroy();
 res.redirect('http://localhost:3000');
});

// Add products to database
// Create order
// Delete order
// Edit user
// Delete user

app.listen(SERVER_PORT, () => {
 console.log(`W.Ferrell Crashing Weddings on Port: ${SERVER_PORT}`);
});