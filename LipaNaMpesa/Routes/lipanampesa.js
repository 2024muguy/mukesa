const express = require('express');
const LipaNaMpesaRoutes = express.Router(); // Change variable name to LipaNaMpesaRoutes
const Timestamp = require("../Utils/timestamp.js");
const {
    initiateSTKPush,
    stkPushCallback,
    confirmPayment
} = require("../Controllers/lipanampesa.js");

const  accessToken  = require("../Middlewares/generateAccessToken.js");

// Make sure all middleware functions are defined and imported correctly
console.log(accessToken); // Verify accessToken is properly imported and defined
console.log(initiateSTKPush); // Verify initiateSTKPush is properly imported and defined
console.log(confirmPayment); // Verify confirmPayment is properly imported and defined


LipaNaMpesaRoutes.post('/stkPush', accessToken, initiateSTKPush); // Change router to LipaNaMpesaRoutes
LipaNaMpesaRoutes.post('/stkPushCallback/:Order_ID', stkPushCallback); // Change router to LipaNaMpesaRoutes
LipaNaMpesaRoutes.get('/confirmPayment/:CheckoutRequestID', accessToken, confirmPayment); // Change router to LipaNaMpesaRoutes

module.exports = LipaNaMpesaRoutes;
