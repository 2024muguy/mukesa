
// Import middleware for access token and KCB STK Push
const { accessToken, stkPush } = require("../Middlewares/kcb");

// Define KCB STK Push controller function
const initiateKCBSTKPush = async (req, res, next) => {
    try {
        // Get access token using middleware
        accessToken(req, res, async () => {

            // Ensure all fields in the request body are filled
            const { amount, invoiceNumber } = req.body;

            if (!amount || !invoiceNumber) {
                return res.status(400).json({
                    message: 'You must supply all the parameters'
                });
            }

            // Make STK Push using middleware
            stkPush(req, res, next);
        });
    } catch (error) {
        console.error("Something went wrong when trying to initiate KCB STK Push ", error);
        return res.status(500).json({
            message: 'Something went wrong when trying to initiate KCB STK Push.'
        });
    }
};

module.exports = {
    initiateKCBSTKPush
};