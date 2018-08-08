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
     res.status(500).send({errorMessage: "Address not found! Something went wrong!"});
   });
 },

 getAddress: (req, res, next) => {
   const db = req.app.get('db');
   
   db.get_address()
     .then(() => res.send(200).send(address))
     .catch(err => {
       res.status(500).send({errorMessage: "Error! Somethng went wrong"})
     })


 },