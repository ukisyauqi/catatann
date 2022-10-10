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

`   Every
1. Does every character have blue eyes?
2. Does every character have mass more than 40?
3. Is every character shorter than 200?
4. Is every character male?

    Some
1. Is there at least one male character?
2. Is there at least one character with blue eyes?
3. Is there at least one character taller than 200?
4. Is there at least one character that has mass less than 50?
`

// Every
// no.1
const blueEyes = characters.every(character => character.eye_color === 'blue')

// no.2
const mass = characters.every(character => character.mass > 40)

// no.3
const height = characters.every(character => character.height < 200)

// no.4
const gender = characters.every(character => character.gender === 'male')


// Some
// no.1
const male = characters.some(character => character.gender === 'male')

// no.2
const eye = characters.some(character => character.eye_color === 'bule')

// no.3
const oneHeightMore200 = characters.some(character => character.height > 200)
// console.log(oneHeightMore200);

// no.4
const oneMassLess50 = characters.some(character => character.mass < 50)
console.log(oneMassLess50);
