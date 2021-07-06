// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


for (var i = 1; i <= 100; i++) {

    console.log(i);
    if (i % 3 === 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Frizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
};

// Validation

var listElemet = document.getElementById('numbers-list');
var listItems = "";


for (var i = 1; i <= 100; i++) {

    console.log(i);
    if (i % 3 === 0 && i % 5 == 0) {
        listItems += '<li> FizzBuzz </li>';
    } else if (i % 3 === 0) {
        listItems += '<li> Fizz </li>';
    } else if (i % 5 === 0) {
        listItems += '<li> Buzz </li>';
    } else {
        listItems += '<li>' + i + '</li>';
    }
};

listElemet.innerHTML = listItems;
