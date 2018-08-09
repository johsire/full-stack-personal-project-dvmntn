
module.exports = {
  createOrder: (req, res) => {
  const db = req.app.get('db');
  const { user_id, product_id } = req.body;

  db.create_order({ user_id, product_id })
    .then(data => {
      res.sendStatus(200).json({
      order: data,
     })
    })
    .catch(err => {
      res.sendStatus(500).send({ error: err, errorMessage: "Something went wrong in the server" });
    });
 },

 getOneOrder: (req, res) => {
  const db = req.app.get('db');
  const id = req.params.id;
  // console.log(req, '<--- REQUEST OBJECT');

  db.get_order([id])
    .then(data => {
      console.log(data);
      return res.status(200).json({
      order: data[0],
    })
  })
    .catch(err => {
      res.sendStatus(500).send({ error: err, errorMessage: "Something went wrong in the server"});
    });
},

// getAllOrders: (res, req) => {
//   const db = req.app.get('db');
//   const id = req.params.id;
  
//   db.get_order([ id ])
//     .then(() => res.sendStatus(200).send(order))
//     .catch(err => {
//       res.status(500).send({ error: err, errorMessage: "Something went wrong in the server" });
//     });

//   }, 

 updateOrder: (req, res) => {
   const db = req.app.get('db');
   const id = req.params.id;
   const product = req.params.product_id;

   db.update_order({ product, id })
      .then(data => res.sendStatus(200).json({ 
       success: true,
       data: `Successfully updated!`,
  }))
  .catch(err => {
   res.sendStatus(500).send({ error: err, errorMessage: "Something went wrong in the server"});
   }); 
 },

 deleteOrder: (req, res) => {
   const db = req.app.get('db');
   const id = req.params.id;

   db.delete_order({ id })
   .then(() => res.sendStatus(200))
   .catch(err => {
    res.sendStatus(500).send({ error: err, errorMessage: "Something went wrong in the server" })
   })
  } 
};
