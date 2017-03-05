/**
 * Created by Administrator on 2017/2/13.
 */
export default class Others {
    eightQueen(n) {
        let chessboard = [];
        let has = function (array, num) {
            let len = array.length;
            for (let i = 0; i < len; i++) {
                if (array[i] == num) {
                    return true;
                }
            }
            return false;
        };
        let getUnable = function (chessboard, line) {
            let arr = chessboard.concat();
            for (let i = 0; i < chessboard.length; i++) {//设置不能放的地方
                let step = line - i;
                if (chessboard[i] - step >= 0)
                    arr.push(chessboard[i] - step);
                if (chessboard[i] + step < n)
                    arr.push(chessboard[i] + step);
            }
            for (let i = 0; i < n; i++) {
                if (has(arr, i))
                    continue;
                let testArr = chessboard.concat(i);
                if (testArr.length == n)
                    return testArr;
                let flag = getUnable(testArr, line + 1);
                if (flag) {
                    return flag;
                }
            }
            return false;
        };
        return getUnable(chessboard, 0);
    }

    hundredChicken(n) {
        let cockMax = n / 5;
        let henMax = n / 3;
        for (let cock = 0; cock <= cockMax; cock++) {
            for (let hen = 0; hen <= henMax && hen <= n - cock; hen++) {
                let chick = n - cock - hen;
                if (100 == chick / 3 + hen * 3 + cock * 5)
                    console.log(cock, hen, chick);
            }
        }
    }

    JosephusProblem(length, step) {
        //不用公式
        let arr = [];
        for (let i = 0; i < length; i++)
            arr.push(i + 1);
        let kill = function (start) {
            let len = arr.length;
            if (len == 1)
                return arr[0];
            let key = (start + step - 1) % arr.length;
            arr.splice(key, 1);
            return kill(key);
        };
        kill(0);
        return arr[0];
    }

    Knapsack(resArray, knapsack) {
        let result = [];
        let resFunc = function (i, top) {
            let res = resArray[i];
            let max = Math.floor(top / res.weight);
            if (res.num < max)
                max = res.num;
            for (let n = max; n >= 0; n--) {

                let newTop = top - n * res.weight;
                result.push({'id': i, 'num': n});
                if (i + 1 < resArray.length) {
                    resFunc(i + 1, newTop);
                    result.pop();
                }
                else {
                    print(result);
                    result.pop();
                    break;
                }
            }
        };
        let print = function (obj) {
            for (let o of obj) {
                console.log('编号:' + o.id + '    数量' + o.num);
            }
            console.log('\n');

        };
        resFunc(0, knapsack);
    }

    house(x, y, height, width) {
        let testNum = [{'x': -1, 'y': 2},
            {'x': 1, 'y': 2},
            {'x': -2, 'y': 1},
            {'x': 2, 'y': 1},
            {'x': -2, 'y': -1},
            {'x': -1, 'y': -2},
            {'x': 2, 'y': -1},
            {'x': 1, 'y': -2},];
        let print = function (obj) {
            for (let o of obj) {
                console.log('x:' + o.x + '    y:' + o.y);
            }
            console.log('\n');

        };
        let jump = function (jumpArray, a, b, times) {
            let arr = jumpArray.concat();
            times++;
            for (let key of testNum) {
                x = a + key.x;
                y = b + key.y;
                if (x >= 0 && x < width && y >= 0 && y < height) {
                    let flag = false;
                    for (let test of arr) {
                        if (x == test.x && y == test.y) {
                            flag = true;
                        }
                    }
                    if (!flag) {
                        arr.push({'x': x, 'y': y});
                        if (times == (height * width)) {
                            print(arr);
                            return true;
                        }
                        if (jump(arr, x, y, times)) {
                            return true;
                        }
                        arr.pop();
                    }
                }
            }
            return false;
        };
        jump([{'x': x, 'y': y}], x, y, 1);
    }

    hammingDistance(x, y) {
        let t = (x ^ y).toString(2);
        let flag = 0;
        for (let i in t) {
            if (t[i] == '1')
                flag++;
        }
        return flag;
    };

    findComplement(num) {
        return Math.pow(2, num.toString(2).length) - num - 1;
    };

    countOne(num) {
        let length = 0;
        for (let i = 1; i <= num; i++) {
            let t = i.toString().match(/1/g);
            if (t != null)
                length += t.length;
        }
        return length;
    };

    countBattleShips(board) {
        let ships = 0;
        let find = function (i, j) {
            board[i][j] = '.';
            if (board[i + 1] != undefined && board[i + 1][j] == 'X') {
                find(i + 1, j);
            }
            if (board[i - 1] != undefined && board[i - 1][j] == 'X') {
                find(i - 1, j);
            }
            if (board[i][j + 1] == 'X') {
                find(i, j + 1);
            }
            if (board[i][j - 1] == 'X') {
                find(i, j - 1);
            }
        };
        for (let line in board) {
            line = parseInt(line);
            for (let i in board[line]) {
                i = parseInt(i);
                if (board[line][i] == 'X') {
                    ships++;
                    find(line, i);
                }
            }
        }
        return ships;
    };

    findWords(words) {
        const one = 'qwertyuiopQWERTYUIOP';
        const two = 'asdfghjklASDFGHJKL';
        const three = 'zxcvbnmZXCVBNM';
        let arr = [];
        for (let word of words) {
            let search;
            if (one.indexOf(word[0]) !== -1)
                search = one;
            if (two.indexOf(word[0]) !== -1)
                search = two;
            if (three.indexOf(word[0]) !== -1)
                search = three;
            let flag = true;
            for (let key of word) {
                if (search.indexOf(key) === -1) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                arr.push(word);
            }
        }
        return arr;
    };

    countBits(num) {
        let arr = [0];
        for (let i = 1; i <= num; i++)
            arr[i] = arr[i >> 1] + (i & 1);
        return arr;
    };

    fizzBuzz(n) {
        let arr = [];
        for (let i = 1; i <= n; i++) {
            let str = "";
            let flag = true;
            if (i % 3 === 0) {
                flag = false;
                str = "Fizz";
            }
            if (i % 5 === 0) {
                flag = false;
                str += "Buzz";
            }
            if (flag) {
                str = i + "";
            }
            arr.push(str);
        }
        return arr;
    };

    nextGreaterElement(findNums, nums) {
        let map = [];
        let len = nums.length;
        for (let i in nums) {
            map[nums[i]] = {num: nums[i]};
            for (let j = i; j < len; j++) {
                if (nums[j] > nums[i]) {
                    map[nums[i]].max = nums[j];
                    break;
                }
            }
        }
        let arr = [];
        for (let num of findNums) {
            if (map[num].max === undefined) {
                arr.push(-1);
            } else {
                arr.push(map[num].max);
            }
        }

        return arr;
    };

    islandPerimeter(grid) {
        let count = 0;
        let block = 0;
        let len = grid[0].length;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < len; j++) {
                if (1 === grid[i][j]) {
                    block++;
                    if (grid[i + 1] !== undefined && 1 === grid[i + 1][j])
                        count++;
                    if (1 === grid[i][j + 1])
                        count++;
                }
            }
        }
        return block * 4 - count * 2;
    };

    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let max = 0;
        for (let n of nums) {
            if (1 === n) {
                count++;
                if (max < count) {
                    max = count;
                }
            } else
                count = 0;
        }
        return max;
    };
}