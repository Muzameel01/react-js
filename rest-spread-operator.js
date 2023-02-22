const number=[2,5,6,7];
const [a,b,c,d]=number;
console.log(c);

// rest operatror and spread operator---(...)
const [first, ...restnumber]=number;
console.log("first",first);
console.log("rsetnumber",restnumber);
const obj1={
    temp1:"34",
    temp2:"564",
    fname:"azhar",
    lname:"academy",
};

const {temp1, temp2, ...person}=obj1;
console.log(temp1,temp2);
console.log(person);

const obj2={...obj1};

obj2.colour="fair";

console.log(obj1,obj2);

const newarray=[...number];
newarray.push(8);
console.log(newarray);