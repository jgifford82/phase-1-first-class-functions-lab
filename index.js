// Code your solution in this file!
// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

// function returnFirstTwoDrivers() {
//     return drivers.slice(0,2)
// }

const returnFirstTwoDrivers = function (names) {
    return names.slice(0,2)
}

const returnLastTwoDrivers = function (names) {
    return names.slice(2,4)
}

// function selectingDrivers(returnFirstTwoDrivers) {
//     returnFirstTwoDrivers();
//     returnLastTwoDrivers();
// }

// function selectingDrivers() {
//     return (returnFirstTwoDrivers() + returnLastTwoDrivers());
// }

// function selectingDrivers() {
//     return function returnFirstTwoDrivers() {

//     }
// }

// function selectingDrivers(returnFirstTwoDrivers) {
//     return returnFirstTwoDrivers();
// } (returnFirstTwoDrivers)

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

// function createFareMultiplier(value) {
//     return function() {
//         value * fare
//     };
// }

// This is the higher-order function that passes the test. 
// Value is the first function which returns the fare function.
createFareMultiplier = (value) => (fare) => value * fare;

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

// function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
//     return drivers
// }

// function selectDifferentDrivers(returnFirstTwoDrivers, returnLastTwoDrivers) {
//     returnFirstTwoDrivers();
//     returnLastTwoDrivers();
// }

// function selectDifferentDrivers(returnFirstTwoDrivers, returnLastTwoDrivers) {
//     return returnFirstTwoDrivers;
//     return returnLastTwoDrivers;
// }

// function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
//     return returnFirstTwoDrivers;
//     return returnLastTwoDrivers;
// }

// This passes 12th test.
// function selectDifferentDrivers(drivers, returnDriversFunction) {
//     return returnFirstTwoDrivers();
//     return returnLastTwoDrivers;
// }


function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    // return returnFirstTwoDrivers();
    return returnLastTwoDrivers(drivers);
}

// Various attempts at passing the 13th test, which haven't worked so far:

// function selectDifferentDrivers(drivers, returnDrivers) {
//     return returnFirstTwoDrivers() || returnLastTwoDrivers();
// }

// function selectDifferentDrivers(drivers, returnDrivers) {
//     return returnFirstTwoDrivers();
//     returnLastTwoDrivers;
// }

// function selectDifferentDrivers(drivers, returnDrivers) {
//     return returnFirstTwoDrivers();
//     return LastTwoDrivers();
// }

// function selectDifferentDrivers(drivers, returnDrivers) {
//     if (returnDrivers = returnFirstTwoDrivers) {
//         return returnFirstTwoDrivers
//     }
//     else if (returnDrivers = returnLastTwoDrivers) {
//         return returnLastTwoDrivers
//     }
// }

// function selectDifferentDrivers(drivers, returnDrivers) {
//     return returnFirstTwoDrivers() || returnLastTwoDrivers();
// }

// const selectDifferentDrivers = function (returnFirstTwoDrivers, returnLastTwoDrivers) {
//     return returnFirstTwoDrivers()
// }

// const selectDifferentDrivers = function (returnLastTwoDrivers, returnFirstTwoDrivers){
//     return returnFirstTwoDrivers()
// }

// function selectDifferentDrivers(returnFirstTwoDrivers, returnLastTwoDrivers) {
//     return returnFirstTwoDrivers();
//     return returnLastTwoDrivers();
// }