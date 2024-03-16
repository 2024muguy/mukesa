
// // Controllers/login.js file
// const axios = require('axios');
// const express = require("express");
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const Member = require("../models/registration"); // Import the Member model
// const loginRouter = express.Router(); // Change variable name to loginRouter

// // Function for creating a new member record
// const createMember = async (userData) => {
//     try {
//         // Send POST request to create member
//         const response = await axios.post('/createMember', userData);
//         return response.data;
//     } catch (error) {
//         throw new Error('Error creating member:', error.message);
//     }
// };

// // Sign in controller
// loginRouter.post('/signIn', passport.authenticate('local', {
//     successRedirect: '/memberAccess',
//     failureRedirect: '/signUp',
//     failureFlash: true
// }));

// // Sign up controller
// loginRouter.post('/signUp', async (req, res, next) => {
//     try {
//         const { name, email, yearOfStudy, registrationNumber, typeOfMembership, paymentMethod, password } = req.body;

//         // Validate inputs
//         if (!name || !email || !yearOfStudy || !registrationNumber || !typeOfMembership || !paymentMethod || !password) {
//             return res.status(400).json({ msg: 'Please provide all membership information' });
//         }

//         // Create new member object
//         const newMemberData = {
//             name,
//             email,
//             yearOfStudy,
//             registrationNumber,
//             typeOfMembership,
//             paymentMethod,
//             password
//         };

//         // Call createMember function to create new member
//         const memberData = await createMember(newMemberData);

//         // Redirect to member access page upon successful sign-up
//         res.redirect('/memberAccess');
//     } catch (error) {
//         console.error('Error signing up:', error.message);
//         // Handle errors appropriately
//         next(error);
//     }
// });

// // Sign in authentication
// passport.use(new LocalStrategy(
//     { usernameField: 'registrationNumber' },
//     async (registrationNumber, password, done) => {
//         try {
//             // Find the member with the provided registration number in the database
//             const member = await Member.findOne({ registrationNumber });

//             // Check if member exists and if the password is correct
//             if (!member || !member.validatePassword(password)) {
//                 // Return false if member does not exist or password is incorrect
//                 return done(null, false, { message: 'Incorrect Registration Number or Password' });
//             }

//             // Return the authenticated member
//             return done(null, member);
//         } catch (error) {
//             console.error('Error authenticating member:', error.message);
//             // Pass any errors to the next middleware
//             return done(error);
//         }
//     }
// ));

// // Serialize user
// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// // Deserialize user
// passport.deserializeUser((id, done) => {
//     Member.findById(id, (err, user) => {
//         done(err, user);
//     });
// });

// // Login middleware
// const requireLogin = (req, res, next) => {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/signIn');
// };

// // Logout controller
// loginRouter.get('/logout', (req, res) => {
//     res.render('logout'); // Renders the logout page
// });

// loginRouter.post('/logout', (req, res) => {
//     req.logout(); // Logs out the user
//     res.redirect('/'); // Redirects to the home page
// });

// // Logout middleware
// const requireLogout = (req, res, next) => {
//     if (!req.isAuthenticated()) {
//         return next();
//     }
//     req.logout();
//     res.redirect('/');
// };

// // Function for sending a password reset link to the user's email
// const sendPasswordResetLink = async (email) => {
//     try {
//         const resetToken = generateResetToken(); // Function to generate a unique reset token
//         const resetLink = `https://yourwebsite.com/reset-password?token=${resetToken}`;

//         await sendEmail({
//             to: email,
//             subject: 'Password Reset',
//             html: `Click the following link to reset your password: <a href="${resetLink}">${resetLink}</a>`
//         });
      
//         return { message: 'Password reset link sent successfully' };
//     } catch (error) {
//         throw new Error('Error sending password reset link:', error.message);
//     }
// };

// // Function for generating a reset token
// const generateResetToken = () => {
//     // Function to generate a unique reset token
//     return Date.now().toString();
// };

// // Function for invalidating all current reset tokens
// const invalidateResetTokens = async (userId) => {
//     // Function to invalidate all current reset tokens
//     try {
//         await User.updateMany(
//             { _id: userId }, 
//             { $pull: { resetTokens: { $exists: true } } }, 
//             { multi: true }
//         );
//     } catch (error) {
//         console.error('Error invalidating reset tokens:', error.message);
//     }
// };

// // Function for changing the user's password
// const changePassword = async (newPassword) => {
//     try {
//         const user = await User.findById(userId);
//         if (!user) {
//             throw new Error('User not found');
//         }

//         // Update user's password
//         user.password = newPassword;
//         await user.save();

//         // Invalidate existing reset tokens
//         await invalidateResetTokens(userId);
      
//         return { message: 'Password changed successfully' };
//     } catch (error) {
//         throw new Error('Error changing password:', error.message);
//     }
// };

// // Forgot password controller
// loginRouter.post('/forgotPassword', async (req, res, next) => {
//     try {
//         const { email } = req.body;
//         const result = await sendPasswordResetLink(email);
//         res.status(200).json(result);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ success: false, error: error.message });
//     }
// });

// // Change password controller
// loginRouter.post('/changePassword', async (req, res, next) => {
//     try {
//         const { newPassword } = req.body;
//         const result = await changePassword(newPassword);
//         res.status(200).json(result);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ success: false, error: error.message });
//     }
// });

// // Route for posting comments or starting a conversation
// loginRouter.post('/postComment', requireLogin, async (req, res) => {
//     try {
//         const { comment } = req.body;

//         // Validate comment
//         if (!comment) {
//             return res.status(400).json({ msg: 'Please provide a comment' });
//         }

//         // Return success response
//         res.status(200).json({ success: true, message: 'Comment posted successfully' });
//     } catch (error) {
//         console.error('Error posting comment:', error.message);
//         res.status(500).json({ success: false, error: 'Failed to post comment' });
//     }
// });

// // Profile controller
// loginRouter.get('/profile', requireLogin, async (req, res, next) => {
//     try {
//         const userProfile = {
//             name: req.user.name,
//             email: req.user.email,
//             membershipNumber: req.user.membershipNumber
//             // Add other profile fields as needed
//         };
//         res.status(200).json(userProfile);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ success: false, error: error.message });
//     }
// });

// module.exports = { loginRouter, requireLogin, requireLogout, sendPasswordResetLink, changePassword };














const express = require("express");
const loginRouter = express.Router(); // Change variable name to loginRouter
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Member = require("../models/registration"); // Import the Member model

// // Include the requireLogin middleware from the comment.js controller
// const { requireLogin } = require("./comment.js");

// Sign in controller
loginRouter.post('/signIn', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signUp',
    failureFlash: true
}));

// Sign up controller
loginRouter.post('/signUp', async (req, res, next) => {
    try {
        const { name, email, yearOfStudy, registrationNumber, typeOfMembership, paymentMethod, password } = req.body;

        // Validate inputs
        if (!name || !email || !yearOfStudy || !registrationNumber || !typeOfMembership || !paymentMethod || !password) {
            return res.status(400).json({ msg: 'Please provide all membership information' });
        }

        // Create new member object
        const newMemberData = {
            name,
            email,
            yearOfStudy,
            registrationNumber,
            typeOfMembership,
            paymentMethod,
            password
        };

        // Call createMember function to create new member
        const memberData = await createMember(newMemberData);

        // Redirect to member access page upon successful sign-up
        res.redirect('/comments');
    } catch (error) {
        console.error('Error signing up:', error.message);
        // Handle errors appropriately
        next(error);
    }
});

// Sign in authentication
passport.use(new LocalStrategy(
    { usernameField: 'registrationNumber' },
    async (registrationNumber, password, done) => {
        try {
            // Find the member with the provided registration number in the database
            const member = await Member.findOne({ registrationNumber });

            // Check if member exists and if the password is correct
            if (!member || !member.validatePassword(password)) {
                // Return false if member does not exist or password is incorrect
                return done(null, false, { message: 'Incorrect Registration Number or Password' });
            }

            // Return the authenticated member
            return done(null, member);
        } catch (error) {
            console.error('Error authenticating member:', error.message);
            // Pass any errors to the next middleware
            return done(error);
        }
    }
));

// Serialize user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserialize user
passport.deserializeUser((id, done) => {
    Member.findById(id, (err, user) => {
        done(err, user);
    });
});

// Login middleware
const requireLogin = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/signIn');
};

// Logout controller
loginRouter.get('/logout', (req, res) => {
    res.render('logout'); // Renders the logout page
});

loginRouter.post('/logout', (req, res) => {
    req.logout(); // Logs out the user
    res.redirect('/'); // Redirects to the home page
});

// Logout middleware
const requireLogout = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next();
    }
    req.logout();
    res.redirect('/');
};

// Function for sending a password reset link to the user's email
const sendPasswordResetLink = async (email) => {
    try {
        const resetToken = generateResetToken(); // Function to generate a unique reset token
        const resetLink = `https://website.com/reset-password?token=${resetToken}`;

        await sendEmail({
            to: email,
            subject: 'Password Reset',
            html: `Click the following link to reset your password: <a href="${resetLink}">${resetLink}</a>`
        });
      
        return { message: 'Password reset link sent successfully' };
    } catch (error) {
        throw new Error('Error sending password reset link:', error.message);
    }
};

// Function for generating a reset token
const generateResetToken = () => {
    // Function to generate a unique reset token
    return Date.now().toString();
};

// Function for invalidating all current reset tokens
const invalidateResetTokens = async (userId) => {
    // Function to invalidate all current reset tokens
    try {
        await User.updateMany(
            { _id: userId }, 
            { $pull: { resetTokens: { $exists: true } } }, 
            { multi: true }
        );
    } catch (error) {
        console.error('Error invalidating reset tokens:', error.message);
    }
};

// Function for changing the user's password
const changePassword = async (newPassword) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }

        // Update user's password
        user.password = newPassword;
        await user.save();

        // Invalidate existing reset tokens
        await invalidateResetTokens(userId);
      
        return { message: 'Password changed successfully' };
    } catch (error) {
        throw new Error('Error changing password:', error.message);
    }
};

// Forgot password controller
loginRouter.post('/forgotPassword', async (req, res, next) => {
    try {
        const { email } = req.body;
        const result = await sendPasswordResetLink(email);
        res.status(200).json(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Change password controller
loginRouter.post('/changePassword', async (req, res, next) => {
    try {
        const { newPassword } = req.body;
        const result = await changePassword(newPassword);
        res.status(200).json(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Route for posting comments or starting a conversation
loginRouter.post('/postComment', requireLogin, async (req, res) => {
    try {
        const { comment } = req.body;

        // Validate comment
        if (!comment) {
            return res.status(400).json({ msg: 'Please provide a comment' });
        }

        // Return success response
        res.status(200).json({ success: true, message: 'Comment posted successfully' });
    } catch (error) {
        console.error('Error posting comment:', error.message);
        res.status(500).json({ success: false, error: 'Failed to post comment' });
    }
});

// Profile controller
loginRouter.get('/profile', requireLogin, async (req, res, next) => {
    try {
        const userProfile = {
            name: req.user.name,
            email: req.user.email,
            membershipNumber: req.user.membershipNumber
            // Add other profile fields as needed
        };
        res.status(200).json(userProfile);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});


module.exports = loginRouter;
