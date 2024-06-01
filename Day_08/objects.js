//Create an empty object called dog

let dog={}

//Print the the dog object on the console

console.log(dog)

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog={
    name:"golu",
    legs:4,
    color:"black",
    age:8,
    bark:function(){
        return "Woof Woof"
    }
}

//Get name, legs, color, age and bark value from the dog object

console.log(dog.name,dog.legs,dog.color,dog.age,dog.bark())

//Set new properties the dog object: breed, getDogInfo

dog.breed='Husky'
dog.gedoginfo=function(){
    return dog.name,dog.breed,dog.bark,dog.color
}

console.log(dog)