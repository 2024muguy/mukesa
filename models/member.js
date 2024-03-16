const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: { type: String, required: true },
  registrationNumber: { type: Number, required: true },
  mukesaMembershipNumber: { type: String, required: true },
  contact: { type: Number, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
  },
  membership: { // Creating a reference to the Membership model
    type: Schema.Types.ObjectId,
    ref: 'Membership'
  },
  membershipNumber: { // Add a membershipNumber field to store the generated membership number
    number: { type: String, required: true },
    generatedYear: { type: Number, required: true }
  }
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
