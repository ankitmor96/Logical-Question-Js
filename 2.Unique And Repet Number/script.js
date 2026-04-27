 // use for loop :- 

const string  = "9247824712";

const  ToArray = string.split("");

let Unique = [];
let Repeat = [];

for( let i=0; i<ToArray.length; i++){
    if(ToArray.indexOf(ToArray[i])===ToArray.lastIndexOf(ToArray[i])){
        Unique.push(ToArray[i]);
    }else if(!Repeat.includes(ToArray[i])){
        Repeat.push(ToArray[i]);
    }
}

console.log("This is Unique value",Unique);
console.log("This is Repeat value",Repeat);

// use method :-


const str ="21343425689";

const toarr = str.split("");

const unique = toarr.filter((item, index,arr)=>{
    return arr.indexOf(item)===arr.lastIndexOf(item);
})
const repeat = toarr.filter((item, index,arr)=>{
    return arr.indexOf(item)!==arr.lastIndexOf(item) && index===arr.indexOf(item);
});

console.log("This is unique value",unique);
console.log("This is repeat value",repeat);


