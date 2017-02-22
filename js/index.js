/**
 * Created by Hi Guaifan on 2017/2/6.
 */
import Sort from './src/sort';
import Find from './src/find';
import Others from './src/others';
let sort = new Sort();
let find = new Find();
let others = new Others();

// let sortDiv = document.getElementById('sort');
//
// let timer = function (func) {
//     let startTime = Date.now();
//     let arr;
//     let newArr;
//     for (let i = 0; i < 1000; i++) {
//
//         let testArray = [];
//         for (let i = 0; i < 100; i++) {
//             // testArray.push(i*Math.random()*10);
//             testArray.push(i*10);
//         }
//         testArray.sort(function () {
//             return Math.random() - 0.5;
//         });
//
//         arr = testArray.concat();
//         newArr = func(arr);
//     }
//     const time = Date.now() - startTime;
//
//     let div = document.createElement('tr');
//     div.innerHTML = '<td>' + func.name + ':</td><td>[';
//     // for (let i of newArr) {
//     //     div.innerHTML += ' ' + Math.ceil(i) + ' ';
//     // }
//     div.innerHTML += ']</td><td>用时:' + time + '</td>';
//     sortDiv.append(div);
//
//     // console.log(func.name,newArr, Date.now() - startTime);
// };
// let test = function () {
//     timer(sort.jsSort);
//     timer(sort.straightInsert);
//     timer(sort.shell);
//     timer(sort.simpleSelection);
//     timer(sort.bubble);
//     timer(sort.cocktail);
//     timer(sort.heap);
//     timer(sort.merge);
//     timer(sort.quick);
//     timer(sort.bucket);
// };
// test();
// let findTimer=function(func){
//     let array = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
//     console.log(func.name,func(array,5));
// };
// findTimer(find.binary);
// findTimer(find.sequential);
//
// let testTree=find.arrayToTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
// for(let i=0;i<17;i++){
//     console.log(find.depthFirst(testTree,i));
//     console.log(find.breadthFirst(testTree,i));
// }
//
// let testArr=[3,1,4,7,5,55,996,2,0];
// console.log(sort.bucket(testArr));

// console.log(others.eightQueen(1));
// console.log(others.eightQueen(4));
// console.log(others.eightQueen(8));

// let startTime = Date.now();
// for(let i=0;i<10000;i++){
//     others.eightQueen(8);
// }
// console.log(Date.now()-startTime);
// others.hundredChicken(100);


let resArray = [{'weight': 3, 'num': 5},
    {'weight': 4, 'num': 2},
    {'weight': 5, 'num': 1}];


// others.Knapsack(resArray, 10);
others.house(0,0,8,8);