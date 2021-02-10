//  tugas1
const umur = (umur1, umur2, callback) => {
    return callback(umur1, umur2)
}
const plus = (a, b) => {
    return a + b
}
U1 = umur(10, 50, plus)
console.log(U1)

//tugas2
const umur1 = (sasa, rara, nana, callback) => {
    return callback(sasa, rara, nana)
}
const add = (a, b, c) => {
    return a + b - c
}
U2 = umur1(10, 50, 30, add)
console.log(U2)