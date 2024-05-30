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

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
/*
//Iterate 0 to 10 using for loop, do the same using while and do while loop
for (i=1;i<10;i++){
    console.log(i)
}


let j=0
while(j<10){
    console.log(j)
    j++
}

let k=0
do{
    console.log(k)
    k++
}while(k<10)

//Iterate 10 to 0 using for loop, do the same using while and do while loop

for (i=10;i>0;i--){
    console.log(i)
}
console.log("--------------------------------------------------")
let k=10
while(k>0){
    console.log(k)
    k--
}
console.log("---------------------------------------")

let j=10
do{
    console.log(j)
    j--
}while(j>0)


//Iterate 0 to n using for loop

let n=10
for (i=0;i<n;i++){
    console.log(i)
}


//Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######

for(i=0;i<7;i++){
    console.log('#'.repeat(i))
}


//Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100


for(i=0;i<=10;i++){
    console.log(`${i}x${i}=${i*i}`)
}


//Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000

console.log(`i\ti^2\t i^3`)
for(i=0;i<=10;i++){
    console.log(`${i}\t${i*i}\t${i*i*i}`)
}


//Use for loop to iterate from 0 to 100 and print only even numbers

for(i=0;i<100;i++){
    if(i%2==0){
        console.log(i)
    }
}


//Use for loop to iterate from 0 to 100 and print only odd numbers

for(i=0;i<100;i++){
    if(i%2!=0){
        console.log(i)
    }
}

//Use for loop to iterate from 0 to 100 and print only prime numbers

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j * j <= i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}


//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum=0
for (i=0;i<100;i++){
    sum+=i
}
console.log(sum)


//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sum_even=0
let sum_odd=0
for(i=0;i<=100;i++){
    if(i%2==0){
        sum_even+=i
    }
    else{
        sum_odd+=i
    }
}
console.log(sum_even)
console.log(sum_odd)


//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
sum=[]
let sum_even=0
let sum_odd=0
for(i=0;i<=100;i++){
    if(i%2==0){
        sum_even+=i
    }
    else{
        sum_odd+=i
    }
}
sum.push(sum_even,sum_odd)
console.log(sum)


//Develop a small script which generate array of 5 random numbers
random_array=[]
for(i=0;i<=5;i++){
    random_array.push(Math.floor(Math.random()*(100-1+1)+1))
}
console.log(random_array)

//Develop a small script which generate array of 5 random numbers and the numbers must be unique

unique_numbers=new Set()
for(i=0;i<=5;i++){
    unique_numbers.add(Math.floor(Math.random()*(100-1+1)+1))
}
console.log(unique_numbers)
*/


//Develop a small script which generate a six characters random id:

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let id = ""
 for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    id += characters.charAt(randomIndex);
  }
console.log(id)
