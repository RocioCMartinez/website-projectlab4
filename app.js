'use strict';

console.log("You made it to my console!");


// const userName = prompt("What should we call you?");
// console. log (userName);


function getName() {
    const userName = prompt('What is your name?');
    console.log(userName);
    return userName;
}

let theirName = getName();


function userMessage() {
    while (theirName == '') {
        theirName = prompt('Try again');
    }

    if (theirName == 'rocio') {
        alert('My master!');
    } else if (theirName == 'kassie') {
        alert('Uh-oh');
    } else {
        console.log(' stranger');
    }
}

userMessage();


document.write('Hi ' + theirName + ', lets be friends!');

// if (userName == 'rocio'){
//     alert('My master!');
// } else if ( userName == 'kassie'){
//     alert('Uh-oh');
// } else {
//     alert('Welcome');
// }


//   
// function likePotato(){
//     confirm ('Ready to look at potatoes?');}
//     let y= 1;
//     let x= 0;
//     let theirAnswer= (y, x);
//        if (theirAnswer= 1){
//          document. write ('Lets do this!');
//         } 
//        else if (0);{
//          document. write ('Only potato lovers allowed!');
//     }


function likePotato(){
    let x = confirm('Ready to look at potatoes?');
    console.log(x);
    if (x == true) {
        document.write('Lets do this!');
    } else {
        document.write('Only potato lovers allowed!');
    }
}




function howHungry(){
    let response = prompt('How hungry are you 1-5?');

    console.log(response);

    for (let i = 0; i< response; i++){
        document.write("<img class='loop-img' src='frenchfries.jpg' alt='potato doggy' />");
    }
}