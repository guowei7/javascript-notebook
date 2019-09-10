//唱片
// function dosomething(n,s,l){
//     var maxX = Math.floor(l/(s+1));
//     for(var x = maxX;x>=1;x--){
//         if(((s+1)*x-1)<=l&&x%13!=0){
//             maxX = x;
//             break;
//         }
//     }
//     console.log(maxX);
//     var res=Math.ceil(n/maxX);
//     if(res===1 && n%13 === 0){
//         res++
//     };
//     return res;
// }
// console.log(dosomething(27,1,27));

// var userNum = "5";
// var userK = "1 2 3 3 5";
// var count = "3";
// var arr = [
//     "1 2 1",
//     "2 4 5",
//     "3 5 3"
// ]
// userNum = Number(userNum);
// userK = userK.split(' ').map(item => { return Number(item) });
// count = Number(count);
// var hashK = {};
// for (var i = 1; i <= userK.length; i++) {
//     if (!hashK[userK[i - 1]]) {
//         hashK[userK[i - 1]] = [i];
//     } else {
//         hashK[userK[i - 1]].push(i);
//     }
// }
// console.log(hashK);
// while (count > 0) {
//     var selectStr = arr[3 - count];
//     var selectArr = selectStr.split(' ').map(item => { return Number(item) });
//     var selectedRange = hashK[selectArr[2]];
//     console.log(getNumFromArray(selectedRange, selectArr[0], selectArr[1]));
//     count--;
// }

// function getNumFromArray(arr, l, r) {
//     var total = 0;
//     if (arr) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] >= l && arr[j] <= r) {
//                 total++;
//             }
//         }
//     }
//     return total;
// }
//手串
// var nmc = "5 2 3".split(' ').map(item=>{return Number(item);});
// var n = nmc[0];
// var m = nmc[1];
// var c = nmc[2];
// var input = [
//     "3 1 2 3",
//     "0",
//     "2 2 3",
//     "1 2",
//     "1 3"
// ]
// var hashColors = {};
// for(var i = 1;i<=n;i++){
//     var ball = input[i-1].split(' ').map(item=>{return Number(item);});
//     if(ball[0]!=0){
//         for(var j=1;j<ball.length;j++){
//             if(!hashColors[ball[j]]){
//                 hashColors[ball[j]] = [i];
//             }else{
//                 hashColors[ball[j]].push(i)
//             }
//         }
//     }
// }
// var total = 0;
// for(var item in hashColors){
//     var temp = hashColors[item];
//     var isVaild = false;
//     if(temp.length>=2){
//         temp.map((it,index)=>{
//             if(index == temp.length-1){
//                 if(n+(temp[0]-temp[index])<m){
//                     isVaild= true;
//                 }
//             }else{
//                 if(temp[index+1]-temp[index]<m){
//                     isVaild= true;
//                 }
//             }
//         })
//     }
//     if(isVaild == true){
//         total++;
//     }
// }
// console.log(total);
// 数字字典序
//   
function getMnumFromDirSort(n,m){
    var DirSort = [];
    for(var i=1;i<=n;i++){
        if(i<10){
            DirSort.push(i);
        }else{
            if(i%10==0){//最后一位等于0
                var per = DirSort.indexOf(i/10);
                DirSort.splice(per+1,0,i);
            }else{//最后一位不等于0
                var per = DirSort.indexOf(i-1);
                DirSort.splice(per+1,0,i);
            }
        }
    }
    return DirSort[m-1];
}
console.log(getMnumFromDirSort(11,2));
