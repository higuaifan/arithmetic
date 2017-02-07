/**
 * Created by Administrator on 2017/2/7.
 */
export default class Find {
    inOrderTo(array,num){
        for(let i=0,len=array.length;i<len;i++){
            if(array[i]==num)
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
        while (left != right) {
            mid = Math.ceil((right + left) / 2);
            if(mid==left||mid==right)
                break;
            if (array[mid] > num)
                right = mid;
            else if (array[mid] < num)
                left = mid;
            else
                return mid;
        }
        if (array[left] == num)
            return left;
        else if(array[right] == num)
            return right;
        return null;
    }
}