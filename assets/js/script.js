// Assignment code here

var characterArray = ["abcdefghijklnmopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ]

var passwordLength = Number(window.prompt("Please enter a numeric value for the passwordLength of your new password. Must be between 8-128 characters."));
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  Number(window.prompt(("Please enter a numeric value for the passwordLength of your new password. Must be between 8-128 characters."));

 
var lowerPrompt = confirm("Would you like lowercase letters?");
var upperPrompt = confirm("Would you like uppercase characters?");
var numberPrompt = confirm("Would you like numeric characters?");
var specialPrompt = confirm("Would you like special characters?");

while (!upper && !lower && !numeric && !specialCharacter) {
  alert("You must select at least one character type.");
  lowerPrompt = confirm("Would you like lowercase letters?");
  upperPrompt = confirm("Would you like uppercase characters?");
  numberPrompt = confirm("Would you like numeric characters?");
  specialPrompt = confirm("Would you like special characters?");
}

function generateNewPassword() {
  var password "";

  var insert = {};
  if (lowerPrompt) password += 
}

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
