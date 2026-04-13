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



