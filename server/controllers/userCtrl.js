
module.exports = {
  getUser: (req, res) => {
    const db = req.app.get('db');

    db.get_user()
      .then(() => res.sendStatus(200).send(user))
      .catch(err => {
        res.status(500).send({errorMessage: 'Something went wrong in the server!'});
      });
  },

 updateUser: (req, res) => {
  const db = req.app.get('db');

  db.update_user()
    .then(() => res.send(200))
    .catch(err => {
     res.status(500).send({errorMessage: "Something went wrong in the server"});
     }); 
  },

  deleteUser: (req, res) => {
   const db = req.app.get('db');

   db.delete_user()
   .then(() => res.send(200))
   .catch(err => {
     res.status(500).send({errorMessage: "Something went wrong in the server!"})
   })
  } 
};
