let age= 26;
const name = "vamsi";
const friends = ["surya", "naveen", "prasad","hemanth"];

function greet (name, age){
  return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet(name, age)); 

console.log("friends:", friends); 
friends.push("madhu");
console.log(friends)
