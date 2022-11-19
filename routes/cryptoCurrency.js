const express = require('express');
const router = express.Router();
const Currency = require('../models/currencyConvert');

router.get('/', async (req, res) => {
  try {
    res.send('hello')
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

router.post('/', async (req, res) => {
  try {
    const newCurrency = await Currency.create({ name: req.body.amount, email: req.body.coin, enrollnumber: req.body.currency });
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Credentials',true)
     res.send({ newCurrency });
  } catch(err) {
    res.status(400).send({ error: err });
  }

});


module.exports = router;