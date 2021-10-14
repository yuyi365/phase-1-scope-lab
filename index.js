var customerName = 'bob';
const leastFavoriteCustomer = 'john'

// function upperCaseCustomerName () {
//     customerName = customerName.toUpperCase();
// }

var upperCaseCustomerName = () => {
    customerName = customerName.toUpperCase();
}

var setBestCustomer = () => {
    bestCustomer = 'not bob';
}

var overwriteBestCustomer = () => {
    bestCustomer = 'maybe bob';
}

var changeLeastFavoriteCustomer = () => {
    leastFavoriteCustomer = 'jane';
}
