// Expression
var b = 2;
var a = b * 2;
console.log(b);

// Coercion
var a = "42";
var b = Number(a);
console.log(b);

// Loops
for(var i = 0; i <= 9; i++){
    console.log(i);
}

// Functions
function printAmount(amt){
    console.log(amt.toFixed(2));
}

printAmount(129.987);

// Scope
function one(){
    var a = 1;
    console.log(a);
}

function two(){
    var a = 2;
    console.log(a);
}

one();
two();

// Practice
const TAX_RATE = 0.45;
const PHONE_PRICE = 99.9;
const ACCESSORY_PRICE = 9.99;
const ACCOUNT_BALANCE = 308.50;
const SPENDING_THRESHOLD = 200;

var amount = 0;

function calculateTax(amount){
    return amount * TAX_RATE;
}

function formatAmount(amount){
    return "$" + amount.toFixed(2);
}

while(amount < ACCOUNT_BALANCE){
    amount = amount + PHONE_PRICE;

    if(amount < SPENDING_THRESHOLD){
        amount = amount + ACCESSORY_PRICE;
    }
}

amount = amount + calculateTax(amount);

console.log("Your purchase: " + formatAmount(amount));

if(amount > ACCOUNT_BALANCE){
    console.log("Sorry, you can't afford this purchase :(");
}