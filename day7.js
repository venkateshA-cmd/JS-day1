const add = (a,b)=>a +b ;

console.log(add(5,7));

const square = x => x*x;
console.log(square(4));

const greet = () => "Hell0";
console.log(greet());

const multiply = (a,b) => a*b;
console.log(multiply(5,7))

const checkeven = num => num%2 === 0;
console.log(checkeven(5));

const numbers = [1,2,3,4];
numbers.forEach(num=>{
    console.log(num);
});

const Numbers = [10,15,20,25];

const evenumbers = Numbers.filter(num=>num%2===0);

console.log(evenumbers)

const nums = [1,2,3];

const doubled = nums.map(num=>num*2);

console.log(doubled)

const Students = [
    {name:"A",marks:80},
    {name:"B",marks:40},
    {name:"C",marks:70}
]

const passed = Students.filter(s => s.marks>=50).map(s=>s.name);

console.log(passed);