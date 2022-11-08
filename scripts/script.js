// alert("Hello, yoyoyoyyoyooyoyoyoy")
// console.log("Hello there")

// for (let i = 2; i <= 10 ; i++)
// {

//     console.log(2 ** i)

// } 

// let i = 1;

// while (i <= 10) {
    
//     console.log(Math.pow(2,i))
//     i++;
// }

// let input = "";
// do {
//     input = prompt("What is your name");
    
    

//   } while (!isNaN(Number(input)));
  
//   console.log(input);

//   alert("Welcome" + input);
//   alert(`Welcome ${input}`);

let fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("Mango");
console.log(fruits);

fruits.shift();
console.log(fruits)

for(let item of fruits)
{

  console.log
}

const person ={
name:['Bob', 'Smith'],
age:32,
gender:'male',
interests: ['music', 'skiing']  }

console.log(`My name is ${person.name[0]} ${person.name[1]} i am interested in ${person.interests[0]} and ${person.interests[1]}`)


let student1 = {
  ID: "A00022",
  GPA: 3.0,
  program: "CIT"
};

let student2 = {
  ID: "A01000",
  GPA: 3.1,
  program: "CST"
};

let student3 = {
  ID: "A00114",
  GPA: 3.2,
  program: "CIT"
};
let students = [student1, student2, student3]; 
let counter = 0;
for(let stud of students){
  
  if(student1.program === "CIT" && stud.GPA > 3){

      counter++
  }

}

console.log(counter)

for(let i = 0; i <students.length; i++)
{

  if (students)[i].program
}