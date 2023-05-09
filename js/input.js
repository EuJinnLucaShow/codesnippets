// Input validate Email Address
let inputEmail = prompt('Please enter your Email Address');

if (/\S+@\S+\.\S+/.test(inputEmail)) {
  console.log('Email is valid!');
} else {
  console.log('Email is invalid!');
}

//Variable is Number. Check if a variable is a number:
let num = prompt('Please enter your number');

if (!isNaN(parseFloat(num)) && isFinite(num)) {
  console.log('Variable is a number!');
} else {
  console.log('Variable is not a number!');
}
