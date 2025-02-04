//If-else Condition
let number = 6;


number = Number(number);

if (number > 0) {
    console.log("This number is positive."); // Output for positive numbers
} else if (number < 0) {
    console.log("This number is negative."); // Output for negative numbers
} else {
    console.log("This number is equal to zero."); // Output for zero
}

//Switch Statement
let day = 3

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Please read the instructions");
}

//Loops (For, While, Do...While)

//For Loop
for (let i = 1; i <= 5; i++) {
    console.log(i);}

//While Loop
let i = 1;

while (i <= 5) { 
    console.log(i);
    i++;}

//Do...While
let j = 1; 

do {
    console.log(j);
    j++; } 
    while (j <= 5);



//Control Flow with break and continue

//Break
for (let i = 2; i <= 7; i++) {
    if (i === 3) {
        break; 
    }
    console.log(i);
}

//Continue
for (let i = 2; i <= 7; i++) {
    if (i === 3) {
        continue; 
    }
    console.log(i);
}

//Scope and Context
let globalVar = "I'm global, you can access me anywhere!"; 

function scopeExample() {
    let localVar = "I'm local, you can only access me in this function"; 

    console.log(globalVar); 
    console.log(localVar); 
}

