// const numbers = [3, 4, 6, 2, 8];
// let output = [];
// for(let i = 0; i<numbers.length; i++){
//     let element = numbers[i];
//     let result = element * element;
//     output.push(result);
// }
//  console.log(output);

 const numbers = [3, 4, 6, 2, 8];
 let output = [];
 function square(element){
    return element * element;
 }
 numbers.map(function(element){
     console.log(element);
 });
 let result = square(6, 5);
console.log(result);