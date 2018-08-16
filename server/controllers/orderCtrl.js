var stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = {
  createOrder: (req, res) => {
  const db = req.app.get('db');
  // const { user_id, product_id, amount, email } = req.body;
  const { amount, currency, source, description } = req.body;
  console.log('CREATE ORDER IS BEING CALLED');

  stripe.charges.create({
    amount,
    currency,
    source, // obtained with Stripe.js
    description,
  }, (err, charge) => {
    console.log(charge, '<===== XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX THIS IS THE CHARGE OBJECT XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');

    const stripe_id =  charge.id;
    const status =  charge.outcome.seller_message;
    const order_email =  charge.source.name;
    const street =  charge.source.address_line1;
    const city =  charge.source.address_city;
    const state =  charge.source.address_state;
    const zip =  charge.source.address_zip;

    // TODO: Remove hardcoded values of user and product_id
    db.create_order([1, 2, stripe_id, status, order_email])
    .then(data => {
      res.status(200).json({
      data: data[0],
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
   .then(() => res.sendStatus(200))
   .catch(err => {
     console.log(err)
    res.status(500).json({ error: err, errorMessage: "Something went wrong in the server" })
   })
  } 
};
