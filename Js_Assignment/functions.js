function myFunction(){
    console.log("Hello MK!!!");
    
}
myFunction();
myFunction();


// if i wanted to print sum of 2 numbers

function sum(a,b){
    console.log(`sum of a,b: ${a+b}`);
}
sum(10,10);

// if you wanted to return it

function sum1(a,b){
    return a+b;
}

let summ = sum1(10,10);
console.log(`sum of a and b: ${summ}`);  // console.log(`${sum1(10,10)}`)


// to write with arrow functions.,


// 1. to find sum

let summm = (a,b) => {                 // there will be no function name and parameters and body was seperated by the arrow
                        return a+b;                     
                    }
                    
console.log(`sum: ${summm(10,20)}`);


//2. to print some users name

let userName = (nameOfUser) => {
    return nameOfUser;
}
let name1 = userName("Murali");
console.log(`Hello ${name1}`);


//3. finding number is even or odd.,

// function evenOdd (x){
//     if(x%2 == 0){
//         console.log(`${x} is even `);
//     }else{
//         console.log(`${x} is odd `);
//     }
// }
// evenOdd(10);


// using arrow funcion
 let evenOdd = (x) =>{
    if(x%2 == 0){
        console.log(`${x} is even `);
    }else{
        console.log(`${x} is odd `);
    }
}
evenOdd(10);


// counting number of vowels


// function countVowels(str){
//     let lowerString = str.toLowerCase();
//     count = 0;

//     for(const char of lowerString){
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(`Total Number of vowells: ${countVowels("Murali")}`);


//arrow

let countVowels = (str) =>{
    let lowerString = str.toLowerCase();
    count = 0;

    for(const char of lowerString){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    return count;
}

console.log(`Total Number of vowels: ${countVowels("Murali")}`);



// using for-each loop to print squares of a number in an array.

// let nums= [1,2,3,4,5];
// nums.forEach( 
//     (numb) => {
//         console.log(numb*numb);                          <------------------------------
//     }                                                                                 //-
// );                                                                                    //-
                                                                                         //-    SAME
                                                                                         //-
// let squareRoot = () =>{                                                               //-
//     let nums = [1,2,3,4,5];                                                           //-
//     for (let num of nums){                              <--------------------------------
//         console.log(num*num);
//     }
// }
// squareRoot();




// call back functions  --> passing function as an argument to the another function.

let mult = (x,y) =>{
    return x*y;
}

function mix(someNum, mult){
    return (someNum * mult);
}
console.log(mult(2,2));
console.log(mix(2,mult(2,2)));



console.log("--------------------------------------");





// map function        ---> originial array wont chanage 

let catArray = [1,2,3,4];
let catArray1 = catArray.map( (val)=> {
    return val*val;
}
)
console.log(catArray);
console.log(catArray1);


console.log("--------------------------------------------");



// reduce function          ----> withour changing original array redusing the array contents to single value by some conditions.


let catArray11 = [1,2,3,4];

let catArray111 = catArray11.reduce( (prev, curr)=> {
    return prev < curr ? prev : curr;
}
)
console.log(catArray11);
console.log(catArray111);

