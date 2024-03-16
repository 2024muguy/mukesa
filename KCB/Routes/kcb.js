// Import package controller function
const { initiateKCBSTKPush } = require("../Controllers/kcb");

// KCB Router
const router = require("express").Router();

// KCB STK Push route
router.post("/stkpush", initiateKCBSTKPush);

module.exports = {
    router
};