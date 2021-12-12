// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "`", "~", "|"]
var passwordMin = 8;
var passwordMax = 128;

// Write password to the #password input
function writePassword() {
  var confirmUpper = confirm("Would you like your password contain uppercase letters?")
  var confirmLower = confirm("Would you like your password to contain lowercase letters?")
  var confirmNumber = confirm("Would you like your password to contain numbers?")
  var confirmSpecial = confirm("Would you like your password to contain special characters? (e.g. !?=%$)")
  var confirmAmount = prompt("How many characters would you like your password to have?  Please select no less than 8 and no more than 128.")

  if (confirmAmount = [uppercase, lowercase, specialCharacters]){
    alert("Please do not type non-numerical characters in this field! Please try again.")
    return false;
  }

  if (confirmUpper === true){
    password = Math.floor(Math.random () * 1)
  }
  if (confirmLower === true){

  }
  if (confirmNumber === true){

  }
  if (confirmSpecial === true){

  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);