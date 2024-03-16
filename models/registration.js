const mongoose = require('mongoose');

// Membership schema
const membershipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: String,
  yearOfStudy: {
    type: Number,
    required: true
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true // Ensure registrationNumber is unique
  },
  typeOfMembership: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},
{ 
  timestamps: {createdAt: 'created_at'} 
});

const Registration = mongoose.model('Registration', membershipSchema);

module.exports = Registration;
