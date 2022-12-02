// console.log('Hello World');
//ES5
var a  = 10;
console.log(a);
//ES6
const b  = 5;
let c = 4;
// console.log(c);

// b = 10;
// console.log(b++);
c = 100;
// console.log(c++);

// const number = 10;
// console.log(typeof number);
// const str = 'hello';
// console.log(typeof str);
// const boolTrue = true;
// console.log(boolTrue);
// const boolFalse = false;
// console.log(typeof boolFalse);

// const obj = {name: 'Alex'}
// console.log(typeof obj);

// const array = [1,2 ,3, {name: 'alex'}];
// console.log(array);

// wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
//oblect
const obj = {
    name: 'Alex',
    age: 18
}
console.log(obj.name, obj.age);

const user = {
    login: 'alex',
    password: '123',
    username: 'alex_01',
    followers: [
        {
            username: 'Irina',
            age: 22,
        },
        {
            username: 'oleg',
            age: 32,
        }
    ],
    followers: [
        {
            
                username: 'Irina',
                age: 22,
        },
        {
                username: 'oleg',
                age: 32,
            
        }
    ],
    avatar: 'image'
}
// console.log(user);
// console.log('username:' + user.username);
// console.log;('followers:' + user.followers.length);
// console.log('follows:' + user.follows.length);

//macuv
const mass = [1,2,3,4,5]
console.log(mass[4]);

const arr = [{username: 'alex'}, [1,2,3,4,5], 'string'];
console.log(arr[1]);

const num1 = 15;
const num2 = 10;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// console.log(2*(num1 + num2) 

// let message = 'hello, '+' dear '+ 'Alex'
// console.log(message);
// let message1 = `hello, dear ${'alex'}`
// console.log(message1);

// wwwwwwwwwwwwwwwwwwwwwwwwwww

// let size = 'm';
// let euSize = 0;

// if(size === '5'){
//     euSize = 36;
// }else if (size === 'M'){
//     euSize = 40;
// }else if (size === 'L'){
//     euSize = 48;
// }else{
//     euSize = -1
// }
// console.log('eu size', euSize);

let size = 'S'

switch (size){
        case 'S':
        console.log('Small');
        break;
        case 'M':
        console.log('Medium');
        break;
        case 'L':
        console.log('Large');
        break;
    default:
        console.log('unknown size');
}