let R = require('ramda');

let double = x => x * 2;

let a = R.map(double, [1, 2, 3]); //=> [2, 4, 6]

let b = R.map(double, { x: 1, y: 2, z: 3 }); //=> {x: 2, y: 4, z: 6}

console.log(a, b)

const _U = require("underscore");
const sum = _U.reduce {}