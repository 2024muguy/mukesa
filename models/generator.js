const mongoose = require('mongoose');
    const Membership = new mongoose.Schema({
    regNumber: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 10,
    },
    year: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    member: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member'
    }]
  });
  
  module.exports = mongoose.model('Membership', Membership);
  module.exports = Membership;