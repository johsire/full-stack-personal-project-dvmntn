
module.exports = {
  getUser: (req, res) => {
    const db = req.app.get('db');
    const id = req.params.id;
    console.log(req, '<--- REQUEST OBJECT');

    db.get_user([id])
      .then(data => {
        console.log(data);
        return res.status(200).json({
        user: data[0],
      })
    })
      .catch(err => {
        res.status(500).send({ error: err, errorMessage: "Something went wrong in the server"});
      });
  },

 updateUser: (req, res) => {
  const db = req.app.get('db');
  const id = req.params.id;
  const name = req.body.user_name;
  console.log(name, id, '<--- REQUEST OBJECT');

  db.update_user([name, id])
    .then(data => res.send(200).json({ 
      success: true,
      data: `Successfully updated!`,
    }))
    .catch(err => {
     res.status(500).send({ error: err, errorMessage: "Something went wrong in the server"});
     }); 
  },

  deleteUser: (req, res) => {
   const db = req.app.get('db');

   db.delete_user()
   .then(() => res.send(200))
   .catch(err => {
     res.status(500).send({error: err, errorMessage: "Something went wrong in the server"})
   })
  } 
};
