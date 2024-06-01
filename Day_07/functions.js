//Declare a function fullName and it print out your full name.
/*
function fullName(firstname='Swapnil',lastname='Pardeshi'){
    return firstname+" "+lastname
}
console.log(fullName())



//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstname,lastname){
    return firstname+" "+lastname
}

console.log(fullName('swapnil','pardeshi'))



//Declare a function addNumbers and it takes two two parameters and it returns sum.

function addnumbers(a,b){
    return a+b
}

console.log(addnumbers(2,5))



//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function area_of_rectangle(length,width){
    return length*width
}

console.log(area_of_rectangle(5,10))



//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeter_of_rectangle(length,width){
    return 2*(length+width)
}

console.log(perimeter_of_rectangle(5,10))


//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volume_of_prism(length,width,height){
    return length*width*height
}

console.log(volume_of_prism(5,6,7))


//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(radius){
    return Math.PI*radius*radius
}

console.log(areaOfCircle(10))



//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumferenceofcircle(radius){
    return 2*Math.PI*radius
}


console.log(circumferenceofcircle(10))


//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function densityOfSubstance(mass,volume){
    return mass/volume
}

console.log(densityOfSubstance(10,5))


//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

let speedOfObject=(distance,time) => {
    return distance/time
}

console.log(speedOfObject(100,4))


//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

let weightOfSubstance=(mass,gravity)=>{
    return mass*gravity
}

console.log(weightOfSubstance(100,9.8))



//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

let TemperatureInFareinheite=celsius=>{
    return celsius*(9/5)
}

console.log(TemperatureInFareinheite(40))


//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

//The same groups apply to both men and women.
//Underweight: BMI is less than 18.5
//Normal weight: BMI is 18.5 to 24.9
//Overweight: BMI is 25 to 29.9
//Obese: BMI is 30 or more

let BMI=(weight,height)=>{
    let BMI=weight/(height*height)
    if(BMI<18.5){
        return ['Underweight',BMI]
    }
    else if(BMI<24.9){
        return ['Normal Weight',BMI]
    }
    else if(BMI<29.9){
        return ['Overweight',BMI]
    }
    else if(BMI>30){
        return ['Obese',BMI]
    }
}
BMIcal=BMI(70,1.8)
console.log(`Dear You are ${BMIcal[0]} with BMI of ${BMIcal[1]}`)


//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

let checkSeason=month =>{
    if (month=="december" || month=="january" || month=="february"){
        return ['You are in Winter']
    }
    else if(month=='march' || month=='april' || month=='may'){
        return ['You are in Spring']
    }
    else if(month=='june'||month=='july'||month=='august'){
        return ['You are in Summer']
    }
    else if(month=='september' || month=='october' || month=='november'){
        return ['You are in Autumn']
    }
}

season=checkSeason('august')

console.log(season)



// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findmax(a,b,c){
    let max=a
    if(b>max){
        max=b
    }
    if(c>max){
        max=c
    }

    return max
}

console.log(findmax(100,7,2))



//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, c) {
  if (a === 0 && b === 0) {
    throw new Error("The equation is not linear.");
  }
  if (a === 0) {
    return -c / b;
  }
  if (b === 0) {
    return -c / a;
  }
  return -c / a;
}

console.log(solveLinEquation(0,0,8))


//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadEquation(a, b, c) {
  
  Solves a quadratic equation and returns the roots.

  Args:
      a: The coefficient of the x^2 term.
      b: The coefficient of the x term.
      c: The constant term.

  Returns:
      A list containing the roots of the quadratic equation. 
      If there are no real roots, an empty list is returned.
  """
  // Calculate the discriminant
  const discriminant = b * b - 4 * a * c;

  // Check for real roots
  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    // One real root
    return [-b / (2 * a)];
  } else {
    // Two real roots
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  }
}

// Example usage
const roots = solveQuadEquation(1, 2, 1);
console.log(roots); // Output: [-1]

const roots2 = solveQuadEquation(1, 4, 4);
console.log(roots2); // Output: []

const roots3 = solveQuadEquation(1, -3, 2);
console.log(roots3); // Output: [1, 2]



//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printarray(arr){
    for (i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}

num=[1,2,3,4,5,6,7]
console.log(printarray(num))




//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime(){
    let now = new Date()
    let timenow= `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}  ${now.getHours()}:${now.getMinutes()} `
    return timenow
}

console.log(showDateTime())



//Declare a function name swapValues. This function swaps value of x to y.

function Swapvalues(x,y){
    let temp=x
    x=y
    y=temp
    console.log(x,y)
}

console.log(Swapvalues(5,10))


//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(arr){
    const reversedArr = [];
    for(i=arr.length-1;i>=0;i--){
        reversedArr.push(arr[i]);
    }
    return reversedArr
}

num=[1,2,3,4,5,6,7]

console.log(reverseArray(num))


//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr){
    capitalizedarray=[]
    for(i=0;i<arr.length;i++){
        capitalizedarray.push(arr[i].toUpperCase())
    }
    return capitalizedarray
}
arr=['swap','par','sr','kajal','diksha']
console.log(capitalizeArray(arr))



//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function additem(item){
    let itemarray=[]
    itemarray.push(item)

    return itemarray
}

console.log(additem('apple'))
console.log(additem('oranges'))


//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function removeItem(index,arr){
    if (index < 0 || index >= arr.length) {
    throw new Error("Index out of range");
  }
    const newArr = arr.slice();
    newArr.splice(index, 1);
    return newArr
}

arr=[1,2,3,4,5,6,7,8]

console.log(removeItem(4,arr))



//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(number){
    return number * (number + 1) / 2;
}

console.log(sumOfNumbers(10))



//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumofodds(number){
    let sumodds = 0;
    for(i=0;i<number;i++){
        if(i%2 != 0){
            sumodds +=i
        }
    }
    return sumodds
}
console.log(sumofodds(100))


//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function sumofeven(number){
    let sumodds = 0;
    for(i=0;i<number;i++){
        if(i%2 == 0){
            sumodds +=i
        }
    }
    return sumodds
}

console.log(sumofeven(100))



//Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evenodds(number){
    let evencount=0
    let oddcount=0
    for(i=0;i<number;i++){
        if(i%2 == 0){
            evencount +=1
        }
        else{
            oddcount +=1
        }
    }
    return {evencount,oddcount}
}
let result=evenodds(101)

console.log(result.evencount,result.oddcount)


//Write a function which takes any number of arguments and return the sum of the arguments

function sumall(...args){
    let sum = 0;
    for (const arg of args) {
        if (typeof arg !== 'number') {
            throw new TypeError('Arguments must all be numbers');
        }
        sum += arg;
  }
  return sum;
}

console.log(sumall(1,2,3,4,5))


//Writ a function which generates a randomUserIp.

function randomUserIp() {
  const octet1 = Math.floor(Math.random() * 10) + 10; // Range: 10.0.0.0 - 10.255.255.255
  const octet2 = Math.floor(Math.random() * 256);
  const octet3 = Math.floor(Math.random() * 256);
  const octet4 = Math.floor(Math.random() * 256);
  return `${octet1}.${octet2}.${octet3}.${octet4}`;
}

console.log(randomUserIp())



//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function generatehexnum(){
    const character='0123456789ABCDEF'
    let id=''
    for(i=0;i<6;i++){
        const randomindex=Math.floor(Math.random()*character.length)
        id+=character.charAt(randomindex)
    }
    return id
}

console.log(generatehexnum())



//Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

function useridgenerator(){
    const character='0123456789ABCDEF'
    let id=''
    for(i=0;i<7;i++){
        const randomindex=Math.floor(Math.random()*character.length)
        id+=character.charAt(randomindex)
    }
    return id
}

console.log(useridgenerator())


//Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.


function useridgenerator(chara,num){
    const character='0123456789ABCDEF'
    let id=''
    for(i=0;i<7;i++){
        const randomindex=Math.floor(Math.random()*character.length)
        id+=character.charAt(randomindex)
    }
    return id
}

console.log(useridgenerator())



//Write a function name rgbColorGenerator and it generates rgb colors.
function rgbcolorgenerator(){
    let rgb=[]
    for(i=0;i<3;i++){
        rgb.push(Math.floor(Math.random()*(255-1+1))+1)
    }
    return rgb
}


console.log(rgbcolorgenerator())



//Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayofhexacolors(num){
    let id=[]
    for(j=0;j<num;j++){
        let id1=''
        const character='0123456789ABCDEF'
        for(i=0;i<6;i++){
            const randomindex=Math.floor(Math.random()*character.length)
            id1+=character.charAt(randomindex)
    }
    id.push(`#${id1}`)
    }
    return id
}

console.log(arrayofhexacolors(4))




//Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function rgbcolorgenerator(num){
    let rgb1=[]
    for(j=0;j<num;j++){
        let rgb=[]
        for(i=0;i<3;i++){
            rgb.push(Math.floor(Math.random()*(255-1+1))+1)
    }
    rgb1.push(rgb)
    }
    
    return rgb1
}


console.log(rgbcolorgenerator(3))



//Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
hexcolor="#ff1005"


function converthexatorgb(hexcolor){
    let colorrgb=[]
    hexcolor=hexcolor.replace(/^#/,'')
    for (let i = 0; i < hexcolor.length; i += 2) {
        const colorPart = hexcolor.slice(i, i + 2)
        colorrgb.push(parseInt(colorPart,16))
}
return colorrgb
}

rgbcolorcode=converthexatorgb("#ff1005")
console.log(rgbcolorcode)

//Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

function convertrgbtohexa(rgbcolorcode){
    let hexcolor1=''
    for(i=0;i<rgbcolorcode.length;i++){
        hexcolor1 += rgbcolorcode[i].toString(16).padStart(2,'0')
    }
    return hexcolor1
}

console.log(convertrgbtohexa(rgbcolorcode))




//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(array) {
  const shuffledArray = [...array];
  let randomIndex;
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
  }
  return shuffledArray;
}

let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(shuffleArray(numbers));


//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(num){
    let facgtorialofnum=1
    for(i=1;i<=num;i++){
        facgtorialofnum *=i
    }
    return facgtorialofnum
}

console.log(factorial(5))



//Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isempty(par){
    if(par=== null || typeof(par)==='undefined'){
        return true
    }
    else if(typeof(par)==='string'){
        return par.trim()===''
    }
    else if(typeof(par)==='object'){
        return Object.keys(par).length === 0
    }
    else{
        throw new TypeError('unsupported data type')
    }
}

console.log(isempty("2"))



//Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.


function sumofarrayitems(arra){
    let sumall=0
    for(i=0;i<arra.length;i++){
        if(typeof(arra[i]) !== "number"){
            return "array is not number"
        }
        else{
            sumall += arra[i]
        }
    }
    return sumall
}
let number=[1,2,3,4,5,'a']
console.log(sumofarrayitems(number))



//Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback


function average(arra){
    let sumall=0
    for(i=0;i<arra.length;i++){
        if(typeof(arra[i]) !== "number"){
            return "array is not number"
        }
        else{
            sumall += arra[i]
        }
    }
    return sumall/arra.length
}
let number=[1,2,3,4,5]
console.log(average(number))



//Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

function modifyarray(arra){
    modifiedarra=[...arra]
    if (modifiedarra.length > 5){
        if (typeof modifiedarra[5] === 'string'){ 
            modifiedarra[5] = modifiedarra[5].toUpperCase();
        } 
        else {
            return "Element at index 5 is not a string";
        }
    }
    else{
        return "Array length less than 5: Item not found"
    }
    return modifiedarra
}

console.log(modifyarray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))

console.log(modifyarray(['Google', 'Facebook','Apple', 'Amazon']));



//Write a functions which checks if all items are unique in the array.

function checkunique(arra){
    const uniqueSet = new Set(arra);

    return uniqueSet.size === arra.length;
}
Number=[1,2,3,4,5,6,4]
console.log(checkunique(Number))


//Write a function which checks if all the items of the array are the same data type.

function checkdatatype(arra){
    if (!arra.length) return false
    const dataType = typeof arra[0]
    for(i=0;i<arra.length;i++){
        if (typeof arra[i] !== dataType) {
        return false;
        }
    }
    return true;
}

const numbers = [1, 2, 3, 4];
const mixedArray = [1, 2.5, "hello", true];

console.log(checkdatatype(numbers))

console.log(checkdatatype(mixedArray))
*/

//JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.


function isvalidvariablename(name){
    if (!name || typeof name !== "string") {
        return false; // Not a string or empty string
    }

  const firstCharRegex = /^[$_a-zA-Z]+$/; // Check if first character is valid
  const restRegex = /^[$_a-zA-Z0-9]+$/; // Check for subsequent characters

  return firstCharRegex.test(name[0]) && restRegex.test(name.slice(1));
}

console.log(isvalidvariablename("var-name"))