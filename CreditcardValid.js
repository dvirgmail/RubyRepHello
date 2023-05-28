// Function to check if a credit card number is valid
function isValidCreditCard(number) {
  // Remove any non-digit characters from the input
  var cleanedNumber = number.replace(/\D/g, '');

  // Visa, MasterCard, American Express, Discover, Diners Club, and JCB card validation patterns
  var cardPatterns = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/
  };

  // Check if the number matches any of the card patterns
  for (var card in cardPatterns) {
    if (cardPatterns[card].test(cleanedNumber)) {
      return true;
    }
  }

  return false;
}

// Test the function
var cardNumber = "1234 5678 9012 3456"; // Replace with your credit card number
var isValid = isValidCreditCard(cardNumber);

if (isValid) {
  console.log("Valid credit card number!");
} else {
  console.log("Invalid credit card number!");
}
