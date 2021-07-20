// const user = {
//     id: 339,
//     name: 'Fred',
//     age: 42,
//     education: {
//         degree: 'Masters',
//         school: {
//             name: 'SPS',
//             location: 'Pitampura'
//         }
//     },
//     friends: ["Falcon", "Bucky"]
// };

// Mthod 1 (not better)
// let friends=user.friends;

// METHOD 2 // better Method
 
// let {education:{degree}}=user;
// let {education:{school:{name,location}}}=user;
// let {friends}=user;
// console.log(degree);
// console.log(friends);
// console.log(name,location);
let obj1 = {
    "name" : "bhavesh",
    "profession": {
        "company" : "pepcoding"
    }
}

// obj2={...obj1};
obj2=JSON.parse(JSON.stringify(obj1));

for(let i=0;i<Object.keys(obj1).length;i++){
    if(typeof(obj1[Object.keys(obj1)[i]])=="object"){
    
    }
}
obj2.profession.company="squareBoat";
console.log(obj1);
console.log(obj2);
