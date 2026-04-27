// first method :-

const num = [10,11,12,8,4,3,7,5,14];

const smallNum = Math.min(...num);

console.log(smallNum);

// second method :-

const number = [10,11,12,8,4,3,7,5,14];

let small = number[0];

for(let i = 1; i < number.length; i++){ 
    if(number[i] < small){
      small = number[i];
    }
}

console.log(small);