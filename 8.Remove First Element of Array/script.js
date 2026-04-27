// first method :-

const arr = ["ankit","kalpesh","mohin"];

const RemoveElement = arr.shift();

console.log(arr);

// second method :-

const fruits = ["apple","banana","mango"];

const RemoveFirstEle =(fruits)=>{

    const newArr = [];

    for(let i=1; i<fruits.length; i++){
        newArr.push(fruits[i]);
}
console.log(newArr);
};

RemoveFirstEle(fruits);


// third method :-

const array = ["ankit","kalpesh","mohin"];

const RemindElement = array.slice(1);

console.log(RemoveElement);
