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
                right = mid - 1;
            else if (array[mid] < num)
                left = mid + 1;
            else
                return mid;
        }
        return null;
    }

    arrayToTree(array) {
        let obj = {};
        let nextArray = [];
        let input = function (arr) {
            nextArray = [];
            for (let obj of arr) {
                if (array.length == 0)
                    return;
                let objLeft = {};
                nextArray.push(objLeft);
                objLeft.key = array.shift();
                obj.left = objLeft;
                if (array.length == 0)
                    return;
                let objRight = {};
                nextArray.push(objRight);
                objRight.key = array.shift();
                obj.right = objRight;
            }
            if (array.length > 0)
                input(nextArray);
        };
        obj.key=array.shift();
        nextArray=[obj];
        input(nextArray);
        return obj;
    }

    depthFirst(tree,num){
        let search=function(limb){
            if(limb.key==num)
                return limb;
            if(limb.left==null)
                return null;
            if(limb.right==null)
                return search(limb.left);
            return search(limb.left)||search(limb.right);
        };
        return search(tree);
    }

    breadthFirst(tree,num){
        let nextArray=[];
        let search=function(limb){
            nextArray=[];
            for(let obj of limb){
                if(obj.key==num)
                    return obj;
                if(obj.left!=null)
                    nextArray.push(obj.left);
                else
                    continue;
                if(obj.right!=null)
                    nextArray.push(obj.right);
            }
            if(nextArray.length==0)
                return null;
            return search(nextArray);
        };
        nextArray=[tree];
        return search(nextArray);
    }

}