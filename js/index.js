/**
 * Created by Hi Guaifan on 2017/2/6.
 */
import Sort from './src/sort';
import Find from './src/find';
let sort = new Sort();
let sortDiv = document.getElementById('sort');

// let timer = function (func) {
//     let startTime = Date.now();
//     let arr;
//     let newArr;
//     for (let i = 0; i < 100; i++) {
//
//         let testArray = [];
//         for (let i = 0; i < 1000; i++) {
//             testArray.push(i*Math.random()*10);
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
//     timer(sort.straightInsert);
//     timer(sort.shell);
//     timer(sort.simpleSelection);
//     timer(sort.bubble);
//     timer(sort.heap);
//     timer(sort.merge);
//     timer(sort.quick);
//     timer(sort.jsSort);
// };
// test();

let find = new Find();

let findTimer=function(func){
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
    console.log(func.name,func(array,5));
};
findTimer(find.binary);
