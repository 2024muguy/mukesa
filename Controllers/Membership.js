// // Membership records
// import axios from "axios"; // Importing the axios HTTP client
// const MembershipRecords = require("../models/Membership")

// // URL and endpoint constants
// const API_URL = 'http://mywebsite.com/';
// const MEMBERSHIP_ENDPOINT = 'api/membership';

// // Controller for Membership
// const API = {
//   // Function for creating a new membership record
//   createMembership: function(req, res) {
//     // Checking for required fields in the request body
//     if (!req.body.name || !req.body.email || !req.body.registrationNumber) {
//       res.json({ success: false, message: 'Incomplete fields' });
//     } else {
//       // Getting user input
//       let name = req.body.name;
//       let email = req.body.email;
//       let registrationNumber = req.body.registrationNumber;
//       let yearOfStudy = req.body.yearOfStudy;
//       let interest = req.body.interest;
//       let typeOfMembership = req.body.typeOfMembership
//       // Posting the HTTP request to the API
//       axios
//        .post(API_URL + MEMBERSHIP_ENDPOINT, {
//         params: {
//           name: name,
//           email: email,
//           registrationNumber: registrationNumber,
//           yearOfStudy: yearOfStudy,
//           interest: interest,
//           typeOfMembership: typeOfMembership
//         }
//        })
//        .then(res => {
//         console.log(`Status code: ${res.status}`);
//         console.log('Body: ');
//         console.log(res.data);
//        })
//        .catch(err => {
//         console.error(err);
//        });
//     }
//   },
//   // Function to get all membership records
//   getAllMemberships: function(res) {
//     axios
//      .get(API_URL + MEMBERSHIP_ENDPOINT)
//      .then(res => {
//       console.log(`HTTP status code ${res.status}`);
//       console.log(`All membership records retrieved successfully. ${res}`);
//      })
//      .catch(err => {
//       console.error(`Error getting membership records: ${err}`);
//      });
//   },
//   // Function for retrieving a specific membership record by email
//   getMembership: function(email) {
//     axios
//      .get(API_URL + MEMBERSHIP_ENDPOINT + email)
//      .then(res => {
//       console.log(`HTTP status code ${res.status}`);
//       console.log(`Record ${email} retrieved successfully. ${res}`);
//      })
//      .catch(err => {
//       console.error(`Error getting record ${email}: ${err}`);
//      })
//   },
//   // Function for updating a specific membership record
//   updateMembership: function(req, res) {
//     // Checking for required fields in the request body
//     if (!req.body.email) {
//       res.json({ success: false, message: 'No membership record selected for update' });
//     } else {
//       // Updating specific membership record
//       let name = req.body.name;
//       let email = req.body.email;
//       let yearOfStudy = req.body.yearOfStudy;
//       let interest = req.body.interest;
//       let typeOfMembership = req.body.typeOfMembership
//       // PUT request to the endpoint
//       axios
//        .put(API_URL + MEMBERSHIP_ENDPOINT, {
//          params: {
//            name: name,
//            email: email,
//            yearOfStudy: yearOfStudy,
//            interest: interest,
//            typeOfMembership: typeOfMembership
//          }
//        })
//        .then(res => {
//         console.log(`HTTP status code ${res.statusCode}`);
//         console.log(`Record for ${email} updated successfully.`);
//        })
//        .catch(err => {
//          console.err(`Error updating record for ${email}`);
//        });
//     }
//   },
//   // Function for removing a specific membership record
//   removeMembership: function(email) {
//     axios
//      .delete(API_URL + MEMBERSHIP_ENDPOINT, {
//        params: {
//          email: email
//        }
//      })
//      .then(res => {
//       console.log(`HTTP status code ${res.status}`)
//       console.log(`Record deleted successfully: ${res.data}`);
//      })
//      .catch(err => {
//       console.error(`Error deleting membership record: ${err}`);
//      });
//   }
// }

// export default API; 