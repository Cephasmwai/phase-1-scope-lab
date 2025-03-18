// Write your solution in this file!
// Declare customerName in global scope
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob'; // Implicitly global since it's not declared with var/let/const
}

// Function to overwrite bestCustomer
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// Declare leastFavoriteCustomer as a constant in global scope
const leastFavoriteCustomer = 'some customer';

// Function to attempt changing leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'another customer'; // This will throw an error
}
