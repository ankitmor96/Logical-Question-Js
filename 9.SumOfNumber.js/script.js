const num = [1,2,3,4,5];

// const total = (num) =>{
//     let sum = 0;

// for(let i=0; i < num.length; i++){
//     sum+= num[i];
// }
// console.log("sum of :",sum);
// };

// total(num);


const total = (num) =>{
    let sum = 0;

    for(let i of num){
        sum += i;
    }

    console.log("sum of :",sum);

}

total(num);