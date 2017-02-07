/**
 * Created by Administrator on 2017/2/7.
 */
export default class Find {

    sequential(array, num) {
        for (let i = 0, len = array.length; i < len; i++) {
            if (array[i] == num)
                return i;
        }
        return null;
    }

    binary(array, num) {
        array = array.sort(function (a, b) {
            return a - b;
        });
        let left = 0;
        let right = array.length - 1;
        let mid;
        while (left <= right) {
            mid = (right + left) >> 1;
            if (array[mid] > num)
                right = mid-1;
            else if (array[mid] < num)
                left = mid+1;
            else
                return mid;
        }
        return null;
    }

}