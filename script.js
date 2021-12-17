// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "`", "~", "|"];
var passwordMin = 8;
var passwordMax = 128;

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var userObject = confirmFunction();
  console.log(userObject);
  var possiblePassword = [];
  var newPassword = [];
  if (userObject.upperConfirm === true) {
    possiblePassword = possiblePassword.concat(uppercase)
    console.log("inside upper")
  }
  if (userObject.lowerConfirm === true) {
    possiblePassword = possiblePassword.concat(lowercase)
  }
  if (userObject.numberConfirm === true) {
    possiblePassword = possiblePassword.concat(numerals)
  }
  if (userObject.specialConfirm === true) {
    possiblePassword = possiblePassword.concat(specialCharacters)
  }
  console.log(possiblePassword);
  for (var i = 0; i < userObject.amount; i++) {
    var randomNumber = Math.floor(Math.random() * (possiblePassword.length));
    newPassword.push(possiblePassword[randomNumber]);
    console.log(randomNumber);
  }
  var noCommas = newPassword.join("");
  console.log(newPassword);
  return noCommas;
}

function confirmFunction() {
  var confirmUpper = confirm("Would you like your password contain uppercase letters?")
  var confirmLower = confirm("Would you like your password to contain lowercase letters?")
  var confirmNumber = confirm("Would you like your password to contain numbers?")
  var confirmSpecial = confirm("Would you like your password to contain special characters? (e.g. !?=%$)")
  var confirmAmount = parseInt(prompt("How many characters would you like your password to have?  Please select no less than 8 and no more than 128."))


  console.log(confirmAmount);
  console.log(confirmAmount);

  if (isNaN(confirmAmount)) {
    alert("Please put in a number");
    return false;
  }

  if (confirmAmount < 8) {
    alert("Please put in a larger number.");
    return false;
  } else if (confirmAmount > 128) {
    alert("Please put in a smaller number.");
    return false;
  }
  var confirmObject = {
    amount: confirmAmount,
    upperConfirm: confirmUpper,
    lowerConfirm: confirmLower,
    numberConfirm: confirmNumber,
    specialConfirm: confirmSpecial
  }
  console.log(confirmObject);
  return confirmObject;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);