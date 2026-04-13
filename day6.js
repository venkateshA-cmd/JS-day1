function greet(){
    console.log("Hello");
}

greet();

function greet(name){
    console.log("Hello"+ name);
}
greet("Venkatesh");

function add(a,b){
    return a +b;
}

const result = add(5,7);
console.log(result);

function checkeven(num){
    if(num%2===0){
        return "even";
    }else{
        return "odd";
    }
}

console.log(checkeven(8));


function getgrade(marks){
    if(marks>=90) return "A";
    else if(marks>=75) return "B";
    else if (marks>=50) return "C";
    else return "Fail";
}

console.log(getgrade(80));

const numbers = [10,15,20];

function check(num){
    return num % 2===0;

}

for(let i=0;i<numbers.length;i++){
    console.log(check(numbers[i]))
}

function canAcess(age,isLoggedIn){
    if(age>=18 && isLoggedIn){
        return "Acess granted"
    }
    else{
        return "Access denied"
    }
}

console.log(canAcess(14,true));