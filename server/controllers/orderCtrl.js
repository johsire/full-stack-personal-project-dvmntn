var stripe = require("stripe")("sk_test_uM8jNLDUHoYXG0Vh1IHR5WY2");

module.exports = {
  createOrder: (req, res) => {
  const db = req.app.get('db');
  const { user_id, product_id, amount, email } = req.body;
  console.log('CREATE ORDER IS BEING CALED');

  stripe.charges.create({
    amount: amount,
    currency: "usd",
    source: "tok_amex", // obtained with Stripe.js
    description: `Charge for ${email}`
  }, (err, charge) => {
    console.log(charge, 'THIS IS THE CHARGE OBJECT');
    // asynchronously called
    db.create_order([user_id, product_id])
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
