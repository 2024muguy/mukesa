
const axios = require('axios');
const dotenv = require('dotenv');
const lipaNaMpesaRoutes = require("../LipaNaMpesa/Routes/lipanampesa.js"); // Changed import to require
const Payment = require('../models/payment');
dotenv.config();

// Constants for paybill and account number
const PAYBILL = "PAYBILL";
const ACCOUNT_NUMBER = "ACCOUNT_NUMBER";

// Function to create a new payment record using MPESA Ussd
const createPayment = async (req, res) => {
  try {
    const { paymentNumber, registrationNumber, amount, paymentDate, receiptNumber, transactionCode, mpesaConfirmationCode } = req.body;
    let response;
    if (transactionCode === process.env.PAYBILL) {
      response = await axios.post('http://localhost:3000/createPaymentMPESA', {
        paymentNumber,
        registrationNumber,
        amount,
        paymentDate,
        receiptNumber,
        transactionCode,
        mpesaConfirmationCode
      });
    } else if (transactionCode === process.env.ACCOUNT_NUMBER) {
      response = await axios.post('http://localhost:3000/createPaymentAccount', {
        paymentNumber,
        surname,
        otherNames,
        registrationNumber,
        amount,
        paymentDate,
        receiptNumber,
        transactionCode,
        bankAccountNumber
      });
    } else {
      return res.status(400).json({ success: false, error: 'Invalid transaction code!' });
    }
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error creating payment:', error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Function to retrieve all payment records
const getPayments = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/getPayments');
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error getting payments:', error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Function to update a specific payment record
const updatePayment = async (req, res) => {
  try {
    const response = await axios.put(`http://localhost:3000/updatePayment/${req.params.id}`, req.body);
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error updating payment:', error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Function to delete a specific payment record
const deletePayment = async (req, res) => {
  try {
    const response = await axios.delete(`http://localhost:3000/deletePayment/${req.params.id}`);
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error deleting payment:', error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Function to generate a receipt for a specific payment record
const generateReceipt = async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:3000/generateReceipt/${req.params.paymentNumber}`);
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error generating receipt:', error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Function to download/print a specific payment record
const downloadReceipt = async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:3000/downloadReceipt/${req.params.paymentNumber}`);
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error downloading receipt:', error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createPayment,
  getPayments,
  updatePayment,
  deletePayment,
  generateReceipt,
  downloadReceipt
};














// // Import routes - Updated import statement to use require
// const lipaNaMpesaRoutes = require("../LipaNaMpesa/Routes/lipanampesa.js"); // Changed import to require
// // Importing Payment model
// const Payment = require('../models/payment');
// require("dotenv").config();
// // Constants for paybill and account number
// const PAYBILL = "PAYBILL";
// const ACCOUNT_NUMBER = "ACCOUNT_NUMBER";

// //1. Creating a new payment record using MPESA Ussd 
// const createPayment = (req, res) => {
//   // Checking if the transaction code matches that of MPESA
//   if (req.body.transactionCode === process.env.PAYBILL) {
//     // Inserting M-PESA payment into the payment table 
//     Payment.create({
//       paymentNumber: req.body.paymentNumber,
//       registrationNumber: req.body.registrationNumber,
//       amount: req.body.amount,
//       paymentDate: req.body.paymentDate,
//       receiptNumber: req.body.receiptNumber,
//       transactionCode: req.body.transactionCode,
//       paymentMethod: process.env.PAYMENT_METHOD,
//       mpesaConfirmationCode: req.body.mpesaConfirmationCode
//     })
//     .then(doc => {
//       res.json(doc);
//       console.log(`Successful insertion! ${doc}`);
//     })
//     .catch(err => {
//       console.error(err); // Output any errors that may occur
//     });
//   } else if (req.body.transactionCode === process.env.ACCOUNT_NUMBER) {
//     // Inserting ACCOUNTS payment into database(payload)
//     Payment.create({
//       paymentNumber: req.body.paymentNumber,
//       surname: req.body.surname,
//       otherNames: req.body.otherNames,
//       registrationNumber: req.body.registrationNumber,
//       amount: req.body.amount,
//       paymentDate: req.body.paymentDate,
//       receiptNumber: req.body.receiptNumber,
//       transactionCode: req.body.transactionCode,
//       paymentMethod: proccess.env.PAYMENT_METHOD,
//       bankAccountNumber: req.body.bankAccountNumber
//     })
//     .then(doc => {
//       res.json(doc);
//       console.log(`Successful insertion! ${doc}`);
//     })
//     .catch(err => {
//       console.error(err); // Output any errors that may occur
//     });
//   } else {
//     // If the transaction code does not match the payment or ACCOUNTS paymant method, display error
//     console.error("Invalid transaction code!");
//     res.json("Invalid transaction code!");
//   }
// };

// // Retrieving all payment records
// const getPayments = (req, res) => {
//   Payment.find()
//   .then(docs => {
//     res.json(docs); // Array of all payment records
//   })
//   .catch(err => {
//     console.error(err); // Output any errors that may occur
//   });
// };

// // Updating a specific payment record
// const updatePayment = (req, res) => {
//   // Checking if the transaction code matches that of MPESA or ACCOUNTS payment
//   if (req.body.transactionCode === PAYBILL) {
//     // Updating M-PESA payment in database
//     Payment.update(
//       { paymentNumber: req.body.paymentNumber }, // Find specific payment record
//       {
//         $set: { // Update the following fields with new values
//           paymentNumber: req.body.paymentNumber,
//           surname: req.body.surname,
//           otherNames: req.body.otherNames,
//           registrationNumber: req.body.registrationNumber,
//           amount: req.body.amount,
//           paymentDate: req.body.paymentDate,
//           receiptNumber: req.body.receiptNumber,
//           transactionCode: req.body.transactionCode,
//           paymentMethod: proccess.env.PAYMENT_METHOD,
//           mpesaConfirmationCode: req.body.mpesaConfirmationCode
//         }
//       }
//     )
//     .then(docs => {
//       console.log(docs); // Output updated array of all payment records
//     })
//     .catch(err => {
//       console.error(err); // Output any errors that may occur
//     });
//   } else if (req.body.transactionCode === ACCOUNT_NUMBER) {
//     // Updating ACCOUNTS payment in database
//     Payment.update(
//       { paymentNumber: req.body.paymentNumber }, // Find specific payment record
//       {
//         $set: { // Update the following fields with new values
//           paymentNumber: req.body.paymentNumber,
//           registrationNumber: req.body.registrationNumber,
//           surname: req.body.surname,
//           otherNames: req.body.otherNames,
//           amount: req.body.amount,
//           paymentDate: req.body.paymentDate,
//           receiptNumber: req.body.receiptNumber,
//           transactionCode: req.body.transactionCode,
//           paymentMethod: proccess.env.PAYMENT_METHOD,
//           bankAccountNumber: req.body.bankAccountNumber
//         }
//       }
//     )
//     .then(docs => {
//       console.log(docs); // Output updated array of all payment records
//     })
//     .catch(err => {
//       console.error(err); // Output any errors that may occur
//     });
//   } else {
//     // If the transaction code does not match the payment or ACCOUNTS paymant method, display error
//     console.error("Invalid transaction code!");
//     res.json("Invalid transaction code!");
//   }
// };

// // Deleting a specific payment record
// const deletePayment = (req, res) => {
//   Payment.deleteOne({ paymentNumber: req.body.paymentNumber }) // Find specific payment record and remove it from database
//   .then(docs => {
//     console.log(docs); // Output updated array of all payment records
//   })
//   .catch(err => {
//     console.error(err); // Output any errors that may occur
//   });
// };

// // Generating a receipt for a specific payment record
// const generateReceipt = (req, res) => {
//   Payment.findOne({ paymentNumber: req.params.paymentNumber })
//     .then(doc => {
//       console.log(doc);
//       // Output specific payment record that matches the search parameter
//       console.log(`Receipt generated for payment number ${doc.paymentNumber}`);
//     })
//     .catch(err => {
//       console.error(err); // Output any errors that may occur
//     });
// };

// // Downloading/Printing a specific payment record
// const downloadReceipt = (req, res) => {
//   Payment.findOne({ paymentNumber: req.params.paymentNumber })
//     .then(doc => {
//       console.log(doc);
//       // Code to download/print receipt goes here
//       console.log(`Receipt downloaded/printed for payment number ${doc.paymentNumber}`);
//     })
//     .catch(err => {
//       console.error(err); // Output any errors that may occur
//     });
// };

// // Wrapping our functions inside a module, ready for export
// module.exports = {
//   createPayment,
//   getPayments,
//   updatePayment,
//   deletePayment,
//   generateReceipt,
//   downloadReceipt
// };