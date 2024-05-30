//
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
/*
//Declare an empty array;

arra=[]
arra1=['1',2,3,4,5,6]

//Find the length of your array
console.log(arra1.length)

//Get the first item, the middle item and the last item of the array

console.log(`first element is ${arra1[0]}`)
console.log(`last element is ${arra1[arra1.length-1]}`)
console.log(`middle element is ${arra1[arra1.length/2]}`)

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

mixedDataTypes=[1,'swapnil',[1,2],1.2,'a',true]
console.log(mixedDataTypes.length)

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

itcompanies=['facebook','google','microsoft','apple','ibm','oracle']

//Print the array using console.log()

console.log(itcompanies)

//Print the number of companies in the array

console.log(itcompanies.length)

//Print the first company, middle and last company

console.log(`first company is ${itcompanies[0]}`)
console.log(`last comapny is ${itcompanies[itcompanies.length-1]}`)
console.log(`middle company is ${itcompanies[Math.floor(itcompanies.length/2)]}`)

//Print out each company
for(i=0;i<itcompanies.length;i++){
    console.log(itcompanies[i])
}
//Change each company name to uppercase one by one and print them out
for(i=0;i<itcompanies.length;i++){
    console.log(itcompanies[i].toUpperCase())
}

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(`${itcompanies.join(", ")} are big IT companies`)

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

company='ibm'

if(itcompanies.includes(company)){
    console.log(company)
}
else{
    console.log('company not exist')
}
//Filter out companies which have more than one 'o' without the filter method

const result = [];
  for (let i = 0; i < itcompanies.length; i++) {
    const company1 = itcompanies[i];
    let oCount = 0;
    for (let j = 0; j < company1.length; j++) {
      if (company1[j] === "o") {
        oCount++;
      }
    }
    if (oCount <= 1) {
      result.push(company1);
    }
  }
  console.log(result)

  //Sort the array using sort() method

  console.log(itcompanies.sort())

  //Reverse the array using reverse() method

  console.log(itcompanies.reverse())

  //Slice out the first 3 companies from the array
console.log(itcompanies)
console.log(itcompanies.slice(0,3))

//Slice out the last 3 companies from the array
console.log(itcompanies)
console.log(itcompanies.slice((itcompanies.length-3),(itcompanies.length)))

//Slice out the middle IT company or companies from the array

console.log(itcompanies.length)

if (itcompanies.length%2==0){
    console.log(itcompanies[(itcompanies.length/2)],itcompanies[(itcompanies.length/2)-1])
}
else{
    console.log(itcompanies[Math.floor(itcompanies.length/2)])
}

//Remove the first IT company from the array
firstremoved=Array.from(itcompanies)
firstremoved.shift()
console.log(firstremoved)

//Remove the middle IT company or companies from the array

middleremoved=Array.from(itcompanies)
if (middleremoved.length%2==0){
    middleremoved.splice((middleremoved.length/2-1),2)
}
else{
    middleremoved.splice(middleremoved.length/2,1)
}
console.log(itcompanies)
console.log(middleremoved)

//Remove the last IT company from the array

lastremoved=Array.from(itcompanies)
console.log(lastremoved)
lastremoved.pop()
console.log(lastremoved)

//Remove all IT companies

removedall=Array.from(itcompanies)
console.log(removedall)
removedall.splice(0,removedall.length)
console.log(removedall)

//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

const countries1=require('D:/javascript/30_days_of_js/Day_05/countries.js')
const webtechs1=require('D:/javascript/30_days_of_js/Day_05/web_techs.js')

console.log(countries1)
console.log(webtechs1)

//First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const wordsWithoutPunctuation = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
console.log(wordsWithoutPunctuation)
arraytext=wordsWithoutPunctuation.split(" ")
console.log(arraytext,arraytext.length)

//In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add 'Meat' in the beginning of your shopping cart if it has not been already added
if(shoppingCart.includes('Meat')){
    console.log("Meat already added")
    console.log(shoppingCart)
}
else{
    shoppingCart.unshift("Meat")
    console.log(shoppingCart)
}
//add Sugar at the end of you shopping cart if it has not been already added
if(shoppingCart.includes('Sugar')){
    console.log("Sugar is Already added")
}
else{
    shoppingCart.push('Sugar')
}
//remove 'Honey' if you are allergic to honey
let allergic=true
let index= shoppingCart.indexOf('Honey')
if(allergic==true){
    shoppingCart.splice(index,1)
}
else{
    console.log("you are fine.")
    console.log(shoppingCart)
}
//modify Tea to 'Green Tea'
let index1=shoppingCart.indexOf('Tea')
shoppingCart[index1]="Green Tea"
console.log(shoppingCart)

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries1.includes('Ethiopia')){
    console.log("Ehiopia")
}
else{
    countries1.push('Ethiopia')
}

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

if (webtechs1.includes('Sass')){
    console.log('Sass os a CSS preprocess')
}
else{
    webtechs1.push('Sass')
    console.log(webtechs1)
}

//Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(frontEnd.concat(backEnd))

//The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
ages.sort()
console.log(ages)
console.log(`min age is ${ages[0]}`)
console.log(`max age is ${ages[ages.length-1]}`)

//Find the median age(one middle item or two middle items divided by two)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
let medianage
if (ages.length%2==0){
    medianage= ( ages[ages.length/2] + ages[(ages.length/2)-1] ) /2
}
else{
    medianage=ages[Math.floor(ages.length/2)]
}
console.log(ages)
console.log(medianage)


//Find the average age(all items divided by number of items)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
let total=0
for(i=0;i<ages.length;i++){
    total+=ages[i]
}
console.log(total)
console.log(`Average of ages is ${total/ages.length}`)

//Find the range of the ages(max minus min)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
let range_of_ages=ages[ages.length-1]- ages[0]
console.log(range_of_ages)


//Compare the value of (min - average) and (max - average), use abs() method 

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
let min=ages[0]
let max=ages[ages.length-1]
let total=0
for(i=0;i<ages.length;i++){
    total+=ages[i]
}
let average=total/ages.length

let a=Math.abs(min-average)
let b=Math.abs(max-average)
console.log(a,b)
*/

//1.Slice the first ten countries from the countries array
const countries1=require('D:/javascript/30_days_of_js/Day_05/countries.js')
const webtechs1=require('D:/javascript/30_days_of_js/Day_05/web_techs.js')
let first10countires=countries1.slice(0,10)

console.log(first10countires)

//Find the middle country(ies) in the countries array
let index=countries1.length/2

if (countries1.length%2==0){
    console.log(countries1[Math.ceil(countries1.length/2)],countries1[Math.ceil(countries1.length/2)+1])
}
else{
    console.log(countries1[Math.ceil(countries1.length/2)])
}

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

const halfLength = Math.ceil(countries.length / 2);
const firstHalf = countries.slice(0, halfLength);
const secondHalf = countries.slice(halfLength);

console.log(firstHalf)
console.log(secondHalf)