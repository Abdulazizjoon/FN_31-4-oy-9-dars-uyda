//forech
//1-masala
// let arr = [12, 2, 3, 4, 5, 6, 7, 8, 9,]
// arr.forEach((value, index,a) => {
//   a[index] = value * 2;
// });
// console.log(arr);

//2-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.forEach((value,index,a) => {
//   if (value % 2 == 0) {
//     a[index]=value * 3;
//   }
// });
// console.log(arr);

//3-masala
// let bal=+prompt()
// let arr = [bal]

// arr.forEach((value, index, a) => {
//     if (value>=50) {
//         console.log('imtihondan otgansiz');
//     } else {
//         console.log('imtihondan otmagansiz');
//     }
// });

//4-masala
// let arr = [1, -2, -3, 4, 5, -6, 7, 8, -9, 10];
// arr.forEach((value, index, a) => {
//   if (value > 0) {
//     console.log(`${value} musbat son`);
//   } else {
//       console.log(`${value} manfiy son`);
//   }
// });
// console.log(arr);


//5-masala
// let arr = ['memor', 'veronika', 'taqdir']
// arr.forEach((value,index,a) => {
//     console.log(`${value} sozida ${value.length} soz bor`);
// });


//map
//1-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let res= arr.map(function(value,index) {
//     return value+5
// })
// console.log(res);


//2-masla
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = arr.map(function (value, index) {
  return value + 5;
});
console.log(res);

