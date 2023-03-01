// Assignment Code
var generateBtn = document.querySelector("#generate");

  /* starting my code below */
  /* I make the variables first */
var charLength = 8;
var choiceArray= ["", "", "", "", "", "", "", "", ""];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var uppercaseArray = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numbArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=",];

var generateButton= document.querySelector("#generate");

/* write my function down below */

function generatePassword() {
  var password = "";
  for(var i = 0; i < charLength; i++) {
    var randLetter = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randLetter];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
var correctPrompts = getPrompts();

if (correctPrompts) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* i write a function down below */
function getPrompts() {
  charLength = parseInt(
    prompt( "How long do you want your password to be? (Between 8 to 128 charcters)")
  );

  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Password length must be between 8 to 128 characters. Please try again.");
    return false;
  }

  if (confirm("Do you want numbers in your password?")
  ) {
    choiceArray = choiceArray.concat(numbArray);
  }

  if (confirm("Do you want special characters in your password?")
  ) { 
    choiceArray = choiceArray.concat(specialCharArray);
  }

  if (confirm("Do you want uppercse letters in your password?")
  ) {
    choiceArray = choiceArray.concat(uppercaseArray);
  }

  if (confirm("Do you want lowercase letters in your password?")
  ){
    choiceArray = choiceArray.concat(lowercaseArray);
  }

  return true; 

}
