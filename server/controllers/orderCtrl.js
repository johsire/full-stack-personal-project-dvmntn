var stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = {
  createOrder: (req, res) => {
  const db = req.app.get('db');
  // const { user_id, product_id, amount, email } = req.body;
  const { amount, currency, source, description } = req.body;
  console.log('CREATE ORDER IS BEING CALED');

  stripe.charges.create({
    amount,
    currency,
    source, // obtained with Stripe.js
    description,
  }, (err, charge) => {
    console.log(charge, '<===== XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX THIS IS THE CHARGE OBJECT XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    // asynchronously called
    db.create_order([1, 2])
    .then(data => {
      res.status(200).json({
      order: data,
     })
    })
    .catch(err => {
      res.status(500).json({ error: err, errorMessage: "Something went wrong in the server" });
    });
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
      data: data[0],
    })
  })
    .catch(err => {
      res.status(500).json({ error: err, errorMessage: "Something went wrong in the server"});
    });
},

getUserOrders: (req, res) => {
  const db = req.app.get('db');
  const id = req.params.id;
  
  db.get_user_orders([id])
      .then(data => {
        console.log(data);
        return res.status(200).json({
        data: data,
      })
    })
    .catch(err => {
      res.status(500).send({ error: err, errorMessage: "Something went wrong in the server" });
    });

  }, 

 updateOrder: (req, res) => {
   const db = req.app.get('db');
   const product = req.body.product_id;
   const id = req.params.id;

   db.update_order([product, id])
      .then(() => res.status(200).json({ 
       success: true,
       data: `Successfully updated!`,
  }))
  .catch(err => {
   res.status(500).json({ error: err, errorMessage: "Something went wrong in the server"});
   }); 
 },

 deleteOrder: (req, res) => {
   const db = req.app.get('db');
   const id = req.params.id;

   db.delete_order([id])
   .then(() => res.status(200))
   .catch(err => {
    res.status(500).json({ error: err, errorMessage: "Something went wrong in the server" })
   })
  } 
};
