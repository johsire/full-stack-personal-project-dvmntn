
const path = require('path'); // Usually moved to the start of file

require('dotenv').config();
const express = require('express');
session = require('express-session');
axios = require('axios');
massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');


const orderCtrl = require ('./controllers/orderCtrl');
const addressCtrl = require('./controllers/addressCtrl');
const userCtrl = require('./controllers/userCtrl');
const productCtrl = require('./controllers/productCtrl');

const app = express();

app.use( express.static( `${__dirname}/../build` ) );

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const {
 SERVER_PORT,
 REACT_APP_DOMAIN,
 REACT_APP_CLIENT_ID,
 CLIENT_SECRET,
 SESSION_SECRET,
 CONNECTION_STRING,
 LOCAL_HOST
} = process.env;


massive(CONNECTION_STRING).then(db => {
 app.set('db', db)
});

app.use(session({
 secret: SESSION_SECRET,
 resave: false,
 saveUninitialized: false  
}));

// USER AUTH0 API Endpoints;
app.get('/auth/callback', async (req, res) => {
  console.log('IN CALLBACK');
  try {
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
      let { sub, email, name, picture } = resWithUserData.data;
      let foundUser = await db.find_user([sub]);

      if (foundUser[0]) {
          req.session.user = foundUser[0];
          // res.status(200).json({
          //   user: foundUser[0],
          // });
          res.redirect('/account');
      } else {
        console.log('CREATING A NEW USER');
        let createdUser = await db.create_user([name, email, sub, picture]);
        req.session.user = createdUser[0];
        // res.status(200).json({
        //   user: createdUser[0],
        // });
        res.redirect('/account');
      };
  }
  catch(e) {
    console.log(e, '<-- THIS IS OUR ERROR');
  };
});

// app.get('api.user-data', (req, res) => {
//  if(req.session.user) {
//     res.status(200).send(req.session.user);
//  } else {
//      res.status(401).send('Nice try sucka!');
//  };
// });

app.get('/api/logout', (req, res) => {
 req.session.destroy();
 res.redirect(LOCAL_HOST);
});

// USER API Endpoints
app.get('/api/user/:id', userCtrl.getUser)
app.put('/api/user/:id', userCtrl.updateUser)
app.delete('/api/user/:id', userCtrl.deleteUser);

// ORDER API Endpoints
app.post('/api/order', orderCtrl.createOrder);
app.get('/api/order/:id', orderCtrl.getOneOrder);
app.get('/api/orders/user/:id', orderCtrl.getUserOrders);
app.put('/api/order/:id', orderCtrl.updateOrder);
app.delete('/api/order/:id', orderCtrl.deleteOrder);

// ADDRESS API Endpoints
app.post('/api/address/', addressCtrl.createAddress);
app.get('/api/address/:id', addressCtrl.getAddress);
app.get('/api/user/addresses/:id', addressCtrl.getUserAddresses);

// PRODUCTS API Endpoints
app.get('/api/products', productCtrl.getProducts);

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(SERVER_PORT, () => {
 console.log(`W.Ferrell Crashing Weddings on Port: ${SERVER_PORT}`);
});
