// Task 1

const person = {
  name: "Nikhil",
  age: 21,
  isStudent: true,

  greet: function () {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
};

person.greet();


// Task 2

const persons = [
  { name: "Nikhil", age: 21 },
  { name: "Kaira", age: 23 },
  { name: "Aditya", age: 20 },
  { name: "Preet", age: 24 }
];

let totalAge = 0;

for (let i = 0; i < persons.length; i++) {
  console.log("Name: " + persons[i].name + ", Age: " + persons[i].age);
  totalAge += persons[i].age;
}

let averageAge = totalAge / persons.length;
console.log("Average age: " + averageAge);


// Task 3

const form = document.getElementById("contactForm");

if (form) {

form.addEventListener("submit", function(event){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name === "" || email === ""){
alert("Please fill in all required fields.");
event.preventDefault();
}

});

}