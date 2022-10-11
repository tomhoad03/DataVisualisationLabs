console.log("Hello world!"); //This makes the script output to the console
//Anything that comes after two slashes (like this!) is a "comment", and is ignored by the program

// strings
console.log("1" + "2" + "3");
console.log(1 + 2 + 3);

let my_age = 21; //You can change this to your real age, if you like

console.log("I am "+ my_age + " years old.")

let next_year = my_age + 1;

console.log("Next year I will be "+ next_year + " years old.")

if (my_age === 18){
    console.log("I am exactly old enough to vote in the UK.");
}
else if (my_age>18){
    console.log("I am old enough to vote in the UK.");
}
else{
    console.log("I am not quite old enough to vote yet.");
}

// arrays
let myArray = [1, 2, 3, 4, 5];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

// loops
for(let i = 0; i < myArray.length; i++){
    console.log("i: " + i);
    console.log("myArray["+i+"]: " + myArray[i]);
}

myArray.forEach(function(d){
    console.log(d);
});

let countdown = 10;
console.log("Initiate countdown!");
while(countdown >= 0){
    console.log(countdown + "..!");
    countdown = countdown -= 1; //Don't forget this line, or the loop will never stop!
}
console.log("Blastoff!");

// twelve times table
let twelveArray = [];
for(let i = 1; i <= 12; i++){
    let result = i * 12;
    console.log(i + " x 12 = " + result);
    twelveArray.push(result);
}

for(let i = 0; i < twelveArray.length; i++){
    console.log(twelveArray[i]);
}

//We're going to create three functions...
function RunThisSecond(){
    console.log("Second!");
}

function RunThisFirst(){
    console.log("Ready to go:");
    console.log("First!");
}

function RunThisThird(){
    console.log("Third!");
}

//...and now we'll call them.
RunThisFirst();
RunThisSecond();
RunThisThird();

// functions
function AddTwoNumbers(number1, number2){
    console.log("Adding "+number1+" and "+number2+".");
    return number1 + number2;
}

console.log(AddTwoNumbers(1, 2));

let my_number = AddTwoNumbers(239765, 2124444);
console.log(my_number);

console.log(AddTwoNumbers(my_number, 1));

function AddTwoNumbers(number1, number2){
    console.log("Adding "+number1+" and "+number2+".");
    return number1 + number2;
}

function AddFifty(number){
    return AddTwoNumbers(number, 50);
}

AddFifty(1);
AddFifty(2);
AddFifty(239765);

// print n times
function printNTimes(number, text) {
    for (let i = 0; i < number; i++){
        console.log(text);
    }
}

printNTimes(10, "Hello World!");

// objects
cat = {
    name: "Tiddles",
    age:2
};

console.log(cat);
console.log(cat.name);
console.log(cat.age);
cat.age = cat.age + 1; //It's Tiddles's birthday!
console.log(cat.age);

//Let's add a new property
cat.colour = "Tabby";
console.log(cat.colour);

// fruit shops
shop1 = {
    name: "The Fruit Emporium",
    opensAt: "07:00",
    closesAt: "16:00",
    apples: 150,
    bananas: 74,
    pears: 2
}

shop2 = {
    name: "23hr Fruit",
    opensAt: "00:00",
    closesAt: "23:00",
    apples: 300,
    bananas: 67,
    pears: 98
}

shop3 = {
    name: "Dave's Fruit Mart",
    opensAt: "07:30",
    closesAt: "17:30",
    apples: 3028,
    bananas: 0,
    pears: 3904
}

let fruit_shops = [shop1, shop2, shop3];

let appleCount = 0;
fruit_shops.forEach(function(fruit_shop){
    appleCount += fruit_shop.apples;
});
console.log(appleCount)

fruit_shops.forEach(function(fruit_shop){
    if (fruit_shop.bananas > 0) {
        console.log(fruit_shop.name);
    }
});

let pearCount = 0;
fruit_shops.forEach(function(fruit_shop){
    pearCount += fruit_shop.pears;
});
console.log(pearCount)

let totalCount = {
    apples: 0,
    bananas: 0,
    pears: 0
};
fruit_shops.forEach(function(fruit_shop){
    totalCount.apples += fruit_shop.apples;
    totalCount.bananas += fruit_shop.bananas;
    totalCount.pears += fruit_shop.pears;
});
console.log(totalCount)