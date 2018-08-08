let allOrders = {};

module.exports = {
 createOrder: (req, res) => {
  const db = req.app.get('db');
  cont { user_id, product_id } = req.body;

  db.create_order({ user_id, product_id })
    .then(data => {
     res.status(200).json({
      order: data,
     })
    })
    .catch(err => {
     res.status(500).send({errorMessage: 'Order not created, something went wrong'});
    });
 },
}