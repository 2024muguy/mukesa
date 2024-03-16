const mongoose = require('mongoose');
const Login = mongoose.Schema({ // Our schema for registration/signing in a user
    firstname: {
      type: String, // Here we explicitly specify a field type in the schema
      required: [true, 'A user\'s first name is required'] // A message shown if the value in the field isn't explicitly stated by the user when trying to register
      },
    lastname: {
      type: String,
      required: [true, 'A user\'s last name is required']
    },
    username: {
      type: String,
      required: [true, 'A user\'s username is required'],
      unique: [true, 'This username exists.']
    },
    password: {
      type: String,
      min: [8, 'Password should be at least 8 characters long.'], // A validator method to ensure that the password has a minimum of 8 characters
      max: [20, 'Password too long'], // A method to ensure that the specified field value doesn't exceed 20 characters
      required: [true, 'Please specify a password'] // A message shown if the value in the field isn't explicitly stated by the user when signing up
    },
    email: {
      type: String,
      required: [true, 'Please specify your email'],
      unique: [true, 'This email exists'] // A validator method to ensure that the email is unique
    },
    registrationNumber: {
      type: String,
      unique:true, // A unique registration number per user
      required: [true, 'Please provide a registration number']
    },
    specialty: {
      type: String,
      required: [true, 'Please specify your specialty']
    },
  
    loginAttempts : {type: Number, required: true, default: 0},
    passwordLockUntil : {type: Number, default: 0}
    },
  
    {
      timestamps: true // A built in function to enable tracking of time.
    });
  
  module.exports = mongoose.model('Login', Login); // Exporting our model as a login.