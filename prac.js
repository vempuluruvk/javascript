// function findmax(arr){
//     let max=arr[0]
//     for(i=0;i<arr.length;i++){
//       if (arr[i]>max){
//         max=arr[i]
//       }
//       }
//       return max
// }
// console.log(findmax([2,56,66,75,3]))

// function findmin(arr){
//     let min=arr[0]
//     for(i=0;i<arr.length;i++){
//         if (arr[i]<min){
//             min=arr[i]
//         }
//     }
//     return min
// }
// console.log(findmin([2,45,24,6,1,]))


// timeout dfunction
// var array=[1,2,3,4,5]
// for (var i = 0 ; i < array.length; i++){
// setTimeout(() => {
//     console.log(array[i])
//     }, 1000);
// }

// arrays
// let myarray=[23,55,65,34,65]
// console.log(myarray.length)
// console.log(myarray.indexOf(55))
// console.log(myarray.push("28"))


// reduce method
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((a,b) => a, 0);

// console.log(sum); 
// const num =[2,4,56,64]
// let sum =num.reduce((a,b)=>a+b,0)
// console.log(sum);

// Dates

// const d = new Date("October 13, 2014 11:13:00");
// console.log(newdate);
// const d = new Date("2021-03-25");
// d.getFullYear();

// const people = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 }
//   ];
  
//   people.sort((a, b) => a.age - b.age);
  
//   console.log(people);


//   const items = [10, -1, 5, 0, -7, 3];

// items.sort((a, b) => {
//   // Sort negative values first, then positive values, and finally zeros.
//   if (a < 0 && b >= 0) return -1;
//   if (a >= 0 && b < 0) return 1;
//   return a - b; // Sort the rest in ascending order.
// });

// console.log(items); // Output: [-7, -1, 0, 3, 5, 10]

//  console.log(Math.abs(-64));
 

 // constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23,

//      this.greet = function () {
//         console.log('hello');
//     }
// }

// // create objects
// const person1 = new Person("vamsi","22");
// const person2 = new Person("sai","19");

// // access properties
// console.log(person1.name);  // John
// console.log(person2.name);  // John

// let leters =new set([23,54,43,4,8])
// let text ="";
// leters.forEach(function(value) {
//     text+=value
    
// });

// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// const flatArray = nestedArray.flat();

// console.log(flatArray)

// function findmax(arr){
//     let max=arr[0]
//     for(i=0;i<arr.length;i++){
//       if (arr[i]>max){
//         max=arr[i]
//       }
//       }
//       return max
// }
// console.log(findmax([2,56,66,75,3]))

// function findmax(arr){
//     let max=arr[0]
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }return max
// }
// console.log(findmax([6,55,7,32,78]));

// a=[2,4,5,7,3]
// console.log(a.join(24));

// class atm{
//     constructor(withdraw){
//         this.balance=1000
//         this.withdraw=withdraw;
//     }
//     getamount(){
//         let minumum=400;
//         if((this.balance-this.withdraw)>=this.minumum){
//             console.log("withdraw succesfull")
//         }else{
//             console.log("withdraw failed")
//         }
//     }
// }
// let obj=new atm(1000)
// obj.getamount();
// function outer(){
//     let x=10;
//     function inner(){
//         setTimeout(function(){
//             console.log(x);
//             x++;
//         },100);
//         setTimeout(function(){
//             console.log(x);
//             x++;
//         },100)
//         setTimeout(function(){
//             console.log(x);
//             x++;
//         },100)
//     }
//     return inner;
// }
// const closureFunction=outer();
// closureFunction();


let names = ["madhu","krishna","kumar"]
let surname = ["gangireddy"]
let fullname=[]

for(i=0;i<names.length;i++){
    fullname.push(`${names[i]} ${surname}`)
}
console.log(fullname);