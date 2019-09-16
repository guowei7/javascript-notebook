var str = "1 + ( 2 + 3 ) * 4 / 2 - 2";

function priority(lhs,rhs){//lhs小于rhs
	if(rhs == '(')
		return false;
	if(lhs == '+'||lhs=='-')
		return true;
	if((lhs == '*' || lhs == '/') && (rhs == '*' || rhs == '/'))
		return true;
	return false;
}
function getLastArray(str){//获取后缀式(逆波兰式)
	var lastArr = [];
	var stackArr = [];
	var strArr = str.split(' ');
	strArr.forEach(item=>{
		console.log(item);
		console.log(stackArr);
		if(isNaN(item)){//非数字
			if(stackArr.length==0||item=='('){
				stackArr.push(item);
			}else{
				if(item==')'){//如果为右括号，则弹出直到碰到左括号
					while(!(stackArr.length==0||stackArr[stackArr.length-1]=='(')){
						lastArr.push(stackArr.pop());
					}
					stackArr.pop();
				}else{//其他运算符
					if(priority(item,stackArr[stackArr.length-1])){//item比栈顶元素低
						while(!stackArr.length==0){
							lastArr.push(stackArr.pop());
						}
						stackArr.push(item);
					}else{//优先级比栈顶高
						stackArr.push(item);
					}
				}
			}
		}else{
			lastArr.push(Number(item));
		}
	});
	while(!stackArr.length==0){
		lastArr.push(stackArr.pop());
	}
	console.log(lastArr);
}
getLastArray(str);
