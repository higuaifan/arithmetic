/**
 * Created by Administrator on 2017/2/13.
 */
export default class Others {
    eightQueen(n) {
        let chessboard = [];
        let unique = function (array) {
            const seen = new Map();
            return array.filter((a) => !seen.has(a) && seen.set(a, 1));
        };
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
            let uniqueArr = unique(arr);
            for (let i = 0; i < n; i++) {
                if (has(uniqueArr, i))
                    continue;
                let testArr = chessboard.concat(i);
                if(testArr.length==n)
                    return testArr;
                let flag=getUnable(testArr, line+1);
                if(flag){
                    return flag;
                }
            }
            return false;
        };
        return getUnable(chessboard,0);
    }
}