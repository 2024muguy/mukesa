
// // Routes/routes.js file
// const express = require('express');
// const router = express.Router();
// const passport = require('passport');

// // Import page routes
// const pageRoutes = require('../pageRoutes.js');
// const { createMembership } = require('../Controllers/registration');

// // Use page routes
// router.use('/', pageRoutes);
// // Import Axios routes
// const { router: axiosRoutes} = require('./axiosRoutes.js');

// // Use Axios routes
// router.use('/axiosRoutes', axiosRoutes);

// const { router: kcb } = require("../KCB/Routes/kcb.js");
// router.use('/kcb', kcb);

// // Import controllers
// const lipaNaMpesaRoutes = require("../LipaNaMpesa/Routes/lipanampesa.js");
// const lipaNaMpesaController = require("../LipaNaMpesa/Controllers/lipanampesa.js");
// const registrationController = require("../Controllers/registration.js");
// const paymentController = require("../Controllers/payment.js");
// const memberController = require("../Controllers/member.js");
// const { loginRouter, requireLogin, requireLogout, sendPasswordResetLink, changePassword } = require("../Controllers/login.js"); // Import loginRouter instead of router
// const generatorController = require("../Controllers/generator.js");

// // Lipa Na Mpesa Routes
// router.use('/lipaNaMpesa', lipaNaMpesaRoutes);

// // Lipa Na Mpesa Routes
// router.post('/lipaNaMpesa/initiateSTKPush', lipaNaMpesaController.initiateSTKPush);
// router.post('/lipaNaMpesa/stkPushCallback/:Order_ID', lipaNaMpesaController.stkPushCallback);
// router.post('/lipaNaMpesa/confirmPayment/:CheckoutRequestID', lipaNaMpesaController.confirmPayment);


// // Registration Routes
// router.post('/register', createMembership);

// // Generator Routes
// router.post('/generateMembershipNumber', generatorController.generateMembershipNumber);
// router.put('/updateMemberDetails/:id', generatorController.updateMemberDetails);
// router.delete('/deleteMember/:id', generatorController.deleteMember);
// // Payment Routes
// router.post('/payment', paymentController.createPayment);
// router.get('/payment', paymentController.getPayments);
// router.put('/payment/:id', paymentController.updatePayment);
// router.delete('/payment/:id', paymentController.deletePayment);
// router.get('/payment/:paymentNumber/receipt', paymentController.generateReceipt);
// router.get('/payment/:paymentNumber/downloadReceipt', paymentController.downloadReceipt);

// // Member Routes
// router.post('/member', memberController.createMember);
// router.get('/member', memberController.getMembers);
// router.get('/member/:registrationNumber', memberController.getMember);
// router.get('/member/email/:email', memberController.getMemberByEmail);
// router.put('/member/:id', memberController.updateMember);
// router.delete('/member/:id', memberController.deleteMember);

// // Login Routes
// router.post('/login', loginRouter.post('/login'));
// router.post('/signup', loginRouter.post('/signup'));
// router.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
// });
// router.post('/forgotPassword', loginRouter.post('/forgotPassword'));
// router.post('/auth/google', passport.authenticate('google-login', { scope: ["profile", "email"] }));

// // Add route for profile
// router.get('/profile', requireLogin, loginRouter.get('/profile'));

// // Add route for sendPasswordResetLink
// router.post('/sendPasswordResetLink', async (req, res) => {
//     try {
//         const { email } = req.body;
//         const result = await sendPasswordResetLink(email);
//         res.status(200).json(result);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ success: false, error: error.message });
//     }
// });
// // Add route for changePassword
// router.post('/changePassword', async (req, res) => {
//     try {
//         const { newPassword } = req.body;
//         const result = await changePassword(newPassword);
//         res.status(200).json(result);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ success: false, error: error.message });
//     }
// });

// // Member Access Route
// router.get('/memberAccess', requireLogin, (req, res) => {
//     // Route accessible only to logged-in users
//     res.send('Welcome to the member access area!');
// });

// module.exports = router;



// // Routes/routes.js file
// const express = require('express');
// const router = express.Router();

// // Import page routes
// const pageRoutes = require('../pageRoutes.js');

// // Use page routes
// router.use('/', pageRoutes);
// // // Import Axios routes
// // const axiosRoutes = require('./axiosRoutes.js');

// // // Use Axios routes
// // router.use('/', axiosRoutes);

// const { router: kcb } = require("../KCB/Routes/kcb.js");
// router.use('/kcb', kcb);

// // Import controllers
// const lipaNaMpesaRoutes = require("../LipaNaMpesa/Routes/lipanampesa.js");
// const lipaNaMpesaController = require("../LipaNaMpesa/Controllers/lipanampesa.js");
// const registrationController = require("../Controllers/registration.js");
// const paymentController = require("../Controllers/payment.js");
// const memberController = require("../Controllers/member.js");
// const { loginRouter, requireLogin, requireLogout, sendPasswordResetLink, changePassword } = require("../Controllers/login.js"); // Import loginRouter instead of router
// const generatorController = require("../Controllers/generator.js");

// // Lipa Na Mpesa Routes
// router.use('/lipaNaMpesa', lipaNaMpesaRoutes);

// // Lipa Na Mpesa Routes
// router.post('/lipaNaMpesa/initiateSTKPush', lipaNaMpesaController.initiateSTKPush);
// router.post('/lipaNaMpesa/stkPushCallback/:Order_ID', lipaNaMpesaController.stkPushCallback);
// router.post('/lipaNaMpesa/confirmPayment/:CheckoutRequestID', lipaNaMpesaController.confirmPayment);


// // Registration Routes
// router.post('/registration', registrationController.createMembership);

// // Generator Routes
// router.post('/generateMembershipNumber', generatorController.generateMembershipNumber);
// router.put('/updateMemberDetails/:id', generatorController.updateMemberDetails);
// router.delete('/deleteMember/:id', generatorController.deleteMember);
// // Payment Routes
// router.post('/payment', paymentController.createPayment);
// router.get('/payment', paymentController.getPayments);
// router.put('/payment/:id', paymentController.updatePayment);
// router.delete('/payment/:id', paymentController.deletePayment);
// router.get('/payment/:paymentNumber/receipt', paymentController.generateReceipt);
// router.get('/payment/:paymentNumber/downloadReceipt', paymentController.downloadReceipt);

// // Member Routes
// router.post('/member', memberController.createMember);
// router.get('/member', memberController.getMembers);
// router.get('/member/:registrationNumber', memberController.getMember);
// router.get('/member/email/:email', memberController.getMemberByEmail);
// router.put('/member/:id', memberController.updateMember);
// router.delete('/member/:id', memberController.deleteMember);

// // Login Routes
// // Add route for login
// router.post('/login', loginRouter.post('/login'));
// router.post('/signup', loginRouter.post('/signup'));
// router.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
// });
// router.post('/forgotPassword', loginRouter.post('/forgotPassword'));
// router.post('/auth/google', passport.authenticate('google-login', { scope: ["profile", "email"] }));

// // Add route for profile
// router.get('/profile', requireLogin, loginRouter.get('/profile'));

// // Add route for sendPasswordResetLink
// router.post('/sendPasswordResetLink', async (req, res) => {
//     try {
//         const { email } = req.body;
//         const result = await sendPasswordResetLink(email);
//         res.status(200).json(result);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ success: false, error: error.message });
//     }
// });
// // Add route for changePassword
// router.post('/changePassword', async (req, res) => {
//     try {
//         const { newPassword } = req.body;
//         const result = await changePassword(newPassword);
//         res.status(200).json(result);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ success: false, error: error.message });
//     }
// });

// // Member Access Route
// router.get('/memberAccess', requireLogin, (req, res) => {
//     // Route accessible only to logged-in users
//     res.send('Welcome to the member access area!');
// });

// module.exports = router;








// const express = require('express');
// const router = express.Router();
// const passport = require('passport');
// const loginController = require("../Controllers/login.js");

// // Import page routes
// const pageRoutes = require('../pageRoutes.js');
// const { createMembership } = require('../Controllers/registration');

// // Use page routes
// router.use('/', pageRoutes);

// // Import Axios routes
// const { router: axiosRoutes } = require('./axiosRoutes.js');

// // Use Axios routes
// router.use('/axiosRoutes', axiosRoutes);

// const { router: kcb } = require("../KCB/Routes/kcb.js");
// router.use('/kcb', kcb);

// // Import controllers
// const lipaNaMpesaRoutes = require("../LipaNaMpesa/Routes/lipanampesa.js");
// const lipaNaMpesaController = require("../LipaNaMpesa/Controllers/lipanampesa.js");
// const registrationController = require("../Controllers/registration.js");
// const paymentController = require("../Controllers/payment.js");
// const memberController = require("../Controllers/member.js");
// const generatorController = require("../Controllers/generator.js");

// // Lipa Na Mpesa Routes
// router.use('/lipaNaMpesa', lipaNaMpesaRoutes);

// // Lipa Na Mpesa Routes
// router.post('/lipaNaMpesa/initiateSTKPush', lipaNaMpesaController.initiateSTKPush);
// router.post('/lipaNaMpesa/stkPushCallback/:Order_ID', lipaNaMpesaController.stkPushCallback);
// router.post('/lipaNaMpesa/confirmPayment/:CheckoutRequestID', lipaNaMpesaController.confirmPayment);

// // Registration Routes
// router.post('/register', createMembership);

// // Generator Routes
// router.post('/generateMembershipNumber', generatorController.generateMembershipNumber);
// router.put('/updateMemberDetails/:id', generatorController.updateMemberDetails);
// router.delete('/deleteMember/:id', generatorController.deleteMember);

// // Payment Routes
// router.post('/payment', paymentController.createPayment);
// router.get('/payment', paymentController.getPayments);
// router.put('/payment/:id', paymentController.updatePayment);
// router.delete('/payment/:id', paymentController.deletePayment);
// router.get('/payment/:paymentNumber/receipt', paymentController.generateReceipt);
// router.get('/payment/:paymentNumber/downloadReceipt', paymentController.downloadReceipt);

// // Member Routes
// router.post('/member', memberController.createMember);
// router.get('/member', memberController.getMembers);
// router.get('/member/:registrationNumber', memberController.getMember);
// router.get('/member/email/:email', memberController.getMemberByEmail);
// router.put('/member/:id', memberController.updateMember);
// router.delete('/member/:id', memberController.deleteMember);

// // Login Routes
// router.post('/login', loginController.signIn); // Corrected method name
// router.post('/signup', loginController.signUp); // Corrected method name
// router.get('/logout', loginController.logout);
// router.post('/forgotPassword', loginController.forgotPassword); // Corrected method name
// router.post('/auth/google', passport.authenticate('google-login', { scope: ["profile", "email"] }));

// // Add route for profile
// router.get('/profile', loginController.profile);

// // Add route for sendPasswordResetLink
// router.post('/sendPasswordResetLink', loginController.sendPasswordResetLink);

// // Add route for changePassword
// router.post('/changePassword', loginController.changePassword);

// // Member Access Route
// router.get('/memberAccess', loginController.memberAccess);

// module.exports = router;





const express = require('express');
const router = express.Router();
const passport = require('passport');
const loginRouter = require("../Controllers/login.js"); // Change import to directly import loginRouter

// Import page routes
const pageRoutes = require('../pageRoutes.js');
const { createMembership } = require('../Controllers/registration');

// Use page routes
router.use('/', pageRoutes);

// Import Axios routes
const { router: axiosRoutes } = require('./axiosRoutes.js');

// Use Axios routes
router.use('/axiosRoutes', axiosRoutes);

const { router: kcb } = require("../KCB/Routes/kcb.js");
router.use('/kcb', kcb);

// Import controllers
const lipaNaMpesaRoutes = require("../LipaNaMpesa/Routes/lipanampesa.js");
const lipaNaMpesaController = require("../LipaNaMpesa/Controllers/lipanampesa.js");
const registrationController = require("../Controllers/registration.js");
const paymentController = require("../Controllers/payment.js");
const memberController = require("../Controllers/member.js");
const generatorController = require("../Controllers/generator.js");

// Lipa Na Mpesa Routes
router.use('/lipaNaMpesa', lipaNaMpesaRoutes);

// Lipa Na Mpesa Routes
router.post('/lipaNaMpesa/initiateSTKPush', lipaNaMpesaController.initiateSTKPush);
router.post('/lipaNaMpesa/stkPushCallback/:Order_ID', lipaNaMpesaController.stkPushCallback);
router.post('/lipaNaMpesa/confirmPayment/:CheckoutRequestID', lipaNaMpesaController.confirmPayment);

// Registration Routes
router.post('/register', createMembership);

// Generator Routes
router.post('/generateMembershipNumber', generatorController.generateMembershipNumber);
router.put('/updateMemberDetails/:id', generatorController.updateMemberDetails);
router.delete('/deleteMember/:id', generatorController.deleteMember);

// Payment Routes
router.post('/payment', paymentController.createPayment);
router.get('/payment', paymentController.getPayments);
router.put('/payment/:id', paymentController.updatePayment);
router.delete('/payment/:id', paymentController.deletePayment);
router.get('/payment/:paymentNumber/receipt', paymentController.generateReceipt);
router.get('/payment/:paymentNumber/downloadReceipt', paymentController.downloadReceipt);

// Member Routes
router.post('/member', memberController.createMember);
router.get('/member', memberController.getMembers);
router.get('/member/:registrationNumber', memberController.getMember);
router.get('/member/email/:email', memberController.getMemberByEmail);
router.put('/member/:id', memberController.updateMember);
router.delete('/member/:id', memberController.deleteMember);

// Login Routes
router.use('/', loginRouter); // Use the loginRouter directly

module.exports = router;
