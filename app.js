const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/*
forEach()
filter()
map()
reduce()
sort()

*/

//forEach is similar to for lpop

// start with for loop solution to get companies

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]); // at each iteratoin we add one and print the result
}


// forEach is a synchronous callback function
 console.log(`----- forEach------`);
companies.forEach(function (companies) {
  console.log(companies);
  console.log(companies.name);
});

//**************************************************

//  ************ filter : is to filter things out of the array under condition

//using for loop
// make an empty array
let item = [];

for (let i = 0; i < ages.length; i++) {
  // condition if
  if (ages[i] >= 21) {
    item.push(ages[i]);
    // we are pusing the result into item array at ages poistion of i
  }
}

// outside the loop we print the item
console.log(item);

// using filter method --- para is a parameter name
console.log(`using filter method -------`);
//----
const item1 = ages.filter(function (para) {
  if (para >= 21) {
    return true;
  }
});

console.log(item1);

// using arrow function instead for previous emxample
console.log(`--- arrow function ----`);
const item3 = ages.filter((parameterName) => parameterName >= 21);
console.log(item3);
//--------------------------------------------------------------------------
// going to back to companies array and extract RETAIL info only using filter

const retail = companies.filter(function (paraName) {
  if (paraName.category === "Retail") {
    return true;
  }
});
console.log(retail);

// using arrow function
console.log(`---- using Arrow function ----`);
const retailArr = companies.filter(
  (paramName) => paramName.category === "Retail"
);

console.log(retailArr);
//----------------------------------------------------------------------
// lets try and get the 80s companies
console.log(`getting the 80s`);
const eightiesCompanies = companies.filter(function (paraNames) {
  if (paraNames.start >= 1980 && paraNames.start < 1990) {
    return true;
  }
});

console.log(eightiesCompanies);
//------------------------------------------------------------------------
// Get companies that lasted at least 10 years
console.log(`companies lasted 10 years`);
const tenYearsCompanies = companies.filter(function (ten) {
  if (ten.end - ten.start >= 10) {
    return true;
  }
});

console.log(tenYearsCompanies);

// using arrow funcrion for the previous example
console.log(`using arrow function 10 years companies`);
const tenYearArrow = companies.filter(
  (tenPara) => tenPara.end - tenPara.start >= 10
);
console.log(tenYearArrow);

//---------------------------------------------------------------------------

// ****************** Maps **********************
// it creates new array from the current array
//****************************************************************************** */

// Create an array of companies names

const companyNames = companies.map(function (itemsPara) {
  return itemsPara.name;
});

console.log(companyNames);
//-------------------------------------------------------------
//Get the company name and start to end years

const testMap = companies.map(function (test) {
  return `${test.name} with [${test.start} - ${test.end}]`;
});
console.log(testMap);

//-------------------------------------------------------------

// Get the square root of ages numbers using Map

const ageSquare = ages.map(function (squareAge) {
  return Math.floor(Math.sqrt(squareAge)); // square the numbers and floor
  //it to the near number
});
console.log(ageSquare);

//----------------------------------------------------------------

// The Sort() method

// Sorting the company by the start year from the earliest to the latest
const sortCompanies = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortCompanies);

// using Arrow functoin for previous example

const sortcompanyArrow = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortcompanyArrow);

//-------------------------------------------------------------

// Sorting ages from lowest to highest

const adcAges = ages.sort(function (a, b) {
  return a - b; // from loswest to highest number
  // return b - a; // from highest to the lowest
});
console.log(adcAges);
//----------------------------------------------------------------

//  ***********  using reduce() *************

// Sum of all numbers in ages using for loop

let sumAges = 0;

for (let i = 0; i < ages.length; i++) {
  sumAges = sumAges + ages[i];
}
console.log(sumAges);

// using redcue() to get the sum of all numbers for prev example
const sumAgesReduce = ages.reduce(function (testPara, total) {
  return total + testPara;
}, 0);

console.log(sumAgesReduce);

// Using Arrow function

const sumAgesReduceArrowFunction = ages.reduce(
  (test1, total) => total + test1,
  0
);
console.log(sumAgesReduceArrowFunction);

// Getting the total years of companies array

const sumCompanyYears = companies.reduce(
  (total, years) => total + (years.end - years.start),
  0
);
console.log(sumCompanyYears);

//----------------------------------------------------------------

// Using all methods at once

const agesCombo = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// let multiply all numbers with 2 using Map()
// Then filter any number less than 40 using filter()
//then sort them using sort() from high to low
//then use reduce() to add them all together

const combo = agesCombo
  .map((testCombo) => testCombo * 2)
  .filter((testCombo) => testCombo >= 40)
  .sort((testCombo, c) => c - testCombo)
  .reduce((total, testCombo) => total + testCombo, 0);

console.log(combo);
