const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findSum = (num) => {
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum = num[i] + sum;
    }
    console.log(sum);
}
findSum(num);


// second method :-

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;

// for (let i = 0; i < num.length; i++) {
//     sum = num[i] + sum;
// }
// console.log(sum);