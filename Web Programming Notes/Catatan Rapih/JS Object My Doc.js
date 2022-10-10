let obj = { a: 1, b: 2, c: 3 }

let value = 4
let nama = "d"
								 // obj = { a: 1, b: 2, c: 3 }
obj = { ...obj, [nama]: value }  // obj = { a: 1, b: 2, c: 3, d: 4 }
obj = { ...obj, nama: value }	 // obj = { a: 1, b: 2, c: 3, d: 4, nama: 4 }
