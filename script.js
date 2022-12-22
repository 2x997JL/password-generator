// Assignment code here
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var Numbers = [1,2,3,4,5,6,7,8,9,0]
var specialcharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "{", "}", "[", "]", "~", "<", ">", "/", "?", ";", ":", ",", "."]
var options = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
var passwordLength = prompt("How long do you want your password?")
if (passwordLength < 8 || passwordLength > 128) {
  alert("Password must be between 8 - 128 characters")
  return generatePassword()
}
var wantsUpperCase = confirm("Select OK if you want uppercase characters?")
var wantsLowerCase = confirm("Select OK you want lowercase characters?")
var wantsNumbers  = confirm("Select OK if you want numbers?")
var wantsSpecialCharacters = confirm("Select OK if you want special characters?")
if (wantsUpperCase === false && wantsLowerCase === false && wantsNumbers === false && wantsSpecialCharacters === false) {
  alert("Must choose between one option")
  return generatePassword()
}
if (wantsUpperCase){
  options = options.concat(UpperCase)
}
if (wantsLowerCase){
  options = options.concat(LowerCase)
}
if (wantsNumbers){
  options = options.concat(Numbers)
}
if (wantsSpecialCharacters){
  options = options.concat(specialcharacters)
}
// create a loop
var password = ""
for (var i = 0; i < passwordLength; i ++) {
  password += options[Math.floor(Math.random()*options.length)]
}
return password 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
