const mongoose = require('mongoose')


const schema = new mongoose.Schema({
  items: [{
    image: { type: String },
    url: { type: String }
  }],
  name: { type: String },
})


module.exports = mongoose.model('Ad', schema)