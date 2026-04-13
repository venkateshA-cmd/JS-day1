const user  = {
    name: "Venkatesh",
    age:21,
    city:"Bangalore"
}

user.age = 23;
user.country = "India";
console.log(user.name);
console.log(user.age);
console.log(user.city);
console.log(user.country);

const Student = {
    name:"venkatesh",
    age : 21,
    marks:85
}

console.log(Student);

if(Student.marks>=50){
    console.log("pass");
}else{
    console.log("Fail");
}

const Students = [
    {name:"A",marks:40},
    {name:"B",marks:80},
    {name:"C",marks:70}
]

for(let i=0;i<Students.length;i++){
    console.log(Students[i].name,Students[i].marks);
}

for(let i=0;i<Students.length;i++){
    if(Students[i].marks>=50){
        console.log("pass:",Students[i].name);
    }
}

const users = [
    {name:"john",age:25,isActive:true},
    {name:"Jane",age:17,isActive:false},
    {name:"Mike",age:30,isActive:true}
]

for(let i=0;i<users.length;i++){
    if(users[i].isActive===true && users[i].age>18){
        console.log(users[i].name)
    }
}

users.push({ name: "Alex", age: 22, isActive: true });

let activeCount = 0;
let oldest = users[0];

for (let i = 0; i < users.length; i++) {
  if (users[i].isActive) {
    activeCount++;
  }

  if (users[i].age > oldest.age) {
    oldest = users[i];
  }
}

console.log("Active users:", activeCount);
console.log("Oldest:", oldest.name);