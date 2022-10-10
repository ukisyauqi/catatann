//menerapkan event listener untuk banyak button
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener("click", function (event) {
    // mendapatkan objek elemen yang diklik
    const elementTarget = event.target;

    // code here
  });
}

//check mengandung class apa saja
let list = element.classList;        // list = ["class1", "class2", value: "class1 class2"]
let check = list.contains("class1"); //true

//String <-> Object
const myObject = { name: "uki", age: 21 };
const myStringFromObject = JSON.stringify(myObject); //object -> string, "{name:"uki",age:21}"
const myObjectFromString = JSON.parse(myStringFromObject); //string -> object,  {name:"uki", age:21}

//Menambah element
let newElement = document.createElement("p"); // variable newElement berisi elemen p baru
newElement.innerHTML = "text"; // variable newElement sekarang punya content
document.body.appendChild(newElement); // variable newElement masuk ke body (posisi akhir)
