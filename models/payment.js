
//Payment Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  paymentNumber: { type: Number, required: true, index: true },
  registrationNumber: { type: Number, required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, required: true, default: Date.now },
  receiptNumber: { type: String, required: true, default: "REC" + Math.floor(Math.random() * 100000) + 1, unique: true },
  transactionCode: { type: String, required: true },
  paymentMethod: { type: String, enum: ['M-PESA', 'ACCOUNTS'], required: true },
  mpesaConfirmationCode: { type: String, required: function() { return this.paymentMethod === 'M-PESA'; } }, // Only required for M-PESA payment method
  bankAccountNumber: { type: String, required: function() { return this.paymentMethod === 'ACCOUNTS'; } } // Only required for ACCOUNTS payment method
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;


