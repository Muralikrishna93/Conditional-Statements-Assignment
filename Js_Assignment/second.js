
// String
// let str = "Murali";

// for(let i=0; i< str.length; i++){
//     let temp = "";
//     for (let j = 0; j <= i; j++) {
//         temp += str[j];
//     }
//     console.log(temp);
// }





// right angled triangle
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }



// inverted right angled triangle
// let n = 5;

// for (let i = n; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }


//left angled triangle
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n - i; j++) {
//         row += " ";   
//     }
//     for (let k = 1; k <= i; k++) {
//         row += "*";   
//     }
//     console.log(row);
// }




// inverted left angled triangle
// let n = 5;

// for (let i = n; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= n - i; j++) {
//         row += " ";   
//     }
//     for (let k = 1; k <= i; k++) {
//         row += "*";   
//     }
//     console.log(row);
// }



// printing no of rows = no of columns

// let n = 5; 

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n; j++) {
//         row += "*";
//     }
//     console.log(row);
// }





let userPass = "qwertyuiop";
let attempts = 0;
let enteredPass = ["xyz123", "abc123", "12345abcde", "test123", "qwertyuiop"];

let i=0;
while ( i < enteredPass.length) {

    if (enteredPass[i] === userPass) {
        console.log("You entered correct password.");
        break;
    } 
    else {
        attempts++;
        console.log("Wrong password, try again.");

        if (attempts === 5) {
            console.log("Too many failed attempts. Card blocked.");
            break;
        }

    }
    i++;
}














