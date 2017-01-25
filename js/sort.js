// todo 模块化


var testArray = [49, 38, 65, 97, 76, 13, 27, 49];

console.log(testArray);
var straightInsert = function (array) {
    var sentry;
    var length=array.length;
    for(sentry=1;sentry<array.length;sentry++){
        for(var i=0;i<sentry;i++){
            if(array[sentry]<array[i]){
                array.splice(i,0,array.splice(sentry,1)[0]);
                break;
            }

        }
    }
};
straightInsert(testArray);
console.log(testArray);