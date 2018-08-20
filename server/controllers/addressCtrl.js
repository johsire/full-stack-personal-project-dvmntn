const express = require('express');

module.exports = {
 createAddress: (req, res) => {
   const db = req.app.get('db');
   const { user_id, street , city, state, zip } = req.body;

   db.create_address({ user_id, street , city, state, zip })
   .then(data => {
     res.status(200).json({
       data: data,
     })
   })
   .catch(err => {
     res.status(500).json({error: err, errorMessage: "Address not found! Something went wrong in the server!"});
   });
 },

 getAddress: (req, res) => {
   const db = req.app.get('db');
   const id = req.params.id;
   
   db.get_address([id])
     .then(data => {
      // console.log(data[0]);
      return res.status(200).json({
      // address: data[0],
      data: data,
      success: true,
   })
 })
   .catch(err => {
     res.status(500).json({ error: err, errorMessage: "Something went wrong in the server"});
   });
  },

  getUserAddresses: (req, res) => {
    const db = req.app.get('db');
    // console.log(req.params);
    const id = req.params.id;
    
    db.get_user_addresses([ id ])
        .then(data => {
          console.log(data);
          return res.status(200).json({
          data: data,
        })
      })
      .catch(err => {
        res.status(500).send({ error: err, errorMessage: "Something went wrong in the server" });
      });
    }    
 };
 