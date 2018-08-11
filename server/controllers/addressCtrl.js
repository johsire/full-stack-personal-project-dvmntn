const express = require('express');

module.exports = {
 createAddress: (req, res) => {
   const db = req.app.get('db');
   const { user_id, street , city, state, zip } = req.body;

   db.create_address({ user_id, street , city, state, zip })
   .then(data => {
     res.status(200).json({
       address: data,
     })
   })
   .catch(err => {
     res.status(500).json({error: err, errorMessage: "Address not found! Something went wrong in the server!"});
   });
 },

 getAddress: (req, res) => {
   const db = req.app.get('db');
   
   db.get_address()
     .then(() => res.status(200).json(address))
     .catch(err => {
       res.status(500).json({error: err, errorMessage: "Error! Somethng went wrong in the server"})
     })
   }
};  