// contactSchema.js
const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true
  }
});
let Contact = mongoose.model('Contact', contactSchema);
module.exports=Contact