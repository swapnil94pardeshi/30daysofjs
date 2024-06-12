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

const prodwithprice=product.filter