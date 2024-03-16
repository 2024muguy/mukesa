// // Model
// // membership.js
// import mongoose from 'mongoose';
// import moment from 'moment'; // Importing the moment library
// import Member from './member'; // Importing the Member model

// const SCHEMA = mongoose.Schema; // Shortcut for the mongoose schema creation method
// const date = moment().year(); // Getting current year
// const membershipSchema = new SCHEMA({
//   name: { type: String, required: true },
//   email: { 
//     type: String,
//     unique: true,
//     match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
//     required: true
//   },
//   registrationNumber: { type: Number, required: true },
//   yearOfStudy: { type: Number, required: true },
//   interest: { type: String },
//   typeOfMembership: { type: String },
//   // Calculating the end date by adding 1 year to current year
//   endDate: { type: String, default: date + 1 },
//   // Referencing the Member model
//   member: {
//     type: SCHEMA.Types.ObjectId,
//     ref: 'Member'
//   }
// });

// const MembershipRecords = mongoose.model('MembershipRecords', mySchema);

// export default MembershipRecords;