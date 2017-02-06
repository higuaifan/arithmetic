/**
 * Created by Hi Guaifan on 2017/2/6.
 */
import Sort from './src/sort';
let sort=new Sort();

let timer=function(func) {
    let startTime = Date.now();
    let testArray;
    let newArr;
    for (let i = 0; i < 10000; i++) {
        testArray = [5, 4, 3, 2, 1, 49, 38, 65, 97, 76, 13, 27, 49, 13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];
        newArr = func(testArray);
    }
    console.log(newArr, Date.now() - startTime);
};

let test=function() {
    timer(sort.straightInsert);
    timer(sort.shell);
    timer(sort.simpleSelection);
    timer(sort.bubble);
    timer(sort.heap);
    timer(sort.merge);
    timer(sort.quick);
    timer(sort.jsSort);
};

test();

