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