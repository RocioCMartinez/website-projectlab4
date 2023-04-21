'use strict';

console. log("You made it to my console!");


const userName = prompt("What should we call you?");
console. log (userName);

function getName(){
    const userName= prompt('What is your name?');
    return userName;
}

getName();

function userMessage(userName){
    if (userName == ''){
        userName = prompt('Try again');
    }if (userName == 'rocio'){
        alert('My master!');
    } else if ( userName == 'kassie'){
        alert('Uh-oh');
    } else {
        console. log (' stranger');
    }
}

userMessage();


document. write ('Hi ' + userName + ', lets be friends!');

// if (userName == 'rocio'){
//     alert('My master!');
// } else if ( userName == 'kassie'){
//     alert('Uh-oh');
// } else {
//     alert('Welcome');
// }


   function likePotato(){
     confirm ('Ready to look at potatoes?');}
     let y= 1;
     let x= 0;
     let theirAnswer= (y, x);
        if (theirAnswer= 1){
          document. write ('Lets do this!');
         } 
        else if (0);{
          document. write ('Only potato lovers allowed!');
        }
 
 likePotato();
