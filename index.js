document.getElementById("loginButton").addEventListener('click', function(e){
    e.preventDefault()

   const phoneNumber = 12345678910;
   const pinNumber = 1234;

   const phoneNumberValue = document.getElementById('mobile-number');
   const mobileNumberConverted = parseInt(phoneNumber);

   const pinNumberValue = document.getElementById('pin-number');
   const pinNumberConverted = parseInt(pinNumber);
    

    if(pinNumberConverted === pinNumber && mobileNumberConverted ===  phoneNumber){
        
        window.location.href ="./home.html"
        
    }
    else{
        alert('Invalid');
        
    }
})