const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

const countries_data = require('D:/javascript/30_days_of_js/data/countries_data.js')
/*
//Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp]=constants
console.log(e,pi,gravity,humanBodyTemp,waterBoilingTemp)

//Destructure and assign the elements of countries array to fin, est, sw, den, nor

let[fin,est,sw,den,nor]=countries

console.log(fin,est,sw,den,nor)

//Destructure the rectangle object by its properties or keys.

let{width,height,area,perimeter}=rectangle
console.log(width,height,area,perimeter)

//Iterate through the users array and get all the keys of the object using destructuring

for(const{name,scores,skills,age} of users){
    console.log(name,scores,skills,age)
}

//Find the persons who have less than two skills

//for(const{name,scores,skills,age} of users){
    //if(users.skills.length<2){
        //console.log(users.name)
    //}
//}

const usersWithLessThanTwoSkills = users.filter(user => user.skills.length < 2);

console.log(usersWithLessThanTwoSkills);

//Destructure the countries object print name, capital, population and languages of all countries

for(const{name,capital,population,languages} of countries_data){
    console.log(name,capital,population,languages)
}
//A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

const [name, skills, [,, jsScore, reactScore]] = student;
console.log(name,skills,jsScore,reactScore)



const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]


function convertArrayToObject(arr) {
  return arr.map(([name, skills, scores]) => ({
    name,
    skills,
    scores: {
      HTM: scores[0],
      CSS: scores[1],
      JS: scores[2],
      React: scores[3]
    }
  }));
}

const result=convertArrayToObject(students)

console.log(result)
*/


//Copy the student object to newStudent without mutating the original object. In the new object add the following ?
//Add Bootstrap with level 8 to the front end skill sets
//Add Express with level 9 to the back end skill sets
//Add SQL with level 8 to the data base skill sets
//Add SQL without level to the data science skill sets

const student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

let copiedstudent={...student}


copiedstudent.skills.frontEnd.unshift({ skill: 'Bootstrap', level: 8 });
copiedstudent.skills.backEnd.push({ skill: 'Express', level: 9 });
copiedstudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
copiedstudent.skills.dataScience.push('SQL');
console.log(copiedstudent)
