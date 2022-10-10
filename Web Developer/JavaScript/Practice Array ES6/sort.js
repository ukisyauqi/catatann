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
1. Sort by name
2. Sort by mass
3. Sort by height
4. Sort by gender
`

const noSatu  = characters.sort((a,b) => (a.name < b.name) ? -1 : 1)
const noDua   = characters.sort((a,b) => a.mass - b.mass)
const noTiga  = characters.sort((a,b) => a.height - b.height)
const noEmpat = characters.sort((a,b) => (a.gender < b.gender) ? -1 : 1)


`       PENJELASAN

    a adalah elemen pertama dan b elemen kedua
    jika result = 1  maka a dulu diletakan kemudian b,  a -> b
    jika result = -1 maka b dulu diletakan kemudian a,  b -> a
    jika result = 0  maka a dan b tidak di apa apain 

    jika kita ingin urutan kecil -> besar maka agar result negatif maka harus: kecil - besar
    begitu juga sebaliknya

    jika kita ingin mengurutkan alfabhet tidak bisa menggunakan operator pengurangan "-"
    karena 'a' - 'b' hasilnya NaN (Not a Number)

    Jadi pakai "<" "==" ">" dan sejenisnya

    'a' < 'b'  adalah true
    'az' < 'b' adalah true
    'ba' < 'b' adalah false

    kita butuh angka 1 dan -1 disini, sedangkan
    -1 tidak sama dengan false, jadi pake conditional if atau ternary operator (if juga sebenarnya)
    dengan returnnya 1 atau -1
`




