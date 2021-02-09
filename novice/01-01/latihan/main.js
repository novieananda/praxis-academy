// Hello world
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// variables
// let myVariable = "Bob";
// myVariable = "Steve";
// console.log(myVariable);

// conditions
// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     alert('Yay, I love chocolate ice cream!');
// } else {
//     alert('Awwww, but chocolate is my favorite...');
// }

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

//functions
// let myVariable = document.querySelector('h1');
// alert('hello!');

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//}

//img
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'download.jpg') {
        myImage.setAttribute('src', 'download.jpg');
    } else {
        myImage.setAttribute('src', 'downloa.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}