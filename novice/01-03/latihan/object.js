var obj1 = {
    nama: () => {
        return 'novie'
    },
    age: 20,
    pekerjaan: 'programmer',
    kendaraan: {
        k1: 'motor',
        k2: 'mobil'
    }
}

const { k1 } = obj1.kendaraan
console.log(k1)
    // console.log(obj1.nama())
    // var { nama, age, pekerjaan } = obj1
    // console.log(nama())