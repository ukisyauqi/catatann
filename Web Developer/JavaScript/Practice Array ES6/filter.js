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
1. Get characters with mass greater than 100
2. Get characters with height less than 200
3. Get all male characters
4. Get all female characters
`

const noSatu  = characters.filter(character => character.mass > 100)
const noDua   = characters.filter(character => character.height > 100)
const noTiga  = characters.filter(character => character.gender === 'male')
const noEmpat = characters.filter(character => character.gender === 'female')

console.log(noSatu);


`
        PENJELASAN
    jika lolos test maka character di push ke array baru, (yang dipush itu kumplit satu objek,
    pengecekan bisa diambil propertynya saja)
`
