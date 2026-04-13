const name = "Venkatesh";
const age = 21;
const city = "banglore";
const Profession = "Student";
const skills = "JavaScript";
const hobby = "coding";

console.log(`My Name is ${name}, I am ${age}, from ${city}, i am a ${Profession},my skill is ${skills},my hobby is ${hobby}`);

const a = 15;
const b = 5;

console.log("Add:",a+b);
console.log("sub:",a-b);
console.log("mul:",a*b);
console.log("Div:",a/b);


console.log("Adult:",age>=18);


if(age>=18){
    console.log("You Can Vote");
}
else{
    console.log("You Cannot Vote");
}

if(age>=18){
    console.log("Adult");
}
else{
    console.log("Minor");
}

const marks = 75;

if(marks>=90){
    console.log("A");
}
else if(marks>=75){
    console.log("B");
}else if(marks>=50){
    console.log("C");
}else{
    console.log("Fail");
}

const username = "admin";
const password = "1234";

if(username==="admin"&& password==="1234"){
    console.log("Login success")
}
else{
    console.log("Acess Denied");
}

for(let i=1;i<=10;i++){
    console.log(i);
}

for (let i=10;i>=1;i--){
    console.log(i);
}


for(let i=1;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }
}

let sum = 0;
for(let i=1;i<=5;i++){
    sum+=i;
}
console.log("Sum:",sum);

const num = 5;

for(let i=1;i<=10;i++){
    console.log(`${num} x ${i} = ${num*i}`);
}

for(let i=1;i<=20;i++){
    if(i%3===0){
        console.log("Divisible by 3:",i);
    }
}


for(let i=1;i<=10;i++){
    if(i%2!==0){
        console.log("Odd numbers:",i);
    }
}

for(let i=1;i<=50;i++){
    if(i%5===0){
        console.log(i)
    }
}

