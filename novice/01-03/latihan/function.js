function makan(nasi, air) {
    console.log(`saya makan ${nasi} dan saya minum ${air}`)
        // return `saya makan ${nasi} dan saya minum ${air}`
}
makan(`nasi uduk`, `air putih`)

function dewasa(age, nasi, air) {
    console.log(typeof(age))
    if (typeof(age) == `number`) {
        if (age >= 20) {
            m1 = makan(nasi, air)
                // console.log(`yoi gw dah gede`)
            return `umur saya ${age} dan aku udah gede sekarang ${m1}`
        } else {
            console.log(`bocil njirr`)
            return `aku masih anak anak ${age} tahun`
        }
    } else {
        return `bukan integer boss`
    }
}

function jumlah(a, b) {
    return a + b
}
hasil = jumlah(9, 8) + jumlah(8, 9)
console.log(hasil + 20)

cuy = dewasa(20, 'jagung', 'es jeruk')
console.log(cuy)

//penggunaan function dengan cara baru 
const nama = () => {
    console.log(`novie`)
}
nama()