//Name Variable
var name = "Jacob";

//Number of states variable
const numberOfStates = 50;

//5 + 4, Pretty simple
var math = (5 + 4);

//Function says Hello World!
function sayHello(){
    console.log("Hello World!")
}
sayHello();

//checkAge Function
function checkAge(name, age){
    if (age < 21){
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

//List of people
let Charles = {
    name: "Charles",
    age: 21
};
let Abby = {
    name: "Abby",
    age: 27
};
let James = {
    name: "James",
    age: 18
};
let John = {
    name: "John",
    age: 17
};
checkAge(Charles.name, Charles.age);
checkAge(Abby.name, Abby.age);
checkAge(James.name, James.age);
checkAge(John.name, John.age);

//Veggie array
let veggies = ["Corn", "Cauliflower", "Broccoli"]
for ( let i=0; i<veggies.length; i++){
    console.log(veggies[i]);
}

//Pet Stuff
let pets = [
    {
       name: "Cooper",
        breed: "Who Knows"
    },
    {
        name: "Tara",
        breed: "Pitbull"
    }


];
for (let i=0; i < pets.length; i++) {
    console.log(pets[i]);
}

//Array of people
let people = [
    {
        name: "Billy",
        age: 99
    },
    {
        name: "Makayla",
        age: 21
    },
    {
        name: "Sandy",
        age: 43
    },
    {
        name: "Crimbo",
        age: 12
    
    },
    {
        name: "Gurt",
        age: 15
    }

];

for (let i=0; i < people.length; i++){
    checkAge(people[i].name, people[i].age);
}

//get length func
function getLength(string){
    return string.length;
}
let length = getLength("Hello World");
if (length % 2 === 0) {
    console.log("The world is nice and even!");
} else{
    console.log("The world is an odd place!")
}