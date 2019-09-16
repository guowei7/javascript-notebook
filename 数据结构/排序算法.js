// 插入排序
// function InsertSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let temp = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > temp) {
//             arr[j + 1] = arr[j];
//             j--
//         }
//         arr[j + 1] = temp;
//     }
//     return arr;
// }
// var arr = [5, 1, 4, 2, 3];
// console.log(InsertSort(arr))

// //冒泡排序
// function BubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         var isSwap = false;
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 isSwap = true;
//             }
//         }
//         if (!isSwap) {
//             break;
//         }
//     }
//     return arr;
// }
// var arr = [5, 1, 4, 2, 3];
// console.log(BubbleSort(arr));

// //归并排序 递归
// function MergeSort(arr) {
//     var length = arr.length;
//     if (length <= 1) {
//         return arr;
//     }
//     var mid = Math.floor(length / 2);
//     var left = MergeSort(arr.slice(0, mid));
//     var right = MergeSort(arr.slice(mid, length))

//     function merge(left, right) {
//         var result = [];
//         var [l, r] = [0, 0]
//         while (l < left.length && r < right.length) {
//             if (left[l] <= right[r]) {
//                 result.push(left[l]);
//                 l++;
//             } else {
//                 result.push(right[r]);
//                 r++;
//             }
//         }
//         result = result.concat(left.slice(l, left.length));
//         result = result.concat(right.slice(r, right.length));
//         return result;
//     }
//     return merge(left, right);
// }
// var arr = [5, 1, 4, 2, 3];
// console.log(MergeSort(arr));
// //归并排序 迭代
// function mergePass(arr = [], temp = new Array(arr.length), N = arr.length, length = 1) { // 将每个元素看作是相邻的数组长度为1。
//     let t; // 迭代深度。
//     for (t = 0; Math.pow(2, t) < N; t++, length *= 2) { // 每次跳过的长度翻倍。
//         const even = t % 2 === 0; // 复用 arr 和 temp 来回赋值。
//         for (let left = 0; left < N; left += 2 * length) { // 左边数组起始位置 left 从0开始。
//             const middle = left + length < N ? left + length : left; // 右边数组起始位置 middle 就是left + 一个数组长度length 但是不要超过 N 。
//             const right = left + (2 * length) < N ? left + (2 * length) : N; // 右边界 right 就是 left + 两个数组长度。
//             merge(even ? arr : temp, even ? temp : arr, left, middle, right); // 合并每两个相邻的数组。
//         }
//     }
//     merge(arr, temp, 0, Math.pow(2, t - 1), N); // 上面的迭代深度始终少一次在这里补足。
//     arr = temp; // 将稳定的数组赋值给 arr 释放掉 temp 。
//     return arr; // 返回 arr 。
// }

// function merge(arr, temp, left, middle, right) {
//     const leftEnd = middle - 1; // 通过右边数组的起始位置得到左边数组的结束位置。
//     while (left <= leftEnd && middle < right) { // 如果‘指针’没有越界。
//         if (arr[left] > arr[middle]) { // 如果左边数组第一个元素比右边数组第一个元素大。
//             temp[left + middle - leftEnd - 1] = arr[middle++]; // 将右边数组最小的放入有序数组 temp（初始值为空)。
//         } else {
//             temp[left + middle - leftEnd - 1] = arr[left++]; // 将左边数组最小的放入有序数组 temp（初始值为空)。
//         }
//     }
//     while (left > leftEnd && middle < right) { // 如果左边数组放完了，右边数组还有元素。
//         temp[left + middle - leftEnd - 1] = arr[middle++]; // 那么依次将右边数组剩余的元素放入 temp 。
//     }
//     while (left <= leftEnd && middle >= right) { // 如果右边数组放完了，左边数组还有元素
//         temp[left + middle - leftEnd - 1] = arr[left++]; // 那么依次将左边数组剩余的元素放入 temp 。
//     }
// }
// var arr = [5, 1, 4, 2, 3];
// console.log(mergePass(arr));

//基数排序
// var counter = [];
// function radixSort(arr, maxDigit) {
// 	var mod = 10;
// 	var dev = 1;
//     for(var i = 0;i<maxDigit;i++,mod*=10,dev*=10){
//     	for(var j=0;j<arr.length;j++){
//     		var bucket = parseInt((arr[j]%mod)/dev);
//     		if(counter[bucket]==undefined){
//     			counter[bucket] = [];
//     		}
//     		counter[bucket].push(arr[j]);
    		
//     	}
//     	var pos = 0;
//     	for(var j=0;j<counter.length;j++){
//     		var value = null;
//     		if(counter[j]){
//     			while((value=counter[j].shift())!=null){
//     				arr[pos++] = value;
//     			}
//     		}
//     	}
//     }
//     return arr;
// }
// var arr = [10,11,12,7,8,1,20];
// console.log(radixSort(arr,2));
// 快速排序
// function QuickSort(array) {
//     const sort = (arr, left = 0, right = arr.length - 1) => {
//         if (left >= right) {
//             return array;
//         }
//         let i = left;
//         let j = right;
//         const baseVal = arr[j];
//         while (i < j) {
//             while (i < j && arr[i] <= baseVal) {
//                 i++;
//             }
//             arr[j] = arr[i];
//             while (j > i && arr[j] >= baseVal) {
//                 j--;
//             }
//             arr[i] = arr[j];
//         }
//         arr[j] = baseVal;
//         sort(arr, left, j - 1);
//         sort(arr, j + 1, right);
//     }
//     const newArr = array.concat();
//     sort(newArr);
//     return newArr;
// }

// function QuickSort(array) {
//     function sort(arr,left=0,right=arr.length-1){
//     	if(left>=right){
//     		return;
//     	}
//     	var i = left;
//     	var j= right;
//     	var baseVal = arr[j];
//     	while(i<j){
//     		while(i<j&&arr[i]<=baseVal){
//     			i++
//     		}
//     		arr[j]=arr[i];
//     		while(i<j&&arr[j]>=baseVal){
//     			j--;
//     		}
//     		arr[i]=arr[j];
//     	}
//     	arr[i]=baseVal;
//     	sort(arr,left,i-1);
//     	sort(arr,i,right);
//     }
//     sort(array);
//     return array;
// }
// var arr = [5, 1, 4, 2, 3];
// console.log(QuickSort(arr))

// var arr = [5,3,2,4,1,8,6,7];
// function QuickSort(arr,left=0,right=arr.length-1){
// 	var baseVal = arr[right];
// 	var i = left; 
// 	var j= right;
// 	if(i>=j){
// 		return;
// 	}
// 	while(i<j){
// 		while(i<j&&arr[i]<baseVal){
// 			i++;
// 		}
// 		arr[j] =  arr[i];
// 		while(i<j&&arr[j]>baseVal){
// 			j--
// 		}
// 		arr[i] = arr[j];
// 	}
// 	arr[i] = baseVal;
// 	QuickSort(arr,left,i-1);
// 	QuickSort(arr,i+1,right);
// 	return arr;
// }
// console.log(QuickSort(arr))

//选择排序
// function SelectSort(arr){
// 	for(var i = 0;i<arr.length;i++){
// 		for(var j=i;j<arr.length;j++){
// 			if(arr[i]>arr[j]){
// 				[arr[i],arr[j]] = [arr[j],arr[i]];
// 			}
// 		}
// 	}
// 	return arr;
// }
// var arr = [6,4,3,3,5,2,1,-1];
// console.log(SelectSort(arr))
//堆排序
// var len;
// function buildMaxHeap(arr){
// 	len = arr.length;
// 	for(var i = Math.floor(len/2);i>=0;i--){
// 		heapify(arr,i);//调整堆
// 	}
// }
// function heapify(arr,i){
// 	var left = i*2+1;
// 	var right = i*2+2;
// 	var largest = i;
// 	if(left<len&&arr[left]>arr[largest]){
// 		largest = left;
// 	}
// 	if(right<len&&arr[right]>arr[largest]){
// 		largest = right;
// 	}
// 	if(largest!=i){
// 		[arr[i],arr[largest]] = [arr[largest],arr[i]];
// 		heapify(arr,largest);
// 	}

// }
// function heapSort(arr){
// 	buildMaxHeap(arr);//构建大堆
// 	for(var i = len-1;i>0;i--){
// 		[arr[0],arr[i]] = [arr[i],arr[0]];
// 		len--;
// 		heapify(arr,0);
// 	}
// 	return arr;
// }
// var arr = [6,4,3,3,5,2,1,-1];
// console.log(heapSort(arr))
//希尔排序  
// function shellSort(arr){
// 	var len=arr.length;
// 	for(var step=Math.floor(len/2);step>=1;step = Math.floor(step/2)){
// 		for(var i=step;i<len;i++){
// 			insertSortI(arr,step,i);
// 		}
// 	}
// 	return arr;
// }
// function insertSortI(arr,step,i){
// 	var temp = arr[i];
// 	for(var j=i-step;j>=0&&arr[j]>temp;j-=step){
// 		arr[j+step] = arr[j];
// 	}
// 	arr[j+step]=temp;
	
// }
// var arr = [6,4,3,3,5,2,1,-1];
// console.log(shellSort(arr))
//计数排序  
// function CountSort(arr){
// 	var max=arr[0];
// 	var min=arr[0];
// 	for(var i=1;i<arr.length;i++){
// 		if(max<arr[i]){
// 			max =  arr[i];
// 		}
// 		if(min>arr[i]){
// 			min = arr[i];
// 		}
// 	}//确认最大值，最小值
// 	var len = max-min+1;
// 	var Count = Array(len).fill(0);//计数数组
// 	var result = Array(arr.length).fill(0);//返回的结果
// 	for(var j=0;j<arr.length;j++) Count[arr[j]-min]++;//统计，已经进行了排序
// 	for(var i=0;i<len;i++)  Count[i+1]+=Count[i];//对应的排序后的位置
// 	for(var i=arr.length-1;i>=0;i--){
// 		Count[arr[i]-min]--;//排序了一个后计数减一
// 		result[Count[arr[i]-min]] = arr[i];//记录对应位置的对应值
// 	}
// 	return  result;

// }
// var arr = [6,4,3,3,5,2,1,-1];
// console.log(CountSort(arr))
