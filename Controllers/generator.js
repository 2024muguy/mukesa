const axios = require('axios');

// Function for generating a new membership number and passing it to the server
const generateMembershipNumber = async (regNumber, year) => {
    try {
        let membershipNumber = "";
        if (regNumber.includes("ENG")) {
            membershipNumber += regNumber.substring(0, 3);
            membershipNumber += year + "-" + regNumber.substring(4);
        } else {
            membershipNumber += regNumber.substring(0, 2);
            membershipNumber += year + "-" + regNumber.substring(3);
        }

        // Make a POST request to create a new member with the generated membership number
        const response = await axios.post('http://localhost:3000/createMember', {
            name: '', // Add name here
            email: '', // Add email here
            yearOfStudy: '', // Add year of study here
            registrationNumber: regNumber,
            typeOfMembership: '', // Add type of membership here
            paymentMethod: '', // Add payment method here
            password: '', // Add password here
            membershipNumber: {
                number: membershipNumber,
                generatedYear: year
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error generating membership number and creating member:', error.message);
        throw error;
    }
};

const updateMemberDetails = async (id, memberData) => {
    try {
        // Make a PUT request to update member details
        const response = await axios.put(`http://localhost:3000/updateMemberDetails/${id}`, memberData);
        return response.data;
    } catch (error) {
        console.error('Error updating member details:', error.message);
        throw error;
    }
};

const deleteMember = async (id) => {
    try {
        // Make a DELETE request to delete member
        const response = await axios.delete(`http://localhost:3000/deleteMember/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting member:', error.message);
        throw error;
    }
};

module.exports = {
    generateMembershipNumber,
    updateMemberDetails,
    deleteMember
};
