/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [30, 26, 45];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe)

// Destructuring objects

let jobs = {
    jessica: 'desginer',
    jill: 'developer',
    alicia: 'accountant',
}
let {jessica, jill, alicia,} = jobs;
console.log(jessica, jill, alicia)

// Destructuring subsets

let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    first: 'english',
    second: 'spanish',
    third: 'german',
    fourth: 'japanese',
}
let {first, third} = languages2
console.log(first, third)
// Using rest parameter syntax

let fruits = ['apple', 'orange', 'peach','cherry', 'banana'];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);

let favouriteFoods = {
    brian: 'pizza',
    hannah: 'burgers',
    mary: 'pasta',
    george: 'steak',
}
let {brian, hannah, ...rest} = favouriteFoods;
console.log(brian);
console.log(hannah);
console.log(rest);
