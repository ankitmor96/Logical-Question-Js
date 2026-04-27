// first method :-

// const number = [12,15,18,23,11,25,35,49];

// const largest = Math.max(...number);

// console.log(largest);

// second method :-

const num = [1,2,3,4,5,6,7,8,10,9,11,17,12];

let largest = [0];

for (let i = 1; i<num.length; i++){
    if(num[i]>largest){
        largest = num[i];
    }
}

console.log(largest);