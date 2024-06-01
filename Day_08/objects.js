/*
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



//Find the person who has many skills in the users object.

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}


function findMostSkilledPerson(users) {
  let mostSkilledName = "";
  let mostSkills = 0;

  for (const name in users) {
    const user = users[name];
    const skillCount = user.skills.length;

    if (skillCount > mostSkills) {
      mostSkilledName = name;
      mostSkills = skillCount;
    }
  }

  return mostSkilledName ? `${mostSkilledName} has the most skills with ${mostSkills}` : "No users found";
}

console.log(findMostSkilledPerson(users)); // Output: Asab has the most skills with 8

//Count logged in users, count users having greater than equal to 50 points from the following object.

function countloggedinuser(users){
    let loggedin=0
    let userhavemorethan50points=0

    for(const user in users){
        if(users[user].isLoggedIn == true){
            loggedin +=1
        }
        if(users[user].points >= 50){
            userhavemorethan50points +=1
        }
    }
    return {loggedin,userhavemorethan50points}
}

output= (countloggedinuser(users))

console.log(output.loggedin, output.userhavemorethan50points)

//Find people who are MERN stack developer from the users object

function peoplewithmern(users){
    peoplemern=[]
    for(const user in users){
        if(users[user].skills.includes('MongoDB', 'Express', 'React', 'Node')){
            peoplemern.push(user)
        }
    }
    return peoplemern
}

console.log(peoplewithmern(users))



//Set your name in the users object without modifying the original users object

let copyuser = Object.assign({}, users)

copyuser.swapnil='swapnil'

console.log(copyuser)

//Get all keys or properties of users object

let keys=Object.keys(users)

console.log(keys)

//Get all the values of users object

let values=Object.values(users)

console.log(values)

//Use the countries object to print a country name, capital, populations and languages.



const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


//a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(username, email, password, users) {
   // Check if username already exists
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        return "This username already exists. Please choose a different one.";
    }

  // Generate a unique ID (replace with real ID generation if needed)
  const newId = Math.random().toString(36).substring(2, 15); // Random alphanumeric ID

  // Create a new user object
  const newUser = {
    _id: newId,
    username,
    email,
    password,
    createdAt: new Date().toLocaleString(), // Current date and time
    isLoggedIn: false
  };

  // Add the new user to the users collection
  users.push(newUser);

  return `User registration successful! Your username is ${username}.`;
}


const newUser = signUp("Daniel", "daniel@example.com", "secret123", users);

console.log(users)
*/

//b. Create a function called signIn which allows user to sign in to the application

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]



/*
function signIn(email,password,users){
    const email1 = users.find(user => user.email === email)
    const pass=users.find(user => user.password === password)
    
    if (!email1){
        return "Invalid username or password.";
    }
    if (email1.password !== password) {
        return "Invalid username or password.";
    }
    email1.isLoggedIn = true

    return `Welcome back, ${email1.username}! You are now signed in.`;
}

const signInMessage = signIn("asab@asab.com", "123456",users);
console.log(signInMessage);


//a. Create a function called rateProduct which rates the product

function rateproduct(id, userid,rate,users,products){
    const productorate=products.find(pr1 => pr1._id === id)

    if(!productorate){
        return "invalid product to rate"
    }

    if(productorate){
        productorate.ratings.push([userid,rate])
    }
    return "rating added succesfully"
}

console.log(rateproduct('aegfal','ghderc',10,users,products))

console.log(products)
*/
//Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(id, userId, users, products) {
  const productToLike = products.find(pr1 => pr1._id === id);
  if (!productToLike) {
    return "Invalid product id to like";
  }
  if (productToLike) {
    const index = productToLike.likes.indexOf(userId);
    if (index!== -1) {
      productToLike.likes.splice(index, 1);
      return "Product disliked successfully";
    } else {
      productToLike.likes.push(userId);
      return "Product liked successfully";
    }
  }
  return "Product like/dislike activity successful";
}



console.log(likeProduct('eedfcf','ghderc',users,products));
console.log(products);


function likeProduct(productId, userId, users, products) {

  // Find the product index in the products array
  const productIndex = products.findIndex(product => product._id === productId);

  if (productIndex === -1) {
    // Product not found
    return "Product not found.";
  }

  // Get the product object
  const product = products[productIndex];

  // Find the user's likes list within the product (if it exists)
  const userLikes = product.likes || []; // Initialize empty array if likes don't exist

  // Update the user's like status
  if (userLikes.includes(userId)) {
    // Unlike the product (remove user ID from likes list)
    userLikes.splice(userLikes.indexOf(userId), 1);
  } else {
    // Like the product (add user ID to likes list)
    userLikes.push(userId);
  }

  // Update the product's likes list in the products collection
  product.likes = userLikes;

  return products;
}

// Example usage
const updatedProducts = likeProduct('eedfcf', 'fg12cy', users, products);
console.log(updatedProducts); // Products array with updated likes list
