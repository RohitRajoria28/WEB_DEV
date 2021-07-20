// let obj = {
//     "firstName" : "bhavesh",
//     "lastName" : "bansal",
//     "name": (string) => {
//         return this.firstName + " " + this.lastName + " " + string;
//     }
// }

// // console.log(JSON.parse(JSON.stringify(obj)));

// console.log(obj.name());

// let fn = obj.name;

// console.log(fn());

// const object = {
//     message: 'Hello, World!',
//     logMessage: function () {
//         console.log(this);
//         // What is logged?
//     }
// };

// setTimeout(function outer() {
//         // console.log("hello");
//         object.logMessage();
//     }, 1000);

// it will point to the object as in arguments we replaced this with object
//     let boundFn = object.logMessage.bind(object)
// setTimeout(boundFn, 1000);


// this will represent to the element on which eventlistener is implemented
// document.querySelector("button").addEventListener("click", function(){
//     console.log(this);
// })

// this will not represent to settimeout, it will represnt to window instead of setTImeout 
// setTimeout( ()=> {
//     console.log(this);
// },1000)


// let obj = {
//     "name" : "bhavesh",
//     "hello" : {
//         "fn" : () => {
//             console.log(this);
//         }
//     }
// }

// method call so this represent to window
// obj.hello.fn()


// const object = {
//     message: 'Hello, World!',
//     logMessage: function () {
//         console.log(this);
//         // What is logged?
//     }
// };
// let fn = object.logMessage;

// function call and this will represent to the nodewindow 
// fn();

// let fn = object.logMessage;
// function call and this will represent to setTimeOut
// setTimeout(fn, 1000);


// function call so this will reprent to the the element with the event listener
// document.querySelector("button").addEventListener("click", fn)

// Method call and  this will represent to object
// setTimeout(function outer() {
//         object.logMessage();
//     }, 1000);


// this will be overrided in this case, No need to check where this will be pointing
// let boundFn = object.logMessage.bind(object);
// setTimeout(boundFn, 1000);

// const object = {
//     obj: {
//         who: 'World',
//         greet:function() {
//             return `Hello, ${this.who}!`;
//         },
//         farewell: () => {
//             return `Goodbye, ${this.who}!`;
//         }
//     }
// };
// console.log(object.greet()); // What is logged?
// ans=hello world
// console.log(object.farewell()); // What is logged?
// ans= goodbye undefined