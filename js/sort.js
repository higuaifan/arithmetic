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
    for(var i = 0;i<array.length;i++){
        var minIndex=i;
        for(var j = i;j<array.length;j++){
            if(array[minIndex]>array[j]){
                minIndex=j;
            }
        }
        if(minIndex!=i){
            array[i]=array[i]^array[minIndex];
            array[minIndex]=array[i]^array[minIndex];
            array[i]=array[i]^array[minIndex];
        }

    }
};


straightInsert(testArray);
console.log(testArray);


testArray = [5, 4, 3, 2, 1, 49, 38, 65, 97, 76, 13, 27, 49, 13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];
shell(testArray);
console.log(testArray);

testArray = [5, 4, 3, 2, 1, 49, 38, 65, 97, 76, 13, 27, 49, 13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];
simpleSelection(testArray);
console.log(testArray);