function dosomething(n,s,l){
    var maxX = Math.floor(l/(s+1));
    for(var x = maxX;x>=1;x--){
        if(((s+1)*x-1)<=l&&x%13!=0){
            maxX = x;
            break;
        }
    }
    console.log(maxX);
    var res=Math.ceil(n/maxX);
    if(res===1 && n%13 === 0){
        res++
    };
    return res;
}
console.log(dosomething(27,1,27));
