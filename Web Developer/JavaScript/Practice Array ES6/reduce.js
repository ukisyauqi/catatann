const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

`
1. Get the total mass of all characters
2. Get the total height of all characters
3. Get the total number of characters in all the character names
4. Get the total number of characters by eye color (hint. a map of eye color to count)
`

const noSatu = characters.reduce((a, character) => a + parseInt(character.mass), 0)
const noDua  = characters.reduce((a, character) => a + parseInt(character.height), 0)
const noTiga = characters.reduce((a, character) => a + character.name.length, 0)


`       Penjelasan Singkat
    Menerapkan perintah di seluruh anggota array, ditambah fitur accumulator (value di loop sebelumnya)
    sehingga bisa menerapkan operasi semua anggota, contohnya: [a,b,c,d] -> a + b + c + d
 

        PENJELASAN Detail
    misal:
        arr = [1,2,3]
        sum = arr.reduce((vll,cv) => vll + cv, 0)   // sum = 6

    vll = value last loop (nilai return di loop sebelumnya)
    cv  = current value (nilai sekarang yg diambil dari array)
    2nd parameter adalah nilai start vll di loop pertama (0) 

    loop 1: vll = 0, cv = 1, return 0+1 = 1
    loop 2: vll = 1, cv = 2, return 1+2 = 3
    loop 3: vll = 3, cv = 3, return 3+3 = 6

    hasil akhir = 6
`