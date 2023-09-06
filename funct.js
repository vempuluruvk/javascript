// function Car(car_name, car_color, car_capacity,hi) {
//     this.name =  car_name;
//     this.color =  car_color;
//     this.capacity = car_capacity;
//     this.hi = hi
//     this.greet = function () {
//     return this.hi+ this.name;

    
//     }

// }
// const car1 = new Car('benz', 'black', '1400cc',"hi");
// const car2 = new Car('thar', 'red', '1100cc',"hello");


// console.log(car1.name);
// console.log(car2.name);
// console.log(car1.greet());
// console.log(car2.greet());

x = []
function add(a){

if (x.indexOf(a) != -1){
    console.log("item already existed",a)
}else{
    console.log(a)
    x.push(a)

}
}

add(20)
add(30)
add(10)
add(40)