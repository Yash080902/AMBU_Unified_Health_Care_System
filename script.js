$('#verify-otp').hide();
$('#request-otp').on('click',function(){
  $('#sign-in').hide();
  $('#verify-otp').show();
});
$('.fa-chevron-left').on('click',function(){
  $('#sign-in').show();
  $('#verify-otp').hide();
});
function generateOTP() {
          
  // Declare a digits variable 
  // which stores all digits
  var digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 4; i++ ) {
      OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

document.write("OTP of 4 digits: ")
document.write( generateOTP() );