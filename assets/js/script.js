// Assignment code here

var characterArray = ["abcdefghijklnmopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ]
var input = "";
var password = "";

function generateNewPassword() {
    var passwordLength = Number(window.prompt("Please enter a numeric value for the passwordLength of your new password. Must be between 8-128 characters."));
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      Number(window.prompt(("Please enter a numeric value for the passwordLength of your new password. Must be between 8-128 characters."));
  }
  var lowerPrompt = false;
  var upperPrompt = false;
  var numberPrompt = false;
  var specialPrompt = false;

  while (true) {
    lowerPrompt = confirm("Do you want lowercase letters in your password?");
    upperPrompt = confirm("Do you want uppercase letters in your password?");
    numberPrompt = confirm("Do you want numbers in your password?");
    specialPrompt = confirm("Do you want special characters in your password?");
    
    break;
  }

  console.log("yesLower", lowerPrompt);
  console.log("yesUpper", upperPrompt);
  console.log("yesNumber", numberPrompt);
  console.log("yesSpecial", specialPrompt);

  lowerPrompt && (input += characterArray[0])
  upperPrompt && (input += characterArray[1])
  numberPrompt && (input += characterArray[2])
  specialPrompt && (input += characterArray[3])

  var password = "";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
