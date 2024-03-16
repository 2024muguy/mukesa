

const axios = require('axios');
const Membership = require("../models/member");
const Payment = require("./payment");
const generator = require("./generator"); // Import the generator.js file

// Function for creating a new member record
const createMember = async (req, res) => {
    try {
        const { name, email, yearOfStudy, registrationNumber, typeOfMembership, paymentMethod, password } = req.body;

        // Validate inputs
        if (!name || !email || !yearOfStudy || !registrationNumber || !typeOfMembership || !paymentMethod || !password) {
            return res.status(400).json({ msg: 'Please provide all membership information' });
        }

        // Check payment method
        if (paymentMethod !== "M-PESA" && paymentMethod !== "ACCOUNTS") {
            return res.status(400).json({ msg: 'Invalid payment method' });
        }

        // Create new member object
        let newMember = {
            name,
            email,
            yearOfStudy,
            registrationNumber,
            typeOfMembership,
            paymentMethod,
            password
        };

        // Check M-PESA confirmation code
        if (paymentMethod === "M-PESA" && req.body.mpesaConfirmationCode.length !== 10) {
            return res.status(400).json({ msg: 'Invalid M-PESA confirmation code' });
        }

        // Generate membership number
        const membershipNumber = generator.generateMembershipNumber(registrationNumber, year);
        
        // Add membership number to the member object
        newMember.membershipNumber = {
            number: membershipNumber,
            generatedYear: year // You can adjust this if needed
        };

        // Send POST request to create member
        const response = await axios.post('http://localhost:3000/createMember', newMember);

        return res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error creating member:', error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
};


// Function for retrieving all member records
const getMembers = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/getMembers');
        return res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error retrieving members:', error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
};

// Function for updating a specific member record
const updateMember = async (req, res) => {
    try {
        // Send PUT request to update member
        const response = await axios.put('http://localhost:3000/updateMember', req.body);
        return res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error updating member:', error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
};

// Function for deleting a specific member record
const deleteMember = async (req, res) => {
    try {
        // Send DELETE request to delete member
        const response = await axios.delete('http://localhost:3000/deleteMember', { data: req.body });
        return res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error deleting member:', error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
};

// Function for getting a specific member by email
const getMemberByEmail = async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:3000/getMemberByEmail/${req.params.email}`);
        return res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error getting member by email:', error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
};

// Function for getting a specific member by registration number
const getMember = async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:3000/getMember/${req.params.registrationNumber}`);
        return res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error getting member by registration number:', error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    createMember,
    getMembers,
    getMember,
    getMemberByEmail,
    updateMember,
    deleteMember
};







// // Importing required modules
// const Member = require("../models/member");
// const Payment = require("./payment"); 

// // Function for generating a new membership number
// const generateMembershipNumber = (regNumber, year) => {
//     let membershipNumber = "";
//     // Checking if the registration number has the "ENG" prefix
//     if (regNumber.includes("ENG")) {
//         // Checking registration number length before using substring
//         if (regNumber.length > 4) {
//             membershipNumber += regNumber.substring(0, 3); // Adding the "ENG" prefix to the membership number
//             membershipNumber += year + "-" + regNumber.substring(4); // Adding the year of study and the sequential registration number to the membership number
//         } else {
//             console.log("Invalid registration number format. Unable to generate membership number.");
//         }
//     }
//     // Checking registration number length before using substring
//     else if (regNumber.length > 3) {
//         membershipNumber += regNumber.substring(0, 2); // Adding the first 2 numbers of the serial number to the membership number
//         membershipNumber += year + "-" + regNumber.substring(3); // Adding the year of study and the sequential registration number to the membership number
//     } else {
//         console.log("Invalid registration number format. Unable to generate membership number.");
//     }
  
//     return membershipNumber; // Returning the generated membership number
// };

// // Function for creating a new member record
// const createMember = (req, res) => {
//   // Checking if the payment method is M-PESA or ACCOUNTS before proceeding with creating a new member record
//   if (req.body.paymentMethod === "M-PESA" || req.body.paymentMethod === "ACCOUNTS") {
//     // Checking for required fields in the request body
//     if (!req.body.registrationNumber && req.body.registrationNumber.length > 0) {
//       console.log("Missing required fields for member creation.");
//     } else {
//       // Checking for a valid M-PESA confirmation code before proceeding with creating a new member record
//       if (req.body.paymentMethod === "M-PESA" && req.body.mpesaConfirmationCode.length !== 10) {
//         console.log("Invalid M-PESA confirmation code.")
//       } else {
//         Membership.create({
//             name: req.body.name,
//             registrationNumber: req.body.registrationNumber,
//             // Generating membership number for the new member
//             mukesaMembershipNumber: generateMembershipNumber(req.body.registrationNumber, 2021),
//             contact: req.body.contact,
//             email: req.body.email
//         })
//         .then(doc => {
//             res.json(doc); // Return the newly created member record
//             console.log(`Successful insertion! ${doc}`);
//         })
//         .catch(err => {
//             console.error(err); // Output any database errors that may occur
//         });
//       }    
//     }
//   } else {
//     console.log("Unknown payment method selected."); // Output error message
//   }
// };

// // Function for retrieving all member records
// const getMembers = (req, res) => {
//     Membership.find()
//     .then(docs => {
//         res.json(docs); // Return array of all member records
//     })
//     .catch(err => {
//         console.error(err); // Output any database errors that may occur
//     });
// };

// // Function for updating a specific member record
// const updateMember = (req, res) => {
//     // Checking if the payment method is M-PESA or ACCOUNTS before proceeding with updating a member record
//     if (req.body.paymentMethod === "M-PESA" || req.body.paymentMethod === "ACCOUNTS") {
//         // Checking for required fields in the request body
//         if (!req.body.registrationNumber) {
//             console.log("Missing required fields for member update.");
//         } else {
//             // Checking for a valid M-PESA confirmation code before proceeding with creating a new member record
//             if (req.body.paymentMethod === "M-PESA" && req.body.mpesaConfirmationCode.length !== 10) {
//             console.log("Invalid M-PESA confirmation code.")
//             } else {
//                 Membership.updateOne(
//                     { registrationNumber: req.body.registrationNumber }, // Find specific member record
//                     {
//                         $set: { // Update the following fields with new values
//                             name: req.body.name,
//                             contact: req.body.contact,
//                             email: req.body.email 
//                         }
//                     }
//                 )
//                 .then(docs => {
//                     res.json(docs); // Return updated array of all member records
//                 })
//                 .catch(err => {
//                     console.error(err); // Output any database errors that may occur
//                 });
//             }
//         }
//     } else {
//         console.log("Unknown payment method selected."); // Output error message
//     }
// };

// // Function for deleting a specific member record
// const deleteMember = (req, res) => {
//     Membership.deleteOne(
//         { registrationNumber: req.body.registrationNumber } // Find specific member record and remove it from the database
//     )
//     .then(docs => {
//         res.json(docs); // Return updated array of all member records
//     })
//     .catch(err => {
//         console.error(err); // Output any database errors that may occur
//     });
// };

// // Function for getting a specific member by email
// const getMemberByEmail = (req, res) => {
//     Membership.findOne({ email: req.params.email })
//         .then(doc => {
//             console.log(doc);
//             res.json(doc); // Return specific member record that matches the email search param
//         })
//         .catch(err => {
//             console.error(err); // Output any database errors that may occur
//         });
// };

// // Function for getting a specific member by registrationNumber
// const getMember = (req, res) => {
//     Membership.findOne({ registrationNumber: req.params.registrationNumber })
//         .then(docs => {
//             res.json(docs); // Return specific member record that matches the registrationNumber search param
//         })
//         .catch(err => {
//             console.error(err); // Output any database errors that may occur
//         });
// };

// // Wrapping our functions inside a module, ready for export
// module.exports = {
//     createMember,
//     getMembers,
//     getMember,
//     getMemberByEmail,
//     updateMember,
//     deleteMember
// };