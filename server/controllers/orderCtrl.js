const express = require('express');

module.exports = {
  createOrder: (req, res) => {
  const db = req.app.get('db');
  const { user_id, product_id } = req.body;

  db.create_order({ user_id, product_id })
    .then(data => {
     res.status(200).json({
      order: data,
     })
    })
    .catch(err => {
     res.status(500).send({errorMessage: 'Order not created, something went wrong in the server'});
    });
 },

 getOrder: (res, req) => {
   const db = req.app.get('db');
   
   db.get_order()
     .then(() => res.sendStatus(200).send(order))
     .catch(err => {
       res.status(500).send({errorMessage: 'Something went wrong in the server.'});
     });
 },

 updateOrder: (req, res) => {
   const db = req.app.get('db');

   db.update_order()
     .then(() => res.send(200))
     .catch(err => {
      res.status(500).send({errorMessage: "Something went wrong in the server"})
      })
 },

 deleteOrder: (req, res) => {
   const db = req.app.get('db');


   db.delete_product()
   .then(() => res.send(200))
   .catch(err => {
     res.status(500).send({errorMessage: "Something went wrong in the server!"})
   })
  } 
};
