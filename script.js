// Assignment Code
var generateBtn = document.querySelector("#generate");


//All available opitons
//Singles
var upperOptions = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z' ];
var lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
 "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
  "y", "z"];
var specialOptions = ["!", "#","$","%","(",")","*","+",",","-",".","/",":",";","<",
"=",">","?","@","[","]","^","_","`","{","}","|","~"];
var numberOptions = ["1","2","3","4","5","6","7","8","9","0"];
// Triples
var ALLOFTHEM = upperOptions.concat(lowerOptions, specialOptions, numberOptions);
var noSpecialOption = upperOptions.concat(lowerOptions, numberOptions);
var noUpperOption = lowerOptions.concat(specialOptions, numberOptions);
var noLowerOption = upperOptions.concat(specialOptions, numberOptions);
var noNumber = upperOptions.concat(lowerOptions, specialOptions);
//Doubles
var noLowernoSpecial = upperOptions.concat(numberOptions); //
var noUppernoSpecial = lowerOptions.concat(numberOptions);//
var noUppernoLower = specialOptions.concat(numberOptions);//
var noNumbernoUpper = lowerOptions.concat(specialOptions);//
var noNumbernoLower = upperOptions.concat(specialOptions);//
var noNumbernoSpecial = upperOptions.concat(lowerOptions);

function writePassword() {

var passLength = window.prompt('How long do you want the password to be? (Between 8-128)');

var passwordLength = parseInt(passLength);
if (passwordLength > 128) {
  window.alert('The password will must not exceed 128 characters');
  writePassword();
}else if (passwordLength < 8) {
  window.alert('The password must exceed 8 characters')
  writePassword();
}
var includeUpper = window.confirm('Do you want to include uppercase characters?');
var includeLower = window.confirm('Do you want to include lowercase characters?');
var includeSpecial = window.confirm('Do you want to include special characters?');
var includeNumber = window.confirm('Do you want to include number characters?');

var passwordArray = [];
for(let i = 0; i < passwordLength; i++) {
if (includeUpper && includeLower && includeSpecial && includeNumber) {
  var index = Math.floor(Math.random() * ALLOFTHEM.length);
  var password = ALLOFTHEM[index];
  passwordArray.push(password);
  console.log(password);
}
else if (includeUpper && includeLower && !includeSpecial && includeNumber) {
  var index = Math.floor(Math.random() * noSpecialOption.length);
  var password = noSpecialOption[index];
  passwordArray.push(password);
}
else if (includeUpper && !includeLower && includeSpecial && includeNumber) {
  var index = Math.floor(Math.random() * noLowerOption.length);
  var password = noLowerOption[index];
  passwordArray.push(password);
}
else if (includeUpper && !includeLower && !includeSpecial && includeNumber){
  var index = Math.floor(Math.random() * upperOptions.length);
  var password = upperOptions[index];
  passwordArray.push(password);
}
else if (!includeUpper && includeLower && includeSpecial && includeNumber) {
  var index = Math.floor(Math.random() * noUpperOption.length);
  var password = noUpperOption[index];
  passwordArray.push(password);
}
else if (!includeUpper && includeLower && !includeSpecial && !includeNumber) {
  var index = Math.floor(Math.random() * lowerOptions.length);
  var password = lowerOptions[index];
  passwordArray.push(password);
}
else if (!includeUpper && !includeLower && includeSpecial && !includeNumber) {
  var index = Math.floor(Math.random() * specialOptions.length);
  var password = specialOptions[index];
  passwordArray.push(password);
}
else if (includeUpper && !includeLower && !includeSpecial && includeNumber) {
  var index = Math.floor(Math.random() * noLowernoSpecial.length);
  var password = noLowernoSpecial[index];
  passwordArray.push(password);
}
else if (!includeUpper && includeLower && !includeSpecial && includeNumber) {
  var index = Math.floor(Math.random() * noUppernoSpecial.length);
  var password = noUppernoSpecial[index];
  passwordArray.push(password);
}
else if (!includeUpper && !includeLower && includeSpecial && includeNumber) {
  var index = Math.floor(Math.random() * noUppernoLower.length);
  var password = noUppernoLower[index];
  passwordArray.push(password);
}
else if (!includeUpper && includeLower && includeSpecial && !includeNumber) {
  var index = Math.floor(Math.random() * noNumbernoUpper.length);
  var password = noNumbernoUpper[index];
  passwordArray.push(password);
}
else if (includeUpper && !includeLower && includeSpecial && !includeNumber) {
  var index = Math.floor(Math.random() * noNumbernoLower.length);
  var password = noNumbernoLower[index];
  passwordArray.push(password); 
}
else if (includeUpper && includeLower && includeSpecial && !includeNumber) {
  var index = Math.floor(Math.random() * noNumber.length);
  var password = noNumber[index];
  passwordArray.push(password); 
}
else {
  var index = Math.floor(Math.random() * noNumbernoSpecial.length);
  var password = noNumbernoSpecial[index];
  passwordArray.push(password); 
};
password = passwordArray.join('');
var passwordText = document.querySelector("#password")
passwordText.value = password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)




// Write password to the #password input
/*
function writePassword() {
 
  
  var passLength = window.prompt('How long do you want the password to be? (Between 8-128)');

  var passwordLength = parseInt(passLength);

  var includeUpper = window.confirm('Do you want to include uppercase characters?');
  var includeLower = window.confirm('Do you want to include lowercase characters?');
  var includeSpecial = window.confirm('Do you want to include special characters?');
  var passwordArray = [];
  for(let i = 0; i < passwordLength; i++) {
  if (includeUpper && includeLower && includeSpecial) {
    var index = Math.floor(Math.random() * ALLOFTHEM.length);
    var generatePassword = ALLOFTHEM[index];
    passwordArray.push(password);
  }
  else if (includeUpper && includeLower && !includeSpecial) {
    var index = Math.floor(Math.random() * noSpecialOption.length);
    var generatePassword = noSpecialOption[index];
    passwordArray.push(password);
  }
  else if (includeUpper && !includeLower && includeSpecial) {
    var index = Math.floor(Math.random() * noLowerOption.length);
    var generatePassword = noLowerOption[index];
    passwordArray.push(password);
  }
  else if (includeUpper && !includeLower && !includeSpecial){
    var index = Math.floor(Math.random() * upperOptions.length);
    var generatePassword = upperOptions[index];
    passwordArray.push(password);
  }
  else if (!includeUpper && includeLower && includeSpecial) {
    var index = Math.floor(Math.random() * noUpperOption.length);
    var generatePassword = noUpperOption[index];
    passwordArray.push(password);
  }
  else if (!includeUpper && includeLower && !includeSpecial) {
    var index = Math.floor(Math.random() * lowerOptions.length);
    var generatePassword = noUpperOption[index];
    passwordArray.push(password);
  }
  else {
    var index = Math.floor(Math.random() * specialOptions.length);
    var generatePassword = noUpperOption[index];
    passwordArray.push(password);
  }
  console.log(password);
  password = passwordArray.toString();
   var password = generatePassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
}
*/