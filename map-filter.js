// const numbers = [3, 4, 6, 2, 8];
// let output = [];
// for(let i = 0; i<numbers.length; i++){
//     let element = numbers[i];
//     let result = element * element;
//     output.push(result);
// }
//  console.log(output);

 const numbers = [3, 4, 6, 9, 8];
//  let output = [];
//  function square(element){
//     return element * element;
//   }
//  const result = numbers.map(function(element){
//      return element * element ;
//  });

// const result = numbers.map(x => x*x);
//  console.log(result);

// const bigger = numbers.filter(x => x< 5);
// console.log(bigger);

const isThere = numbers.find(x => x>5);
console.log(isThere);