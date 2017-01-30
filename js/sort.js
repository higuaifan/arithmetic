// todo 模块化


var testArray = [5, 4, 3, 2, 1, 49, 38, 65, 97, 76, 13, 27, 49, 13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];

//todo 这个写法好像有问题
// console.log(testArray);
//todo 用step抽象步长
var straightInsert = function (array) {
    var sentry;
    var length = array.length;
    for (sentry = 1; sentry < length; sentry++) {
        for (var i = 0; i < sentry; i++) {
            if (array[sentry] < array[i]) {
                array.splice(i, 0, array.splice(sentry, 1)[0]);
                break;
            }

        }
    }
};
//。。瞎写的一个算步长的函数
//todo 封装这两个函数
var makeStap = function (length, stepArray) {
    var array = stepArray;
    var sqrt = Math.sqrt(45 + 36 * length);
    var x = (9 - sqrt) / 18 < 0 ? (9 + sqrt) / 18 : (9 - sqrt) / 18;
    var i = parseInt(Math.log(x) / Math.log(2));
    var step = 9 * Math.pow(4, i) - 9 * Math.pow(2, i) + 1;

    sqrt = Math.sqrt(5 + 4 * length);
    x = (3 - sqrt) / 2 < 0 ? (3 + sqrt) / 2 : (3 - sqrt) / 2;
    i = parseInt(Math.log(parseInt(x)) / Math.log(2) - 2);

    var step2 = Math.pow(2, i + 2) * (Math.pow(2, i + 2) - 3) + 1;

    step = step > step2 ? step : step2;
    if (step == 5) {
        array.push(5);
        array.push(1);
        return array;
    }
    array.push(step);

    array = makeStap(step - 1, array);
    return array;
};
var shell = function (array) {
    var stepArray = [];//步长Array
    stepArray = makeStap(array.length, stepArray);
    for (var i = 0; i < stepArray.length; i++) {
        //步长部分
        var step = stepArray[i];

        for (var j = 0; j < step; j++) {

            for (var sentry = j; sentry < testArray.length; sentry += step) {
                for (var m = j; m < sentry; m += step) {

                    if (testArray[sentry] < testArray[m]) {
                        //如果有小于 往后移 m是移动的那个 
                        var num = testArray[sentry];//那个数字提出，然后剩下的都要后移
                        for (var l = sentry; l > m; l -= step) {
                            testArray[l] = testArray[l - step];
                        }
                        testArray[m] = num;
                    }
                }
            }

        }
    }
};


var simpleSelection = function (array) {
    for (var i = 0; i < array.length; i++) {
        var minIndex = i;
        for (var j = i; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            array[i] = array[i] ^ array[minIndex];
            array[minIndex] = array[i] ^ array[minIndex];
            array[i] = array[i] ^ array[minIndex];
        }

    }
};


var bubble = function (array) {
    for (var i = array.length - 1; i > -1; i--) {
        for (var j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                array[j] = array[j] ^ array[j + 1];
                array[j + 1] = array[j] ^ array[j + 1];
                array[j] = array[j] ^ array[j + 1];
            }
        }
    }
};


//todo 不知道哪里写的有点不对，待优化
var heap = function (array) {
    var returnArr = [];
    var length = array.length;
    for (var i = 0; i < length; i++) {
        var line = Math.ceil(Math.log(array.length + 1) / Math.log(2));
        var end = Math.pow(2, line - 1) - 2;
        for (var j = end; j > -1; j--) {
            change(array, j);
        }
        returnArr.push(array.shift());
    }
    return returnArr;
};
var change = function (array, root) {
    //todo 好像可以优化 直接*2就可以了好像
    var left = root * 2 + 1;//左节点的index
    if (array[left] == null)
        return;
    if (array[left] < array[root]) {
        array[left] = array[left] ^ array[root];
        array[root] = array[left] ^ array[root];
        array[left] = array[left] ^ array[root];
    }
    var right = left + 1;

    if (array[right] == null)
        return;
    if (array[right] < array[root]) {
        array[right] = array[right] ^ array[root];
        array[root] = array[right] ^ array[root];
        array[right] = array[right] ^ array[root];
    }
};


var merge = function (array) {
    return scan(array)[0];
};

var scan = function (array) {
    var arrList = [];
    for (var i = 0; i < array.length; i = i + 2) {
        if (array[i + 1] != null) {
            arrList.push(compare(array[i], array[i + 1]));
        } else {
            arrList.push(array[i]);
            break;
        }
    }
    if (arrList.length > 1)
        arrList = scan(arrList);
    return arrList;
};


var compare = function (arrayA, arrayB) {
    var returnArray = [];
    var a, b;
    if (typeof arrayA == 'number') {
        a = [arrayA];
    } else {
        a = arrayA.concat();
    }
    if (typeof arrayB == 'number') {
        b = [arrayB];
    } else {
        b = arrayB.concat();
    }

    var lengthA = a.length;
    var lengthB = b.length;
    var i = 0, j = 0;


    //todo 这里的算法可以优化的
    while (i < lengthA && j < lengthB) {
        if (arrayA[i] < arrayB[j]) {
            returnArray.push(a.shift());
            i++;
        }
        else {
            returnArray.push(b.shift());
            j++;
        }
    }
    returnArray = returnArray.concat(a);
    returnArray = returnArray.concat(b);
    return returnArray;
};


var startTime = Date.now();
for (var i = 0; i < 10000; i++) {
    straightInsert(testArray);
}
console.log(testArray, Date.now() - startTime);

startTime = Date.now();
for (var i = 0; i < 10000; i++) {
    testArray = [5, 4, 3, 2, 1, 49, 38, 65, 97, 76, 13, 27, 49, 13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];
    shell(testArray);
}
console.log(testArray, Date.now() - startTime);


startTime = Date.now();
for (var i = 0; i < 10000; i++) {
    testArray = [5, 4, 3, 2, 1, 49, 38, 65, 97, 76, 13, 27, 49, 13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];
    simpleSelection(testArray);
}
console.log(testArray, Date.now() - startTime);

startTime = Date.now();
for (var i = 0; i < 10000; i++) {
    testArray = [5, 4, 3, 2, 1, 49, 38, 65, 97, 76, 13, 27, 49, 13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];
    bubble(testArray);
}
console.log(testArray, Date.now() - startTime);


startTime = Date.now();
for (var i = 0; i < 10000; i++) {
    testArray = [5, 4, 3, 2, 1, 49, 38, 65, 97, 76, 13, 27, 49, 13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];
    var newArr = heap(testArray);
}
console.log(newArr, Date.now() - startTime);


startTime = Date.now();
for (var i = 0; i < 10000; i++) {
    testArray = [5, 4, 3, 2, 1, 49, 38, 65, 97, 76, 13, 27, 49, 13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];
    testArray = merge(testArray);
}
console.log(testArray, Date.now() - startTime);

startTime = Date.now();
for (var i = 0; i < 10000; i++) {
    testArray = [5, 4, 3, 2, 1, 49, 38, 65, 97, 76, 13, 27, 49, 13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];
    testArray.sort();
}
console.log(testArray, Date.now() - startTime);

