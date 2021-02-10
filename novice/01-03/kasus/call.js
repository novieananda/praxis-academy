const age = (manusia, kucing, callback) => {
    return callback(manusia, kucing)
}
console.log(`Your cat is ${age} years old in cat years`)

const add = (a, b) => {
    return a * b
}

age1 = age(1, 7, add)

console.log(age1)