
//2//
var result=""
for(var i=1;i<11;i++){
    result += " " + i;
}
console.log(result.trim());


//3//
var i=1
while(i<10){
    if(i%2==0){
        console.log(i);
        i++;
    }
}


////4//
var i=0
do{
    console.log("Welcome!");
    i+=1;
}while(i<5)

    

//5//
for(var i=1;i<10;i++){
    if(i == 5) break;
    console.log(i);
}    



//6//
//continue helps in skipping particular code statement.
for(var i=1;i<10;i++){
    if(i==5) continue;
    console.log(i);
}


//7//
for(var i=1;i<11;i++){
    for(var j=1;j<11;j++){
        console.log("${i}*&{j}=i*j");
    }
}



//8//
let marklist=[1,2,3,4,5]
for(var i in marklist){
    console.log(i);
}


//9//
// == compares two variables without strictly checking for datatype.
// whereas === compares both variables by comparing its datatype too.
var i="10";
if(i==10){ 
    console.log("== is true");
}
if(i===10){
    console.log("=== returns false");
}



//10//
let x = 5;
console.log(x++ + ++x);
//returns 5+7=12

//11//
//&& returns true if both the conditions are true.
//|| returns true if any of the condition is true.


//12//
var n=prompt("enter your number");
if(n%3==0 && n%5==0){
    console.log("Number is divisible");
}

//13//
var num=prompt();
var result=num%2 === 0 ? "Even" : "Odd";
console.log(result);


//14//
//Modulus operator provides remainder for two operands.
for(var i=1;i<20;i++){
    if(i%4==0){
        console.log(i + "Divisible by 4.");
    }
}

//15//
var age=prompt();
if(age>=18){
    console.log("Eligible for voting");
}
else{
    console.log("Not eligible");
}


//16//
var marks=prompt();
if (marks>=90){
    console.log("A");
}
else if(marks<=89 && marks>=75){
     console.log("B");
}
else if(marks<=74 && marks>=50){
     console.log("C");
}
else{
     console.log("F");
}


//17//
/*
if block is used to check weither a condition is 
true or false.
If "else if" condition is true then comes out of the loop.
If "if" cond is false then the else part is executed.
*/

//18//
var num=6
if(num==0){
    console.log("Zero");
}
else if (num>0){
    console.log("positive"); 
}
else{
    console.log("Negative");
}


//19//
var num=12;
if(num%2==0){
    if(num>10){
        console.log("number is even and also greater than 10");
    }
}

//20//
let isLoggedIn=false
console.log(isLoggedIn?"Welcome back!":"Please log in.");
