// client.js

// Function to fetch all members from the server
async function fetchMembers() {
    try {
        const response = await axios.get('/api/members');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || error.message);
    }
}

// Function to create a new member on the server
async function createMember(newMemberData) {
    try {
        const response = await axios.post('/api/members', newMemberData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || error.message);
    }
}

// Function to update a member on the server
async function updateMember(memberId, updatedMemberData) {
    try {
        const response = await axios.put(`/api/members/${memberId}`, updatedMemberData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || error.message);
    }
}

// Function to delete a member from the server
async function deleteMember(memberId) {
    try {
        const response = await axios.delete(`/api/members/${memberId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || error.message);
    }
}

// Function to initiate STK push
async function initiateSTKPush() {
    try {
        const response = await axios.post('/api/initiateSTKPush');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || error.message);
    }
}

// Function to confirm payment
async function confirmPayment(checkoutRequestID) {
    try {
        const response = await axios.post(`/api/confirmPayment/${checkoutRequestID}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || error.message);
    }
}

// Function to create a payment
async function createPayment(paymentData) {
    try {
        const response = await axios.post('/api/payment', paymentData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || error.message);
    }
}

// Function to fetch all payments
async function fetchPayments() {
    try {
        const response = await axios.get('/api/payment');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || error.message);
    }
}

// Function to update a payment
async function updatePayment(paymentId, updatedPaymentData) {
    try {
        const response = await axios.put(`/api/payment/${paymentId}`, updatedPaymentData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || error.message);
    }
}

// Function to delete a payment
async function deletePayment(paymentId) {
    try {
        const response = await axios.delete(`/api/payment/${paymentId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || error.message);
    }
}

// Function to generate membership number
async function generateMembershipNumber() {
    try {
        const response = await axios.post('/api/generateMembershipNumber');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || error.message);
    }
}

// Function to update member details
async function updateMemberDetails(memberId, updatedMemberDetails) {
    try {
        const response = await axios.put(`/api/updateMemberDetails/${memberId}`, updatedMemberDetails);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || error.message);
    }
}

// Function to send password reset link
async function sendPasswordResetLink(email) {
    try {
        const response = await axios.post('/api/sendPasswordResetLink', { email });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || error.message);
    }
}

// Function to change password
async function changePassword(newPassword) {
    try {
        const response = await axios.post('/api/changePassword', { newPassword });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || error.message);
    }
}

module.exports = {
    fetchMembers,
    createMember,
    updateMember,
    deleteMember,
    initiateSTKPush,
    confirmPayment,
    createPayment,
    fetchPayments,
    updatePayment,
    deletePayment,
    generateMembershipNumber,
    updateMemberDetails,
    sendPasswordResetLink,
    changePassword
};
