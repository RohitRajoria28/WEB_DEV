var arr = [4, 9, 16, 25];

let square=arr.map((data,index)=>{
    return data*data;
})

console.log(square);
let odd=arr.filter(function(data){
    return data%2!=0;
})
console.log(odd);