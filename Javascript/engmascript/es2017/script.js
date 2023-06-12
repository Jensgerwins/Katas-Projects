"use strict "


const person = {
    firstName: "Jens",
    nachName: "Gerwins",
    age: "35"
};

console.log(Object.keys(person));
console.log(Object.values(person));
// Entreis
console.log(Object.entries(person));

for (const [key, value] of Object.entries(person)) {
    console.log({ key, value });
}