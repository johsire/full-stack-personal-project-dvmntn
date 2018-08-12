
module.exports = {
  getUser: (req, res) => {
    const db = req.app.get('db');
    const id = req.params.id;
    console.log(req.params.id, '<--- REQUEST OBJECT');

    db.get_user([id])
      .then(data => {
        console.log(data[0]);
        return res.status(200).json({
        data: data[0],
        success: true,
      })
    })
      .catch(err => {
        res.status(500).json({ error: err, errorMessage: "Something went wrong in the server"});
      });
  },

 updateUser: (req, res) => {
  const db = req.app.get('db');
  const id = req.params.id;
  const name = req.body.user_name;
  console.log(name, id, '<--- REQUEST OBJECT');

  db.update_user([name, id])
    .then(() => res.status(200).json({ 
      success: true,
      data: `Successfully updated!`,
    }))
    .catch(err => {
     res.status(500).json({ error: err, errorMessage: "Something went wrong in the server"});
     }); 
  },

  deleteUser: (req, res) => {
   const db = req.app.get('db');
   const id = req.params.id;

   db.delete_user([id])
   .then(() => res.status(200))
   .catch(err => {
     res.status(500).json({error: err, errorMessage: "Something went wrong in the server"})
   })
  } 
};
