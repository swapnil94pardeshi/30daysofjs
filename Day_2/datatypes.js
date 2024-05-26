//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge='             30 Days Of Javascript'

//Print the string on the browser console using console.log()
console.log(challenge)

//Print the length of the string on the browser console using console.log()
console.log(challenge.length)

//Change all the string characters to capital letters using toUpperCase() method
let upper=challenge.toUpperCase();
console.log(upper)

//Change all the string characters to lowercase letters using toLowerCase() method
lower=challenge.toLowerCase()
console.log(lower)

//Cut (slice) out the first word of the string using substr() or substring() method

cutword= challenge.substring(0,3)
console.log(cutword)

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

let i=challenge.indexOf("Days Of Javascript")

phrase=challenge.slice(i,)

console.log(phrase)

//Check if the string contains a word Script using includes() method

console.log(challenge.includes("script"))

//Split the string into an array using split() method

console.log(challenge.split(" "))

//Split the string 30 Days Of JavaScript at the space using split() method

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

companies='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(companies.split(","))

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
chengedname=challenge.replace("Javascript","Python")

console.log(chengedname)

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

console.log(challenge.charAt(15))

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
inn=challenge.indexOf("Javascript")

console.log(challenge.charCodeAt(inn))

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

ind=challenge.indexOf("30 Days Of Javascript")
console.log(ind,challenge)

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

str="30 Days Of Javascript"
lst=challenge.lastIndexOf(str)

console.log(lst)

//Use indexOf to find the position of the first occurrence of the word because in the following 

sentence='You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.lastIndexOf('because'))

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.search("because"))

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

console.log(challenge.trim())

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
challenge1="30 Days Of Javascript"
console.log(challenge1.startsWith('30 Days Of Javascript'))

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge1.endsWith("30 Days Of Javascript"))

//Use match() method to find all the a’s in 30 Days Of JavaScript

console.log(challenge1.match("a"))

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

a='30 days of'
b=' Javascript'

console.log(a.concat(b))

//Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(challenge1.repeat(2))