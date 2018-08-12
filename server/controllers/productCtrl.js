
module.exports = {
  getProducts: (req, res) => {
    const db = req.app.get('db');

    db.get_products()
      .then(data => {
        console.log(data, '<-=----- PRODUCTS');
        return res.status(200).json({
        data: data,
        success: true,
      })
    })
      .catch(err => {
        res.status(500).json({ error: err, errorMessage: "Something went wrong in the server"});
      });
  },
};
