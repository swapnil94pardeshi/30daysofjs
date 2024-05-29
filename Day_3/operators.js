/*
//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstname='swapnil' , lastname='pardeshi',country='india',city='nashik',age=29, isMarried=true, year=1995

console.log(typeof(firstname) , typeof(lastname),  typeof(country) ,  typeof(city) ,  typeof(age) , typeof(isMarried) , typeof(year))


//Check if type of '10' is equal to 10

if (typeof("10") == 10){
    console.log("types are matched")
}
else{
    console.log("types not matched")
}


//Check if parseInt('9.8') is equal to 10

if (parseInt('9.8') == 10){
    console.log('equal')
}
else{
    console.log("not equal")
}


//Boolean value is either true or false.

//Write three JavaScript statement which provide truthy value.
//Write three JavaScript statement which provide falsy value.

console.log(Boolean(1))
console.log(Boolean(-1))
console.log(Boolean(true))

console.log(Boolean(0))
console.log(Boolean(false))
console.log(Boolean(NaN))


//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
//Find the length of python and jargon and make a falsy comparison statement.

console.log('python'.length == 'jargon'.length)


//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
//There is no 'on' in both dragon and python

console.log(!('dragon'.includes('on') && 'python'.includes('on')))


//Use the Date object to do the following activities

//What is the year today?
//What is the month today as a number?
//What is the date today?
//What is the day today as a number?
//What is the hours now?
//What is the minutes now?
//Find out the numbers of seconds elapsed from January 1, 1970 to now.

const now= new Date()
console.log(now.getFullYear())
console.log(now.getUTCMonth())
console.log(now.getDate())
console.log(now.getUTCDate())
console.log(now.getHours())
console.log(now.getMinutes())

const epoch=new Date(0)
const differenceInMilliseconds = now.getTime() - epoch.getTime()
const secondsElapsed = differenceInMilliseconds / 1000;

console.log("Seconds elapsed since January 1, 1970:", secondsElapsed);


//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

//Enter base: 20
//Enter height: 10
//The area of the triangle is 100

const base = 8;
const height = 10;
const area= 0.5 *base*height

console.log(`the area of traingle is ${area}`)

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let a=10
let b=12
let c=14

console.log(`the perimeter of triangle is ${a+b+c}`)

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length=10
let width=15

area=length*width
perimeter=2*(length+width)

console.log(`area of rectangle is ${area} and perimeter is ${perimeter}`)


//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

radius=10
area=Math.PI*radius**2
circumference=2*Math.PI*radius

console.log(`are of circle is ${area} and circumeference of circle is ${circumference}`)


//Calculate the slope, x-intercept and y-intercept of y = 2x -2

const equation = 'y = 2x - 2'

const slope = equation.match(/(\d+)x/)[1];

console.log(`The slope of the line is ${slope}`);


//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let y1=2, y2=10,x1=2,x2=6
console.log(`slope is ${(y2-y1)/(x2-x1)}`)

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

x=[1,2,3,4,5,-1,-2,-3,-4,-5]

for (i=0;i<x.length;i++){
    y=(x[i])**2 + 6*x[i]+9
    if (y == 0){
        console.log(`the number when y = 0 is ${x[i]}`)
    }
}


//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hours = 40
let rate_per_hour = 28
console.log(`your pay for today is ${hours*rate_per_hour} rupees`)


//If the length of your name is greater than 7 say, your name is long else say your name is short.

let name1= 'Swapnil'

if (name1.length > 7){
    console.log(`your name is long`)
}
else {
    console.log(`your name is short`)
}


//Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
//Your first name, Asabeneh is longer than your family name, Yetayeh

console.log(`Your first name, ${firstName} is longer than your family name,${lastName}`)


//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
//I am 225 years older than you.
console.log(`I am ${myAge-yourAge} years older than you`)


//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

//Enter birth year: 1995
//You are 25. You are old enough to drive

//Enter birth year: 2005
//You are 15. You will be allowed to drive after 3 years.

birth_year= 2008
let now= new Date()
if ((now.getFullYear()-birth_year) > 18 ){
    console.log(`Your are ${now.getFullYear()-birth_year}. You are old enough to drive`)
}
else{
    console.log(`Your are ${now.getFullYear()-birth_year}. You will be allowed to drive after ${18-(now.getFullYear()-birth_year)} years`)
}

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

//Enter number of years you live: 100
//You lived 3153600000 seconds.

let years_lived=100
let seconds=years_lived*365*24*3600
console.log(`You lived ${seconds} seconds`)



//Create a human readable time format using the Date time object

//YYYY-MM-DD HH:mm
//DD-MM-YYYY HH:mm
//DD/MM/YYYY HH:mm

let now= new Date()

console.log(`${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`)
*/

//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let now= new Date()

let year=now.getFullYear()
let month=String(now.getUTCMonth()).padStart(2,'0')
let date=String(now.getUTCDate()).padStart(2,'0')
let hours=String(now.getUTCHours()).padStart(2,'0')
let minutes=String(now.getUTCMonth()).padStart(2,'0')
console.log(`${year}-${month}-${date} ${hours}: ${minutes}`)