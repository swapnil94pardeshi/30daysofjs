/* //Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

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

//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another")


//Using console.log() print out the following quote by Mother Teresa:"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log("Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")


//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

ab='10'
ba=10

if (typeof(ab) == typeof(ba)){
    console.log("fine")
}
else{
    console.log(typeof(ab))
    console.log(typeof(ba))

    ab=parseInt(ab)

    console.log(typeof(ab))
}

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
abc=parseFloat("9.8")
if ( abc== 10){
    console.log("fine")
}
else {
    abc=Math.ceil(abc)
    console.log(abc)
}

//Check if 'on' is found in both python and jargon
let str1="python"
let str2="jargaon"
let contain=str1.includes("on")
let contain1=str2.includes("on")
if(contain && contain1){
    console.log("found")
}
else{
    console.log("not found")
}

//I hope this course is not full of jargon. Check if jargon is in the sentence.

let sentence1="I hope this course is not full of jargon"

if (sentence1.includes("jargon")){
    console.log("fine")
}
else{
    console.log("not found")
}

//Generate a random number between 0 and 100 inclusively.

let num= Math.ceil(Math.random() * 100)

console.log(num)

//Generate a random number between 50 and 100 inclusively.

let min = 50;
let max = 100;
let randomNumber = Math.ceil(Math.random() * (max - min) + min);
console.log(randomNumber); // Example output: 9.123456789

//Generate a random number between 0 and 255 inclusively.

let min =0
let max=255

let randomnumber= Math.ceil(Math.random() * (max-min+1)+ min)
console.log(randomnumber)

//Access the 'JavaScript' string characters using a random number.

let str='Javascript'
let len=str.length

let randomNumber=Math.floor(Math.random()*len)

let randomchar=str[randomNumber]
console.log(randomchar)

//Use console.log() and escape characters to print the following pattern.
//1 1 1 1 1
//2 1 2 4 8
//3 1 3 9 27
//4 1 4 16 64
//5 1 5 25 125

console.log(" 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125")


//Use substr to slice out the phrase because because because from the following sentence:

let str='You cannot end a sentence with because because because is a conjunction'
let ind=str.lastIndexOf('because')
let sub= str.substring(ind,)
console.log(sub)

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let str='Love is the best thing in this world. Some found their love and some are still looking for their love.'
let loveCount = 0
str=str.toLowerCase()
strar=str.split(" ")

console.log(strar)

for (const word of strar) {
    if (word === "love"){
        loveCount ++;
    }
}
console.log(loveCount)


//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

sentence='You cannot end a sentence with because because because is a conjunction'

let patternTwo = /because/gi

const cw= sentence.match(patternTwo)
lenght=cw.length
console.log(lenght)


//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const cleanedText = sentence.replace(/[^a-zA-Z0-9\s]/g, '');
*/

//Calculate the total annual income of the person by extracting the numbers from the following text. 

sentence= 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

earn= sentence.match(/\d+/g)
intearn=[]
let totalincome=0
for (const word of earn){
    intearn.push(parseInt(word))
}

for (const income of intearn){
    totalincome += income
}
console.log(totalincome)