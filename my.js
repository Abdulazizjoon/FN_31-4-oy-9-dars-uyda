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
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = arr.map(function (value, index) {
//   return value * value;
// });
// console.log(res);

//3-masala
// let arr = ['ali','bekzod','salim'];
// let res = arr.map(function (value) {
//   return value[0].charAt(0).toUpperCase() + value.slice(1).toLowerCase();
// });
// console.log(res);

//4-masala
// let arr = ["Salom", "Dunyo", "JavaScript", "Programlash"];
// let newarr=[]
// let res = arr.map(function (value) {
//   let sum= value.length
//    return newarr=sum
// });
// console.log(res);

//5-masala
// let price = [100, 200, 300, 350]
// let res=price.map(function(value) {
//     return value + (value % 80);
// })
// console.log(res);

//some
//1-masala
// let res = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// res.some(function(value) {
//     return value > 0 ? console.log('0dan katta sonla bor') :console.log();
// })

//2-masala
// let res = [50, 49, 30, 100, 53, 60, 70];
// res.some(function (value) {
//   return value>50? console.log('otgalar bor'):console.log('hammasi otmagan')
// });

//3-masala
// let arr = [20, 30, 50, 80, 101];
// let sum = 0;
// arr.some(function (value) {
//   return value > 100 ? sum += 1 : (sum = 0);
// });
// if (sum == 0) {
//   console.log("100 dan qimmat mahsulot yoq");
// } else if(sum>0) {
//   console.log(`${sum}ta 100dan katta summa bor`);
// }


//4-masala
// let arr = [20, 30, 50, 80, 101];
// let sum = 0;
// arr.some(function (value) {
//   return value %2==0 ? (sum += 1) : (sum = 0);
// });
// if (sum == 0) {
//   console.log("juft son yoq");
// } else if (sum > 0) {
//   console.log(`${sum}ta juft son bor`);
// }

//5-masala
// let arr = ["bahor", "yoz",'kuz','qish'];
// let sum = 0;
// arr.some(function (value) {
//   return value > 'bahor' ? (sum += 1) : (sum = 0);
// });
// if (sum == 0) {
//   console.log("bahor oyi yoq");
// } else if (sum > 0) {
//   console.log(`bahor oyi bor`);
// }


//every
//1-masala





