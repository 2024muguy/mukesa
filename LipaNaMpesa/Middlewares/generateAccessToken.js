const axios = require("axios");
require('dotenv').config();

// Define accessToken function
const accessToken = async (req, res, next) => {
    try {
        const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
        const auth = Buffer.from(`${process.env.SAFARICOM_CONSUMER_KEY}:${process.env.SAFARICOM_CONSUMER_SECRET}`).toString('base64');

        const response = await axios.post(url, {}, {
            headers: {
                "Authorization": `Basic ${auth}`
            }
        });

        req.safaricom_access_token = response.data.access_token;
        next();
    } catch (error) {
        console.error("Access token error ", error);
        res.status(401).send({
            "message": 'Something went wrong when trying to process your payment',
            "error": error.message
        });
    }
};

module.exports = accessToken;



// // Import mpesa middleware
// const accessToken = require("./mpesa.middleware");

// // Define function for mpesa callback
// const stkPushCallback = async (req, res) => {
//     try {
//         // Get data from callback
//         const { MerchantRequestID, CheckoutRequestID, ResultCode, ResultDesc, CallbackMetadata } = req.body.Body.stkCallback;
//         const meta = Object.values(await CallbackMetadata.Item);
        
//         // Destructure data
//         const PhoneNumber = meta.find(o => o.Name === 'PhoneNumber').Value.toString(); // Format phone number if needed
//         const Amount = meta.find(o => o.Name === 'Amount').Value.toString();
//         const MpesaReceiptNumber = meta.find(o => o.Name === 'MpesaReceiptNumber').Value.toString();
//         const TransactionDate = meta.find(o => o.Name === 'TransactionDate').Value.toString();

//         // You can now process the data returned from the callback as needed
//         // Example: Update your database with the transaction details
//         console.log("-".repeat(20), " OUTPUT IN THE CALLBACK ", "-".repeat(20));
//         console.log(`
//             Order_ID : ${Order_ID},
//             MerchantRequestID : ${MerchantRequestID},
//             CheckoutRequestID: ${CheckoutRequestID},
//             ResultCode: ${ResultCode},
//             ResultDesc: ${ResultDesc},
//             PhoneNumber : ${PhoneNumber},
//             Amount: ${Amount}, 
//             MpesaReceiptNumber: ${MpesaReceiptNumber},
//             TransactionDate : ${TransactionDate}
//         `);

//         // Return a success response to Safaricom
//         res.json(true);
//     } catch (e) {
//         console.error("Error while trying to update LipaNaMpesa details from the callback", e);
//         res.status(503).send({
//             message: "Something went wrong with the callback",
//             error: e.message
//         });
//     }
// };
// module.exports = {
//     accessToken,
//     stkPushCallback
// };