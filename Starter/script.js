// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define the function to check the length 
function lengthCheck(){
  var length = prompt("Enter a length for your password (must be between 8 and 128 characters)");
  if (length < 8 || length >128){
    alert("Please enter a number between 8 and 128")
    lengthCheck()
  }
  
  else if (isNaN(length)){
    alert("Please enter a number between 8 and 128") 
    lengthCheck()
  }

  else if (prompt = false){
    alert("Please enter a number between 8 and 128")
    lengthCheck()
  }
  
  else {
   var parseLength = parseInt(length)
    return parseLength
  }
}

//Define the function for special characters
function characters(){
//call length check
//lengthCheck()

//Special Characters
var confirmSpecial = confirm("Would You Like Special Characters?");

//Numeric Characters
var confirmNumeric = confirm("Would You Like Numeric Characters?");

//Lowercase Characters
var confirmLower = confirm("Would You Like Lowercase Characters?");

//Uppercase Characters
var confirmUpper = confirm("Would You Like Uppercase Characters?");


//Validate at least one is selected
var sum = confirmSpecial+confirmNumeric+confirmLower+confirmUpper;

if (sum===0) {
  alert("Your password must have at least one of the listed Character Styles")
  characters()
}

else {
  var characterFinal = [confirmSpecial, confirmNumeric, confirmLower, confirmUpper];
  return characterFinal
}
}

function userOutput(){
  var passwordLength = lengthCheck();
  console.log(passwordLength);
  
  var characterOutput = characters();
  
  // Retrieve values from the Character Output Array
  var includeSpecial = characterOutput[0];
  var includeNumeric = characterOutput[1];
  var includeLower = characterOutput [2];
  var includeUpper = characterOutput [3];
  console.log(includeSpecial, includeNumeric, includeLower, includeUpper);

  generatePassword(includeSpecial, includeNumeric, includeLower, includeUpper, passwordLength)

}

//Character Array
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Create Password Function
function generatePassword(includeSpecial, includeNumeric, includeLower, includeUpper, passwordLength) {
  var pwd = [];

  const typesCount = includeSpecial + includeNumeric + includeLower + includeUpper;
  console.log(typesCount);

  const typesArr = [{includeSpecial}, {includeNumeric}, {includeLower}, {includeUpper}].filter
  (
    item => Object.values(item)[0]
  );
  console.log(typesArr);

  // If Statements

  if (includeSpecial){
    pwd = pwd.concat(specialCharacters)
  }

  if (includeNumeric){
    pwd = pwd.concat(numericCharacters)
  }

  if (includeLower){
    pwd = pwd.concat(lowerCasedCharacters)
  }

  if (includeUpper){
    pwd = pwd.concat(upperCasedCharacters)
  }

  console.log(pwd);

  var finalPassword = [];
  for (i=0; i < passwordLength; i++){
    randomCharacter = Math.floor(Math.random() * pwd.length)
    finalPassword.push(pwd[randomCharacter]);
  }
  console.log(finalPassword);
  
  var finalPassword = finalPassword.join("");
  //Invoke Write Password
  writePassword(finalPassword)
  
}

// Write password to the #password input
function writePassword(finalPassword) {
  //Invoke Generate Passsword
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;

  //copyBtn.removeAttribute("disabled");
  //copyBtn.focus();
}
function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", userOutput);

// BONUS EVENT LISTENER


