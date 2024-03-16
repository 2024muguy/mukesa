function selectPaymentMethod(select) {
    var selectedOption = select.value;
    if (selectedOption === "M-PESA") {
        window.location.href = "/stkPush"; // Redirect to the M-PESA route
    } else if (selectedOption === "ACCOUNT") {
        window.location.href = "/kcbPayment"; // Redirect to the KCB payment route
    }
   
}