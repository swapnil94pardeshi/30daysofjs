const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
const countires1=require('D:/javascript/30_days_of_js/data/countries.js')
const countries_data = require('D:/javascript/30_days_of_js/data/countries_data.js')
const countires_data=require('D:/javascript/30_days_of_js/data/countries_data.js')
/*
//Use forEach to console.log each country in the countries array.

countries.forEach(country=>console.log(country))

//Use forEach to console.log each name in the names array.

names.forEach(name=>console.log(name))

//Use forEach to console.log each number in the numbers array.

numbers.forEach(num=>console.log(num))

//Use map to create a new array by changing each country to uppercase in the countries array.

const modifiedcountry=countries.map(country=>country.toUpperCase())

console.log(modifiedcountry)

//Use map to create an array of countries length from countries array.

const countrielength=countries.map(country=>country.length)

console.log(countrielength)

//Use map to create a new array by changing each number to square in the numbers array

const squaredarray=numbers.map(num=>num*num)

console.log(squaredarray)

//Use map to change to each name to uppercase in the names array

const uppercasename=names.map(name=>name.toUpperCase())

console.log(uppercasename)

//Use map to map the products array to its corresponding prices.
products.map(prod=>console.log(prod.price))

//Use filter to filter out countries containing land.

const countrieswithland= countries.filter(country=>country.toLowerCase().includes("land"))

console.log(countrieswithland)

//Use filter to filter out countries having six character.

const countrieswith6char= countries.filter(country=>country.length>6)

console.log(countrieswith6char)

//Use filter to filter out countries containing six letters and more in the country array.

const countrieswith6charmore= countries.filter(country=>country.length>=6)

console.log(countrieswith6charmore)

//Use filter to filter out country start with 'E';

const countrywithe=countries.filter(country=>country.startsWith('E'))

console.log(countrywithe)

//Use filter to filter out only prices with values.

const prodwithprice=products.filter(product => product.price && product.price !== ' ' && product.price !== '')
console.log(prodwithprice)

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getstringlists(arra){
  arraywithstring=[]
  for(i=0;i<arra.length;i++){
    if(typeof(arra[i])=== 'string'){
      arraywithstring.push(arra[i])
    }
  }
  return arraywithstring
}


function getstringlists1(arra){
  return arra.filter(item=>typeof(item)==='string')
}

ar1=['1','2','sr',1,3]

console.log(getstringlists1(ar1))


//Use reduce to sum all the numbers in the numbers array.

console.log(ar1.filter(item=>typeof(item)==='number').reduce((acc,cur)=>acc+cur,0))

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries


const sente = countries.reduce((acc, country, index, array) => {
  if (index === 0) {
    return country;
  } else if (index === array.length - 1) {
    return `${acc} and ${country}`;
  } else {
    return `${acc}, ${country}`;
  }
}, "");
console.log(`${sente} are north european countries`)

//Use some to check if some names' length greater than seven in names array

const checklengthseven=names.some(name=>name.length>7)
console.log(checklengthseven)

//Use every to check if all the countries contain the word land

const checkcountryland=countries.every(country=>country.includes('land'))

console.log(checkcountryland)

//Use find to find the first country containing only six letters in the countries array

const countrywithsixletter=countries.find((country)=>country.length === 6)
console.log(countrywithsixletter)


//Use findIndex to find the position of the first country containing only six letters in the countries array

const countrywith6letter=countries.findIndex((country)=>country.length===6)

console.log(countrywith6letter)

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

const findnorway=countries.findIndex((country)=>country=='Norway')
console.log(findnorway)

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const findrussia=countries.findIndex((country)=>country=='Russia')
console.log(findrussia)


//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))


const totalprice=products.filter(item=>typeof(item.price)==='number').reduce((acc,cur)=>acc+cur.price,0)

console.log(totalprice)

//Find the sum of price of products using only reduce reduce(callback))

const totalprice1=products.reduce((acc, current) => {
  if (typeof current.price === 'number' && current.price > 0) {
    return acc + current.price;
  }
  return acc;
}, 0)

console.log(totalprice1)

//Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

//console.log(countires1)

function categorizeCountries(arra){
  return arra.filter(country=>country.includes('land'))
}

console.log(categorizeCountries(countires1))


//Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

function countStartingLetters(countries) {
    const letterCounts = {};

    countries.forEach(country => {
        const firstLetter = country[0].toUpperCase();
        if (letterCounts[firstLetter]) {
            letterCounts[firstLetter]++;
        } else {
            letterCounts[firstLetter] = 1;
        }
    });

    return Object.keys(letterCounts).map(letter => ({
        letter: letter,
        count: letterCounts[letter]
    }));
}

// Example usage:
const startingLetterCounts = countStartingLetters(countires1);
console.log(startingLetterCounts);


//Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

function getfirsttencountries(arra){
  new10array=[]
  for(i=0;i<10;i++){
    new10array.push(arra[i])
  }
  return new10array
}

console.log(getfirsttencountries(countires1))

//Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

function lasttencountries(arra){
  newlast10=[]
  const startIndex = arra.length - 10;
  for(i=startIndex;i<arra.length;i++){
    newlast10.push(arra[i])
  }
  return newlast10
}

console.log(lasttencountries(countires1))

//Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


function countStartingLetters(countries) {
    const letterCounts = {};

    countries.forEach(country => {
        const firstLetter = country[0].toUpperCase();
        if (letterCounts[firstLetter]) {
            letterCounts[firstLetter]++;
        } else {
            letterCounts[firstLetter] = 1;
        }
    });

    return Object.keys(letterCounts).map(letter => ({
        letter: letter,
        count: letterCounts[letter]
    }));
}

const startingLetterCounts1 = countStartingLetters(countires1);
//console.log(startingLetterCounts1)

let maxCount = 0;
let mostFrequentInitial = '';

for (i=0;i<startingLetterCounts1.length;i++){
  if(startingLetterCounts1[i].count > maxCount){
    maxCount=startingLetterCounts1[i].count
    mostFrequentInitial=startingLetterCounts1[i].letter
  }
}

console.log(mostFrequentInitial)


//Use the countries information, in the data folder. Sort countries by name, by capital, by population


function sortByKey(array, key) {
    return array.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
}

const sortedByName = sortByKey([...countries11], 'capital');
console.log("Sorted by Name:", sortedByName);


//Find the 10 most spoken languages:

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


// Use countries_data.js file create a function which create the ten most populated countries

let countries11=countires_data

const sortedByPopulation = countries11.sort((a, b) => b.population - a.population);
console.log("Sorted by Population:", sortedByPopulation.slice(0,10));
*/

//

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

const statistics = {
    mean(arr) {
        const sum = arr.reduce((acc, val) => acc + val, 0);
        return sum / arr.length;
    },

    median(arr) {
        const sortedArr = [...arr].sort((a, b) => a - b);
        const mid = Math.floor(sortedArr.length / 2);
        return sortedArr.length % 2 !== 0 ? sortedArr[mid] : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    },

    mode(arr) {
        const frequency = {};
        let maxFreq = 0;
        let modes = [];

        arr.forEach(val => {
            frequency[val] = (frequency[val] || 0) + 1;
            if (frequency[val] > maxFreq) {
                maxFreq = frequency[val];
                modes = [val];
            } else if (frequency[val] === maxFreq) {
                modes.push(val);
            }
        });

        return modes.length === arr.length ? [] : modes;
    },

    range(arr) {
        return Math.max(...arr) - Math.min(...arr);
    },

    variance(arr) {
        const mean = this.mean(arr);
        const squaredDiffs = arr.map(val => Math.pow(val - mean, 2));
        return this.mean(squaredDiffs);
    },

    stdDeviation(arr) {
        return Math.sqrt(this.variance(arr));
    },

    min(arr) {
        return Math.min(...arr);
    },

    max(arr) {
        return Math.max(...arr);
    },

    count(arr) {
        return arr.length;
    },

    percentile(arr, p) {
        const sortedArr = [...arr].sort((a, b) => a - b);
        const index = Math.ceil((p / 100) * sortedArr.length) - 1;
        return sortedArr[index];
    },

    frequencyDistribution(arr) {
        const frequency = {};
        arr.forEach(val => {
            frequency[val] = (frequency[val] || 0) + 1;
        });

        return Object.entries(frequency).map(([value, count]) => ({
            value: Number(value),
            count
        })).sort((a, b) => b.count - a.count);
    }
};

// Usage
console.log("Mean:", statistics.mean(ages));
console.log("Median:", statistics.median(ages));
console.log("Mode:", statistics.mode(ages));
console.log("Range:", statistics.range(ages));
console.log("Variance:", statistics.variance(ages));
console.log("Standard Deviation:", statistics.stdDeviation(ages));
console.log("Min:", statistics.min(ages));
console.log("Max:", statistics.max(ages));
console.log("Count:", statistics.count(ages));
console.log("25th Percentile:", statistics.percentile(ages, 25));
console.log("50th Percentile:", statistics.percentile(ages, 50));
console.log("75th Percentile:", statistics.percentile(ages, 75));
console.log("Frequency Distribution:", statistics.frequencyDistribution(ages));


