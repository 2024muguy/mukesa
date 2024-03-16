   
   
   
       // Function to display M-PESA payment option
       function displayMpesa() {
        // Get payment option container
        let paymentContainer = document.querySelector('.payment-form');
        
        // Hide account details section if available
        paymentContainer.children[1].style.display = 'none';
        // Display M-PESA details section
        paymentContainer.children[0].style.display = 'block';
      }
  
      // Get submit button
      let submitBtn = document.querySelector('button[type="submit"]');
  
      // Add event listener for submit button
      submitBtn.addEventListener('click', function(e) {
        // Prevent form from submitting
        e.preventDefault();
  
        // Get selected payment option
        let mpesaRadioBtn = document.getElementById('mpesa');
        let accountRadioBtn = document.getElementById('account');
  
        // Get payment option value
        let paymentOption;
  
        // Initialize 'registrationNumber' empty variable
        let registrationNumber;
        
        // Check for selected payment option
        if (mpesaRadioBtn.checked) paymentOption = mpesaRadioBtn.value;
        else if (accountRadioBtn) paymentOption = accountRadioBtn.value;
  
        // Get 'registrationNumber' value
        registrationNumber = document.getElementById('registrationNumber').value;
  
        // Send an HTTP request to '/api/users' route to create a new user with send data
        fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ paymentOption, registrationNumber })
        })
          .then(response => response.json())
          .then(data => {
              // Get registration number info message
              let infoMsg = document.querySelector('.info-message');
  
              // Get respective elements to display 'payment' details
              let registrationNumberInfo = document.querySelector('.registration-number');
              let accountDetailsInfoMpesa = document.querySelector('.account-details #mpesa-details');
              let accountDetailsInfoAccount = document.querySelector('#account-details');
  
              // Check for presence of info message
              if (infoMsg) {
                // Display 'registration number' info message
                registrationNumberInfo.textContent = data.registrationNumber;
  
                // Display 'MPESA account details' info message
                accountDetailsInfoMpesa.textContent = data.paymentMethod;
                accountDetailsInfoMpesa.nextElementSibling.textContent = data.registrationNumber;
  
                // Display 'bank account details' info
                accountDetailsInfoAccount.children[1].textContent = data.accountName;
                accountDetailsInfoAccount.children[2].textContent = data.accountNumber;
  
                // Hide payment form
                infoMsg.style.display = 'block';
  
                // Remove info message after 10 seconds
                setTimeout(() => {
                  infoMsg.style.display = 'none';
                }, 10000);
              } else alert('Something went wrong');
          })
          .catch(error => console.log(error));
      });
  
   
   
   
   // Assign event listeners to radio buttons
    let paymentOptions = document.querySelectorAll('input[type="radio"]');
    for (let radioBtn of paymentOptions) {
      // Add event listeners to radio buttons
      radioBtn.addEventListener('click', function() {
        // Get label for clicked radio button if clicked
        for (const label of document.querySelectorAll('label')) {
          // Only check radios within the form itself instead of all on the page
          if (label.getAttribute('for') === radioBtn.getAttribute('id')) {
            // Get ID of label for respective radio button
            let labelId = label.getAttribute('for');

            // Check for the ID of the label's 'for' attribute
            if (/^mpesa/i.test(labelId)) {
              displayMpesa();
            } else {
              // Get payment form element
	            const paymentFields = document.querySelector('section.payment-form');
	            // Hide form
	            paymentFields.style.display = 'none';
            }
          }
        }
      });
    }