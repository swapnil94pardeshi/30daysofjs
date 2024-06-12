const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
const countries_data = require('D:/javascript/30_days_of_js/data/countries_data.js')
//create an empty set
/*
const ab=new Set()

//Create a set containing 0 to 10 using loop

for(i=0;i<10;i++){
    ab.add(i)
}
console.log(ab)

//Remove an element from a set

ab.delete(1)
console.log(ab)

//Clear a set

ab.clear()
console.log(ab)

//Create a set of 5 string elements from array

arra=['a','b','c','d','r','e']


const neset=new Set(arra)

console.log(arra)

//Create a map of countries and number of characters of a country

const newmap=new Map()

for(i=0;i<countries.length;i++){
    newmap.set(countries[i],countries[i].length)
}

console.log(newmap)

//Find a union b

const c=[...a,...b]

let C=new Set(c)

console.log(C)
*/
//Find a intersection b

let A = new Set(a)
let B = new Set(b)
let c = a.filter((num) => B.has(num))
let C = new Set(c)
console.log(C)


//Find a with b

//How many languages are there in the countries object file.

let countries11=countries_data

let languageCounts = {};

countries11.forEach(country => {
    country.languages.forEach(language => {
        if (languageCounts[language]) {
            languageCounts[language]++;
        } else {
            languageCounts[language] = 1;
        }
    });
});



let sortedLanguages = Object.entries(languageCounts).sort((a, b) => b[1] - a[1]);


let top10Languages = sortedLanguages.slice(0, 10);

console.log("Top 10 most spoken languages:", top10Languages);