// alert("Hello, yoyoyoyyoyooyoyoyoy")
console.log("Hello there")

for (let i = 2; i <= 10 ; i++)
{

    console.log(2 ** i)

} 

let i = 1;

while (i <= 10) {
    
    console.log(Math.pow(2,i))
    i++;
}

let input = "";
do {
    input = prompt("What is your name");
    
    

  } while (!isNaN(Number(input)));
  
  console.log(input);

  alert("Welcome" + input);
  alert(`Welcome ${input}`);