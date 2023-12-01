// Get all input elements inside elements with class "custom_radio"
var radioInputs = document.querySelectorAll('.custom_radio input[type="radio"]');
for (var i = 0; i < radioInputs.length; i++) {
  var inputId = radioInputs[i].id;
  console.log(inputId);
}
