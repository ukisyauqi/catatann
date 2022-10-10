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
1. Get an array of all names
2. Get an array of all heights
3. Get an array of objects with just name and height properties
4. Get an array of all first names 
`

const noSatu  = characters.map(character => character.name)
const noDua   = characters.map(character => character.height)
const noTiga  = characters.map(character => ({name: character.name, height: character.height}))
const noEmpat = characters.map(character => character.name.split(" ")[0])

`       PENJELASAN
    Menerapkan perintah untuk semua anggota array, semua hasilnya di simpan di array baru
`


