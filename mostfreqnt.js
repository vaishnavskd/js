var arr=[11,2,3,11,2,3,4,2,5,9,8,2];
console.log(arr);
var max=0;
var mostfreqnt=0;
for(var i=0;i<arr.length;i++){
    var count=0;
    for(var j=0;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++;
        }
    }
    if(max<count){
    max=count;
    mostfreqnt=arr[i];
    }
}
console.log("Most Frequent item ="+ mostfreqnt);
