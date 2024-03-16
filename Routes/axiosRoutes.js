const express = require('express');
const axios = require('axios');
const router = express.Router();
// const Posts= require("../Controllers/comment")

// Define the base URL for the server
const baseURL = 'http://localhost:3000';

// Function to fetch all members from the server using Axios
router.get('/members', async (req, res) => {
    try {
        const response = await axios.get(`${baseURL}/member`);
        res.json(response.data); // Send the data retrieved from the server as JSON response
    } catch (error) {
        console.error('Error fetching members:', error.message);
        res.status(500).json({ error: 'Failed to fetch members' }); // Send an error response if fetching fails
    }
});

// Function to create a new member on the server
router.post('/members', async (req, res) => {
    try {
        const response = await axios.post(`${baseURL}/member`, req.body);
        res.json(response.data); // Send the data returned by the server as JSON response
    } catch (error) {
        console.error('Error creating member:', error.message);
        res.status(500).json({ error: 'Failed to create member' }); // Send an error response if creation fails
    }
});

// Function to update a member on the server
router.put('/members/:id', async (req, res) => {
    const memberId = req.params.id;
    try {
        const response = await axios.put(`${baseURL}/member/${memberId}`, req.body);
        res.json(response.data); // Send the data returned by the server as JSON response
    } catch (error) {
        console.error('Error updating member:', error.message);
        res.status(500).json({ error: 'Failed to update member' }); // Send an error response if update fails
    }
});

// Function to delete a member from the server
router.delete('/members/:id', async (req, res) => {
    const memberId = req.params.id;
    try {
        const response = await axios.delete(`${baseURL}/member/${memberId}`);
        res.json(response.data); // Send the data returned by the server as JSON response
    } catch (error) {
        console.error('Error deleting member:', error.message);
        res.status(500).json({ error: 'Failed to delete member' }); // Send an error response if deletion fails
    }
});

// Function to initiate STK push
router.post('/initiateSTKPush', async (req, res) => {
    try {
        const response = await axios.post(`${baseURL}/lipaNaMpesa/initiateSTKPush`, req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error initiating STK push:', error.message);
        res.status(500).json({ error: 'Failed to initiate STK push' });
    }
});

// Function to confirm payment
router.post('/confirmPayment/:checkoutRequestID', async (req, res) => {
    const checkoutRequestID = req.params.checkoutRequestID;
    try {
        const response = await axios.post(`${baseURL}/lipaNaMpesa/confirmPayment/${checkoutRequestID}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error confirming payment:', error.message);
        res.status(500).json({ error: 'Failed to confirm payment' });
    }
});

// Function to create a payment
router.post('/payment', async (req, res) => {
    try {
        const response = await axios.post(`${baseURL}/payment`, req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error creating payment:', error.message);
        res.status(500).json({ error: 'Failed to create payment' });
    }
});

// Function to get all payments
router.get('/payment', async (req, res) => {
    try {
        const response = await axios.get(`${baseURL}/payment`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching payments:', error.message);
        res.status(500).json({ error: 'Failed to fetch payments' });
    }
});

// Function to update a payment
router.put('/payment/:id', async (req, res) => {
    const paymentId = req.params.id;
    try {
        const response = await axios.put(`${baseURL}/payment/${paymentId}`, req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error updating payment:', error.message);
        res.status(500).json({ error: 'Failed to update payment' });
    }
});

// Function to delete a payment
router.delete('/payment/:id', async (req, res) => {
    const paymentId = req.params.id;
    try {
        const response = await axios.delete(`${baseURL}/payment/${paymentId}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error deleting payment:', error.message);
        res.status(500).json({ error: 'Failed to delete payment' });
    }
});

// Function to generate membership number
router.post('/generateMembershipNumber', async (req, res) => {
    try {
        const response = await axios.post(`${baseURL}/generateMembershipNumber`);
        res.json(response.data);
    } catch (error) {
        console.error('Error generating membership number:', error.message);
        res.status(500).json({ error: 'Failed to generate membership number' });
    }
});

// Function to update member details
router.put('/updateMemberDetails/:id', async (req, res) => {
    const memberId = req.params.id;
    try {
        const response = await axios.put(`${baseURL}/updateMemberDetails/${memberId}`, req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error updating member details:', error.message);
        res.status(500).json({ error: 'Failed to update member details' });
    }
});

// Function to send password reset link
router.post('/sendPasswordResetLink', async (req, res) => {
    const { email } = req.body;
    try {
        const response = await axios.post(`${baseURL}/sendPasswordResetLink`, { email });
        res.json(response.data);
    } catch (error) {
        console.error('Error sending password reset link:', error.message);
        res.status(500).json({ error: 'Failed to send password reset link' });
    }
});

// Function to change password
router.post('/changePassword', async (req, res) => {
    const { newPassword } = req.body;
    try {
        const response = await axios.post(`${baseURL}/changePassword`, { newPassword });
        res.json(response.data);
    } catch (error) {
        console.error('Error changing password:', error.message);
        res.status(500).json({ error: 'Failed to change password' });
    }
});

module.exports={
    router};