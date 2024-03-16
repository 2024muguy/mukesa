

const express = require('express');
const requireLogin = require("./login.js");
const Comment = require("../models/comment.js");
const router = express.Router();

// Check if the user is logged in
router.get('/checkLoggedIn', (req, res) => {
    if (req.isAuthenticated()) {
        res.json(true); // User is logged in
    } else {
        res.json(false); // User is not logged in
    }
});

// Middleware to log incoming requests
router.use((req, res, next) => {
    console.log("Incoming request:", req.method, req.url);
    console.log("Request body:", req.body);
    next();
});


// Handle POST request to post a comment
router.post('/postComment', requireLogin, async (req, res) => {
    try {
        const { content, postId } = req.body;
        const userId = req.user._id; // Assuming user ID is available in request user object

        // Validate comment content and post ID
        if (!content || !postId) {
            return res.status(400).json({ msg: 'Please provide content and postId' });
        }

        // Create a new comment document
        const newComment = new Comment({
            content,
            userId,
            postId,
            profile: req.user.profile // Assuming profile ID is available in request user object
        });

        // Save the new comment to the database
        const savedComment = await newComment.save();

        // Send a success response with the saved comment
        res.status(200).json({ success: true, message: 'Comment posted successfully', comment: savedComment });
    } catch (error) {
        console.error('Error posting comment:', error.message);
        res.status(500).json({ success: false, error: 'Failed to post comment' });
    }
});

// Handle GET request to retrieve comments
router.post('/comments', async (req, res) => {
    try {
        // Retrieve comments from the database and populate user and profile info
        const comments = await Comment.find().populate('userId').populate('profile');

        // Send the populated comments to the client-side
        res.json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error.message);
        res.status(500).json({ error: 'Failed to fetch comments' });
    }
});

module.exports = router;































// const express = require('express');
// const requireLogin = require("./login.js");
// const Comment = require("../models/comment.js");
// const router = express.Router();

// // Check if the user is logged in
// router.get('/checkLoggedIn', (req, res) => {
//     if (req.isAuthenticated()) {
//         res.json(true); // User is logged in
//     } else {
//         res.json(false); // User is not logged in
//     }
// });

// // Handle POST request to post a comment
// router.post('/postComment', requireLogin, async (req, res) => {
//     try {
//         const { content, postId } = req.body;
//         const userId = req.user._id; // Assuming user ID is available in request user object

//         // Validate comment content and post ID
//         if (!content || !postId) {
//             return res.status(400).json({ msg: 'Please provide content and postId' });
//         }

//         // Create a new comment document
//         const newComment = new Comment({
//             content,
//             userId,
//             postId,
//             profile: req.user.profile // Assuming profile ID is available in request user object
//         });

//         // Save the new comment to the database
//         const savedComment = await newComment.save();

//         // Send a success response with the saved comment
//         res.status(200).json({ success: true, message: 'Comment posted successfully', comment: savedComment });
//     } catch (error) {
//         console.error('Error posting comment:', error.message);
//         res.status(500).json({ success: false, error: 'Failed to post comment' });
//     }
// });

// // Handle GET request to retrieve comments
// router.post('/comments', async (req, res) => {
//     try {
//         // Retrieve comments from the database and populate user and profile info
//         const comments = await Comment.find().populate('userId').populate('profile');

//         // Send the populated comments to the client-side
//         res.json(comments);
//     } catch (error) {
//         console.error('Error fetching comments:', error.message);
//         res.status(500).json({ error: 'Failed to fetch comments' });
//     }
// });

// module.exports = router;

