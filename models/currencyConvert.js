const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
  amount: {
    type: String,
  },
  coin: {
    type: String,
  },
  currency: {
    type: String,
  }
});

module.exports = mongoose.model('currencyConvert', currencySchema);



