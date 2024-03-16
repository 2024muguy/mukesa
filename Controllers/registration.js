
const axios = require('axios');
const Registration = require('../models/registration');

// Creating a new membership record
const createMembership = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { name, email, yearOfStudy, registrationNumber, typeOfMembership, paymentMethod, password } = req.body;

    // Validate inputs
    if (!name || !email || !yearOfStudy || !registrationNumber || !typeOfMembership || !paymentMethod || !password) {
      return res.status(400).json({ msg: 'Please provide all membership information' });
    }

    // Create new membership object
    const newMembership = {
      name,
      email,
      yearOfStudy,
      registrationNumber,
      typeOfMembership,
      paymentMethod,
      password
    };

    // Save the new membership to the database
    const membership = await Registration.create(newMembership);

    // Redirect the user to the home page (index) after successful enrollment
    res.redirect('/');

    const registrations = await Registration.find();

  // Log the retrieved data
  console.log(registrations);
  } catch (error) {
    console.error('Error creating membership:', error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { 
  createMembership
};







// // Import Registration model
// const Registration = require('../models/registration');
// // Creating a new membership record
// const createMembership = (req, res) => {
//   const { name, email, yearOfStudy, registrationNumber, typeOfMembership, paymentMethod, password } = req.body; // Destructure req.body object

//   // Validate sport inputs
//   if(!name || !email || !yearOfStudy || !registrationNumber || !typeOfMembership || !paymentMethod || !password) {
//     return res.status(400).json({ msg: 'Please provide all sport information' });
//   }

//   // Create new membership object
//   const newMembership = new Membership({
//     name,
//     email,
//     yearOfStudy,
//     registrationNumber,
//     Payment,
//     password
//   });

//   // Save new membership object to database
//   newMembership.save()
//     .then(doc => {
//        console.log(doc);

//       //Assign 'registrationNumber' to 'member-registrationNumber' variable
//       member_registrationNumber = registrationNumber;

//       // Get registration details document
//       Registration.findOne({ registrationNumber: registrationNumber })
//         .then(doc => {
//           if (!doc) res.status(404).json({ msg: 'Registration details document not found' })
//           else {
//             //Return membership result for 'true' and 'registrationNumber' if condition is met
//             res.json({ 
//             result: true,
//             paymentMethod: paymentMethod,
//             registrationNumber: doc.registrationNumber 
//           });
//           console.log('Membership record successfully created');
//           }
//         })
//     })
//     .catch(err => {
//       console.error(err);
//     });
// };

// //Wrappping our functions inside a module ready for export
// module.exports = { 
// createMembership, 
//                     };