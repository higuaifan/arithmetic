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

    hundredChicken(n){
        let cockMax=n/5;
        let henMax=n/3;
        for(let cock=0;cock<=cockMax;cock++){
            for(let hen=0;hen<=henMax&&hen<=n-cock;hen++){
                let chick=n-cock-hen;
                if(100==chick/3+hen*3+cock*5)
                    console.log(cock,hen,chick);
            }
        }


    }
}