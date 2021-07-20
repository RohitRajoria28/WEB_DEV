const fs = require("fs");




// function callback(err,data){
//     if(err){
//         console.log("unable to find file");
//     }else {
//         console.log(data);
//     }
// // }
//  let data= fs.readFile("abc.txt","utf-8");

// console.log("hello");
//  let count=1;
// function readfile(filename){
//     if(filename==undefined){
//         filename=(count-1)+".txt";
//     }
//     fs.readFile(filename,"utf-8",writefile);
// }
// function writefile(err,data){
//     let lines= data.split("\r\n");
//     if(lines.length>1){
//         lines=lines.splice(1);
//         let writeData=lines.join("\r\n");
//         fs.writeFile(count+".txt",writeData
//         ,readfile);
//         count+=1;
//     }
// }

// readfile("abc.txt");
// let num = process.argv[2];
// let filenum = 1; //doing work parllal

// function printfilename(filename){
//     console.log("You just created filenumber",filename);

// }
// function createFile(filenum){
//     if(filenum>num){
//         return ;
//     }
//     let lines =Math.floor(Math.random()*101);
//     let arr=[];
//     for(let i=0;i<lines;i++){
//         arr.push(Math.floor(Math.random()*101));
//     }
//     let writeData=arr.join("\r\n");
//     fs.writeFile(filenum+".txt",writeData,function(){
//         printfilename(filenum);
//     });

// }
// for(let i=0;i<num;i++){
//     createFile(filenum);
//     filenum+=1;
// }
// let totalnum = 0;

// function addnumber(data) {
//     let lines = data.split("\r\n");

//     for (let i = 0; i < lines.length; i++) {
//         totalnum += lines[i];
//     }
//     console.log(totalnum);
//     // console.log(totalnum);
// }


// function readfile(filenum) {
//     // if(filenum>8){
//     // return ;
//     // }
//     fs.readFile(filenum + ".txt", "utf-8", function (err, data) {
//         if (err) {
//             console.log(err);
//         } else {
//             addnumber(data);
//         }
//     });

// }
// for (let j = 1; j <= 8; j++) {
//     readfile(j);
// }

// fs.readFile("1.txt","utf-8", function(err,data){
//     if(err){
//         console.log(err);
//     } else{
//          console.log(data);
//     }  
//   });

// let promise = new Promise(function (resolve, reject) {

//     // resolve("Complete my promise");
//     if (fs.existsSync("8.txt")) {
//         resolve("Complete my promise")
//         console.log("hello")
//     } else {
//         reject("Not Complete my promise")
//     }
// });
// 
// promise.then(function(val){
//    console.log(val);
// });
// promise.catch(function(err){
//    console.log(err);
// })
// function abc(val) {
//     console.log(val);
// }

// function def(err) {
//     console.log(err);
// }
// promise.then(abc).catch(def);
// function callback(data){
//     console.log("2nd file print");
// }
// let readfile=fs.promises.readFile("8.txt","utf-8");
// readfile.then(function(data){
//     console.log(data);
//     fs.readFile("1.txt","utf-8",callback);
//     console.log("hello");
// }).catch(function(err){
//     console.log(err);
// })

// readfile.then(function(data){
//     console.log(data);
// }
// )

// let promise1=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("COMPLETTED 1");
//     },  2000);

// });
// let promise2=new Promise(function(resolve,reject){

//     setTimeout(() => {
//         resolve("COMPLETTED file 2");
//     },   5000);

// });

// console.log(promise1,promise2);

// promise1.then(function(data){
//     console.log(data);
// })
// promise2.then(function(data){
//     console.log(data);
// })


// let central = require('./central'),
//     db1 = require('./db1'),
//     db2 = require('./db2'),
//     db3 = require('./db3'),
//     vault = require('./vault'),
//     mark = require('./mark');
// module.exports = function (id) {
//     return new Promise(function (resolve, reject) {
//         let ans = {};
//         ans["id"] = id;
//         let promise1 = central(id).then(function (data) {
//             if (data == "db1") {
//                 return [db1(id), data];
//             } else if (data == "db2") {
//                 return [db2(id), data];
//             } else if (data == "db3") {
//                 return [db3(id), data];
//             }
//         }).catch(function (err) {
//             reject("Error central");
//         });
//         let promise2 = vault(id).then(function (data) {
//             ans["firstname"] = data.firstname;
//             ans["lastname"] = data.lastname;
//             ans["email"] = data.email;
//         }).catch(function (err) {
//             reject("Error vault")
//         });
//     })
// }


// async function read(){
//     let data=fs.promises.readFile("1.txt","utf-8");
//     data.then(function(data){
//         console.log(data);
//     })
//     console.log("hello ");
// }
// read();
// function wait (time){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve();
//         },time)
//     })
// };
// async function print(){
//     console.log("TIMER STARTED ");

//     await wait(2000);
//     console.log("2 sec done ")
// }
// print();
// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//     });
// }

// let promise = job();

// promise

// .then(function() {
//     console.log('Success 1');
// })

// .then(function() {
//     console.log('Success 2');
// })

// .then(function() {
//     console.log('Success 3');
// })

// .catch(function() {
//     console.log('Error 1');
// })

// async function job(){
//      throw undefined;
// }
// async function  main(){
//     try{
//         return await job();
//         console.log("succcess 1");
//         console.log("succcess 2");
//         console.log("succcess 3");
//     }catch(err){
//         console.log("error 1");
//     }
//     console.log("success 4")

// }


// main();
// QUESTION --CONVERT TO ASYNC AWAIT 
// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });

async function job(state) {
    if (state) {
        return "success";
    } else {
        throw "error";
    }

}
async function work1() {
    try {
        try {
            let data = await job(true);
            console.log(data);
            await job(false);
        } catch (err) {
            console.log("error");
        }
        console.log("Error caught");
        await job(true);

    } catch (err) {
        console.log("Error caught")
    }

}
work1();