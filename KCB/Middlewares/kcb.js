//Import mpesa middleware 
const accessToken = require("../../LipaNaMpesa/Middlewares/generateAccessToken");

// Define function for KCB STK Push
const stkPush = async (req, res, next) => {
    try {
        const url = "https://uat.buni.kcbgroup.com/mpesav2";
        const auth = Buffer.from(`${process.env.KCB_CONSUMER_KEY}:${process.env.KCB_CONSUMER_SECRET}`).toString('base64');
        
        // Get access token from mpesa middleware
        const access_token = req.safaricom_access_token;

        const payload = {
            "phoneNumber": "+254700123456", // Replace with actual phone number
            "amount": "1",
            "invoiceNumber": "KCBTILLNO-YOURACCREF", // Replace with actual invoice number
            "sharedShortCode": true,
            "orgShortCode": "", // If provided, set to true
            "orgPassKey": "", // Replace with actual pass key
            "callbackUrl": "https://posthere.io/f613-4b7f-b82b",
            "transactionDescription": "school fee payment"
        };

        const response = await axios.post(url, payload, {
            headers: {
                "Authorization": `Basic ${auth}`,
                "apikey": access_token
            }
        });

        // Return response to client
        res.status(200).send({
            "message": "Payment successful",
            "response": response.data
        });
    } catch (error) {
        console.error("KCB STK Push error ", error);
        res.status(401).send({
            "message": 'Something went wrong when trying to process your payment',
            "error": error.message
        });
    }
};

module.exports = {
    accessToken,
    stkPush
};
