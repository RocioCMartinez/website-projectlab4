'use strict';

console. log("You made it to my console!");


const userName = prompt("What should we call you?");
console. log (userName);

function getName(){
    const userName= prompt('What is your name');
    return userName;
}

function userMessage(userName){
    if (userName == ''){
        userName = prompt('Try again');
    }if (userName == 'rocio'){
        alert('My master!');
    } else if ( userName == 'kassie'){
        alert('Uh-oh');
    } else {
        document. write ('stranger');
    }
}


document. write ('Hi ' + userName + ', lets be friends!');

if (userName == 'rocio'){
    alert('My master!');
} else if ( userName == 'kassie'){
    alert('Uh-oh');
} else {
    alert('Welcome');
}


confirm ('Ready to look at potatoes?');

if (confirm= true){
    document. write('Lets do this!');
} else {
    document. write('I love potatoes')
}

function getName(){
    const userName= prompt('What is your name');
    return userName;
}