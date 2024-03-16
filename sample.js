// Import Axios library
const axios = require('axios');

// Function to fetch all members from the server
const fetchMembers = async () => {
    try {
        const response = await axios.get('http://localhost:3000/member');
        return response.data; // Return the data retrieved from the server
    } catch (error) {
        console.error('Error fetching members:', error.message);
        throw new Error('Failed to fetch members'); // Throw an error if fetching fails
    }
};

// Function to create a new member on the server
const createMember = async (memberData) => {
    try {
        const response = await axios.post('http://localhost:3000/member', memberData);
        return response.data; // Return the data returned by the server
    } catch (error) {
        console.error('Error creating member:', error.message);
        throw new Error('Failed to create member'); // Throw an error if creation fails
    }
};

// Function to update a member on the server
const updateMember = async (id, memberData) => {
    try {
        const response = await axios.put(`http://localhost:3000/member/${id}`, memberData);
        return response.data; // Return the data returned by the server
    } catch (error) {
        console.error('Error updating member:', error.message);
        throw new Error('Failed to update member'); // Throw an error if update fails
    }
};

// Function to delete a member from the server
const deleteMember = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/member/${id}`);
        return response.data; // Return the data returned by the server
    } catch (error) {
        console.error('Error deleting member:', error.message);
        throw new Error('Failed to delete member'); // Throw an error if deletion fails
    }
};

// Function to initiate STK push
const initiateSTKPush = async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/lipaNaMpesa/initiateSTKPush', data);
        return response.data;
    } catch (error) {
        console.error('Error initiating STK push:', error.message);
        throw new Error('Failed to initiate STK push');
    }
};

// Function to confirm payment
const confirmPayment = async (checkoutRequestID) => {
    try {
        const response = await axios.post(`http://localhost:3000/lipaNaMpesa/confirmPayment/${checkoutRequestID}`);
        return response.data;
    } catch (error) {
        console.error('Error confirming payment:', error.message);
        throw new Error('Failed to confirm payment');
    }
};

// Function to create a payment
const createPayment = async (paymentData) => {
    try {
        const response = await axios.post('http://localhost:3000/payment', paymentData);
        return response.data;
    } catch (error) {
        console.error('Error creating payment:', error.message);
        throw new Error('Failed to create payment');
    }
};

// Function to get all payments
const getPayments = async () => {
    try {
        const response = await axios.get('http://localhost:3000/payment');
        return response.data;
    } catch (error) {
        console.error('Error fetching payments:', error.message);
        throw new Error('Failed to fetch payments');
    }
};

// Function to update a payment
const updatePayment = async (id, paymentData) => {
    try {
        const response = await axios.put(`http://localhost:3000/payment/${id}`, paymentData);
        return response.data;
    } catch (error) {
        console.error('Error updating payment:', error.message);
        throw new Error('Failed to update payment');
    }
};

// Function to delete a payment
const deletePayment = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/payment/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting payment:', error.message);
        throw new Error('Failed to delete payment');
    }
};

// Function to generate membership number
const generateMembershipNumber = async () => {
    try {
        const response = await axios.post('http://localhost:3000/generateMembershipNumber');
        return response.data;
    } catch (error) {
        console.error('Error generating membership number:', error.message);
        throw new Error('Failed to generate membership number');
    }
};

// Function to update member details
const updateMemberDetails = async (id, memberData) => {
    try {
        const response = await axios.put(`http://localhost:3000/updateMemberDetails/${id}`, memberData);
        return response.data;
    } catch (error) {
        console.error('Error updating member details:', error.message);
        throw new Error('Failed to update member details');
    }
};


// Function to send password reset link
const sendPasswordResetLink = async (email) => {
    try {
        const response = await axios.post('http://localhost:3000/sendPasswordResetLink', { email });
        return response.data;
    } catch (error) {
        console.error('Error sending password reset link:', error.message);
        throw new Error('Failed to send password reset link');
    }
};

// Function to change password
const changePassword = async (newPassword) => {
    try {
        const response = await axios.post('http://localhost:3000/changePassword', { newPassword });
        return response.data;
    } catch (error) {
        console.error('Error changing password:', error.message);
        throw new Error('Failed to change password');
    }
};

// Export all functions for use in other files
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
    deleteMember,
    sendPasswordResetLink,
    changePassword
};






// Import the above functions
const { fetchMembers, createMember, updateMember, deleteMember, initiateSTKPush,
    confirmPayment, createPayment, getPayments, updatePayment, deletePayment,
    generateMembershipNumber, updateMemberDetails, sendPasswordResetLink, changePassword } = require('./apiFunctions');

// Fetch all members
fetchMembers()
    .then((members) => {
        console.log('Members:', members);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

// Create a new member
const newMemberData = {
    name: 'John Doe',
    email: 'john@example.com',
    yearOfStudy: '3rd year',
    registrationNumber: 'MMU12345',
    typeOfMembership: 'Full',
    paymentMethod: 'M-PESA',
    password: 'password123',
    // Add other properties as needed
};

createMember(newMemberData)
    .then((response) => {
        console.log('New member created:', response);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });


updateMember(memberIdToUpdate, updatedMemberData)
    .then((response) => {
        console.log('Member updated:', response);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });


// Initiate STK push
const stkPushData = { /* Add STK push data here */ };
initiateSTKPush(stkPushData)
    .then((response) => {
        console.log('STK push initiated:', response);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

// Confirm payment
const checkoutRequestID = '123'; // Replace '123' with the actual checkoutRequestID
confirmPayment(checkoutRequestID)
    .then((response) => {
        console.log('Payment confirmed:', response);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

// Create a payment
const paymentData = { /* Add payment data here */ };
createPayment(paymentData)
    .then((response) => {
        console.log('Payment created:', response);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

// Fetch all payments
getPayments()
    .then((payments) => {
        console.log('Payments:', payments);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

// Update a payment
const paymentIdToUpdate = '456'; // Replace '456' with the actual payment ID
const updatedPaymentData = { /* Add updated payment data here */ };
updatePayment(paymentIdToUpdate, updatedPaymentData)
    .then((response) => {
        console.log('Payment updated:', response);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

// Delete a payment
const paymentIdToDelete = '789'; // Replace '789' with the actual payment ID
deletePayment(paymentIdToDelete)
    .then((response) => {
        console.log('Payment deleted:', response);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

// Generate membership number
generateMembershipNumber()
    .then((membershipNumber) => {
        console.log('Membership number generated:', membershipNumber);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

// Update member details
const memberIdToUpdate = '123'; // Replace '123' with the actual member ID
const updatedMemberData = { /* Add updated member data here */ };
updateMemberDetails(memberIdToUpdate, updatedMemberData)
    .then((response) => {
        console.log('Member details updated:', response);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

// Delete a member
const memberIdToDelete = '456'; // Replace '456' with the actual member ID
deleteMember(memberIdToDelete)
    .then((response) => {
        console.log('Member deleted:', response);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

// Send password reset link
const userEmail = 'example@example.com'; // Replace with the user's email address
sendPasswordResetLink(userEmail)
    .then((result) => {
        console.log('Password reset link sent:', result);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

// Change password
const newPassword = 'newPassword123'; // Replace with the new password
changePassword(newPassword)
    .then((result) => {
        console.log('Password changed successfully:', result);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });