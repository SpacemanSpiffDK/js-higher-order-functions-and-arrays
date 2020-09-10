// JS by Dan Høegh
// UCN MMD 2020


const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// normal arrowfunction without parameters
const myArrowFunction = () => {
    console.log('do stuff');
}

// normal arrowfunction with one parameter
const myVariable = 1;
const myArrowFunctionWithParameter = myVariable => {
    console.log(myVariable);
}

// normal arrowfunction with more than one parameter
const myArrowFunctionWithParameters = (Myvariable, companies) => {
    console.log(myVariable, companies);
}

// forEach
// forEach
// forEach

// .forEach(iterator, index, array)
companies.forEach((company, index) => {
    console.log(index, company)
});

// filter
// filter
// filter

// long version
const retailCompaniesLong = companies.filter(company => {
    if (company.category == "Retail"){
        return true;
    }
});
console.log(retailCompaniesLong);

// shorthand version
const retailCompaniesShortHand = companies.filter(company => company.category == "Retail");
console.log(retailCompaniesShortHand);


// Get companies that were started in the 80ies

const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990)
console.log(eightiesCompanies);

const lastedTenYears = companies.filter(company => company.end - company.start >= 10);
console.log(lastedTenYears);

// map
// map
// map

// Create array of company names with year of establishment

const companyNames = companies.map((company, index) => `${company.name} [Est. ${company.start}]`);
console.log(companyNames);

const ageSquare = ages.map(age => age);
console.log(ageSquare);

const ageTimesTwo = ages.map(age => age * 2);
console.log(ageTimesTwo);

// sort
// sort
// sort

// sort by start-date
// return 1 og -1 to move company up or down in the set

// const sortedCompanies = companies.sort((a, b) => {
//     if (a.start > b.start){
//         return 1;
//     } else {
//         return -1;
//     }
// });

// shorthand version of the above

const sortedCompanies = companies.sort((a, b) => (a.start > b.start) ? 1 : -1);
console.log(sortedCompanies);

// sort ages
// const sortAges = ages.sort(); // returns alphanumerical sort
const sortAges = ages.sort((a, b) => a - b); // returns numerical sort - 
console.log('ages', ages); // ages array has been rewritten by the sort above!
console.log('sortAges', sortAges);
const sortAgesReversed = ages.sort((a, b) => b - a); // returns numerical sort
console.log('sortAgesReversed', sortAgesReversed);

// reduce (creates a total based on the rules you set up)
// reduce
// reduce

// let ageSum = 0;
// ages.forEach(age => {
//     ageSum += age;
// });

// the 0 parameter lets it return a number, otherwise it will be an object
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log('ageSum', ageSum);

// total years of companies
const totalYears = companies.reduce((total, company) => {
    return total + (company.end - company.start);
}, 0);
console.log('totalYears', totalYears);


// combine methods
// combine methods
// combine methods
const newAges = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const combined = newAges
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log('combined', combined);
