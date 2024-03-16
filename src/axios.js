const axios = require('axios');

// Define the base URL for the server
const baseURL = 'http://localhost:3000';

// Function to fetch all members
const fetchMembers = async () => {
    try {
        const response = await axios.get(`${baseURL}/members`);
        return response.data;
    } catch (error) {
        console.error('Error fetching members:', error.message);
        throw new Error('Failed to fetch members');
    }
};

// Create a new member
const newMemberData = {
    name: 'John ',
    email: 'john@example.com',
    yearOfStudy: '3rd year',
    registrationNumber: 'MMU12345',
    typeOfMembership: 'Full',
    paymentMethod: 'M-PESA',
    password: 'password123',
    
};
// Function to create a new member
const createMember = async (newMemberData) => {
    try {
        const response = await axios.post(`${baseURL}/members`, newMemberData);
        return response.data;
    } catch (error) {
        console.error('Error creating member:', error.message);
        throw new Error('Failed to create member');
    }
};

// Function to update a member
const updateMember = async (memberIdToUpdate, updatedMemberData) => {
    try {
        const response = await axios.put(`${baseURL}/members/${memberIdToUpdate}`, updatedMemberData);
        return response.data;
    } catch (error) {
        console.error('Error updating member:', error.message);
        throw new Error('Failed to update member');
    }
};

// Function to delete a member
const deleteMember = async (memberIdToDelete) => {
    try {
        const response = await axios.delete(`${baseURL}/members/${memberIdToDelete}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting member:', error.message);
        throw new Error('Failed to delete member');
    }
};

// Function to initiate STK push
const initiateSTKPush = async (stkPushData) => {
    try {
        const response = await axios.post(`${baseURL}/initiateSTKPush`, stkPushData);
        return response.data;
    } catch (error) {
        console.error('Error initiating STK push:', error.message);
        throw new Error('Failed to initiate STK push');
    }
};

// Function to confirm payment
const confirmPayment = async (checkoutRequestID) => {
    try {
        const response = await axios.post(`${baseURL}/confirmPayment/${checkoutRequestID}`);
        return response.data;
    } catch (error) {
        console.error('Error confirming payment:', error.message);
        throw new Error('Failed to confirm payment');
    }
};

// Function to create a payment
const createPayment = async (paymentData) => {
    try {
        const response = await axios.post(`${baseURL}/payment`, paymentData);
        return response.data;
    } catch (error) {
        console.error('Error creating payment:', error.message);
        throw new Error('Failed to create payment');
    }
};

// Function to fetch all payments
const getPayments = async () => {
    try {
        const response = await axios.get(`${baseURL}/payment`);
        return response.data;
    } catch (error) {
        console.error('Error fetching payments:', error.message);
        throw new Error('Failed to fetch payments');
    }
};

// Function to update a payment
const updatePayment = async (paymentIdToUpdate, updatedPaymentData) => {
    try {
        const response = await axios.put(`${baseURL}/payment/${paymentIdToUpdate}`, updatedPaymentData);
        return response.data;
    } catch (error) {
        console.error('Error updating payment:', error.message);
        throw new Error('Failed to update payment');
    }
};

// Function to delete a payment
const deletePayment = async (paymentIdToDelete) => {
    try {
        const response = await axios.delete(`${baseURL}/payment/${paymentIdToDelete}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting payment:', error.message);
        throw new Error('Failed to delete payment');
    }
};

// Function to generate membership number
const generateMembershipNumber = async () => {
    try {
        const response = await axios.post(`${baseURL}/generateMembershipNumber`);
        return response.data;
    } catch (error) {
        console.error('Error generating membership number:', error.message);
        throw new Error('Failed to generate membership number');
    }
};

// Function to update member details
const updateMemberDetails = async (memberIdToUpdate, updatedMemberData) => {
    try {
        const response = await axios.put(`${baseURL}/updateMemberDetails/${memberIdToUpdate}`, updatedMemberData);
        return response.data;
    } catch (error) {
        console.error('Error updating member details:', error.message);
        throw new Error('Failed to update member details');
    }
};

// Function to send password reset link
const sendPasswordResetLink = async (email) => {
    try {
        const response = await axios.post(`${baseURL}/sendPasswordResetLink`, { email });
        return response.data;
    } catch (error) {
        console.error('Error sending password reset link:', error.message);
        throw new Error('Failed to send password reset link');
    }
};

// Function to change password
const changePassword = async (newPassword) => {
    try {
        const response = await axios.post(`${baseURL}/changePassword`, { newPassword });
        return response.data;
    } catch (error) {
        console.error('Error changing password:', error.message);
        throw new Error('Failed to change password');
    }
};

module.exports = {
    fetchMembers,
    createMember,
    updateMember,
    deleteMember,
    initiateSTKPush,
    confirmPayment,
    createPayment,
    getPayments,
    updatePayment,
    deletePayment,
    generateMembershipNumber,
    updateMemberDetails,
    sendPasswordResetLink,
    changePassword
};