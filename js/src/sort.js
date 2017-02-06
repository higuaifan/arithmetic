// todo 模块化
export default class Sort {
//todo 用step抽象步长
    straightInsert(array) {
        let sentry;
        let length = array.length;
        for (sentry = 1; sentry < length; sentry++) {
            for (let i = 0; i < sentry; i++) {
                if (array[sentry] < array[i]) {
                    array.splice(i, 0, array.splice(sentry, 1)[0]);
                    break;
                }
            }
        }
        return array;
    };

    shell(array) {
        let makeStep = function (length, stepArray) {
            let array = stepArray;
            let sqrt = Math.sqrt(45 + 36 * length);
            let x = (9 - sqrt) / 18 < 0 ? (9 + sqrt) / 18 : (9 - sqrt) / 18;
            let i = parseInt(Math.log(x) / Math.log(2));
            let step = 9 * Math.pow(4, i) - 9 * Math.pow(2, i) + 1;

            sqrt = Math.sqrt(5 + 4 * length);
            x = (3 - sqrt) / 2 < 0 ? (3 + sqrt) / 2 : (3 - sqrt) / 2;
            i = parseInt(Math.log(parseInt(x)) / Math.log(2) - 2);

            let step2 = Math.pow(2, i + 2) * (Math.pow(2, i + 2) - 3) + 1;

            step = step > step2 ? step : step2;
            if (step == 5) {
                array.push(5);
                array.push(1);
                return array;
            }
            array.push(step);

            array = makeStep(step - 1, array);
            return array;
        };
        let stepArray = [];//步长Array
        stepArray = makeStep(array.length, stepArray);
        for (let i = 0; i < stepArray.length; i++) {
            //步长部分
            let step = stepArray[i];

            for (let j = 0; j < step; j++) {

                for (let sentry = j; sentry < array.length; sentry += step) {
                    for (let m = j; m < sentry; m += step) {

                        if (array[sentry] < array[m]) {
                            //如果有小于 往后移 m是移动的那个
                            let num = array[sentry];//那个数字提出，然后剩下的都要后移
                            for (let l = sentry; l > m; l -= step) {
                                array[l] = array[l - step];
                            }
                            array[m] = num;
                        }
                    }
                }

            }
        }
        return array;
    };

    simpleSelection(array) {
        for (let i = 0; i < array.length; i++) {
            let minIndex = i;
            for (let j = i; j < array.length; j++) {
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
        return array;
    };

    bubble(array) {
        for (let i = array.length - 1; i > -1; i--) {
            for (let j = 0; j < i; j++) {
                if (array[j] > array[j + 1]) {
                    array[j] = array[j] ^ array[j + 1];
                    array[j + 1] = array[j] ^ array[j + 1];
                    array[j] = array[j] ^ array[j + 1];
                }
            }
        }
        return array;
    };

    heap(array) {
        let change = function (array, root) {
            let left = root * 2 + 1;
            if (array[left] == null)
                return;
            if (array[left] < array[root]) {
                array[left] = array[left] ^ array[root];
                array[root] = array[left] ^ array[root];
                array[left] = array[left] ^ array[root];
            }
            let right = left + 1;

            if (array[right] == null)
                return;
            if (array[right] < array[root]) {
                array[right] = array[right] ^ array[root];
                array[root] = array[right] ^ array[root];
                array[right] = array[right] ^ array[root];
            }
        };
        let returnArr = [];
        let length = array.length;
        for (let i = 0; i < length; i++) {
            let line = Math.ceil(Math.log(array.length + 1) / Math.log(2));
            let end = Math.pow(2, line - 1) - 2;
            for (let j = end; j > -1; j--) {
                change(array, j);
            }
            returnArr.push(array.shift());
        }
        return returnArr;
    };

    merge(array) {
        let scan = function (array) {
            let compare = function (arrayA, arrayB) {
                let returnArray = [];
                let a, b, listA, listB;
                if (typeof arrayA == 'number') {
                    a = [arrayA];
                    listA = [arrayA];
                } else {
                    a = arrayA.concat();
                    listA = arrayA.concat();
                }
                if (typeof arrayB == 'number') {
                    b = [arrayB];
                    listB = [arrayB];
                } else {
                    b = arrayB.concat();
                    listB = arrayB.concat();
                }

                let lengthA = a.length;
                let lengthB = b.length;
                let i = 0, j = 0;


                //todo 这里的算法可以优化的
                while (i < lengthA && j < lengthB) {

                    if (listA[i] < listB[j]) {
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
            let arrList = [];
            for (let i = 0; i < array.length; i = i + 2) {
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
        return scan(array)[0];
    };

    quick(array) {
        let quickScan = function (array) {
            if (array.length < 2)
                return array;
            let i = 0, j = array.length - 1;//i: min index , j: max index
            let k = 0;
            while (i < j) {
                for (; j > i - 1; j--) {
                    if (array[k] > array[j]) {
                        array[k] = array[k] ^ array[j];
                        array[j] = array[k] ^ array[j];
                        array[k] = array[k] ^ array[j];
                        k = j;
                        break;
                    }
                }
                for (; i < j + 1; i++) {
                    if (array[k] < array[i]) {
                        array[k] = array[k] ^ array[i];
                        array[i] = array[k] ^ array[i];
                        array[k] = array[k] ^ array[i];
                        k = i;
                        break;
                    }
                }
            }
            let returnArray = quickScan(array.slice(0, k));
            returnArray = returnArray.concat(array[k]);
            returnArray = returnArray.concat(quickScan(array.slice(k + 1, array.length)));
            return returnArray;
        };
        return quickScan(array);
    };

    jsSort(array) {
        array.sort(function (a, b) {
            return a - b;
        });
        return array;
    };
}
