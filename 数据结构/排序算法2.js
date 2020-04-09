class SortFactory{
	static insertSort(array){
		for(var i = 1;i<array.length;i++){
			var temp = array[i];
			var j = i-1;
			while(j>=0&&temp<array[j]){
				array[j+1]=array[j];
				j--;
			}
			array[j+1]=temp;
		}
		return array;
	}
	static shellSort(array){

	}
	static bubbleSort(array){
		for(var i = 0;i<array.length;i++){
			var isSwap = false;
			for(var j=0;j<array.length-i-1;j++){
				if(array[j]>array[j+1]){
					[array[j],array[j+1]] = [array[j+1],array[j]];
					isSwap  = true;
				}
			}
			if(!isSwap){
				break;
			}
		}
		return array;
	}
	static mergeSort(array,l=0,r=array.length){
		if(r==1){
			return array;
		}
		var mid = Math.floor(array.length/2);
		var left = SortFactory.mergeSort(array.slice(l,mid));
		var right = SortFactory.mergeSort(array.slice(mid,r));
		function merge(left,right){
			var i=0,j=0;
			var result = [];
			while(i<left.length&&j<right.length){
				if(left[i]<right[j]){
					result.push(left[i++]);
				}else{
					result.push(right[j++]);
				}
			}
			result = result.concat(left.slice(i,left.length));
			result = result.concat(right.slice(j,right.length));
			return result;
		}
		return merge(left,right);
	}
	static quickSort(array){
		function sort(array,l=0,r=array.length-1){
			if(l>=r) return;
			var i =l,j=r;
			var base = array[j];
			while(i<j){
				while(i<j&&array[i]<=base){
					i++;
				}
				array[j]=array[i];
				while(j>i&&array[j]>=base){
					j--
				}
				array[i]=array[j];
			}
			array[i] = base;
			sort(array,l,i-1);
			sort(array,i+1,r);
		}
		sort(array);
		return array;
	}
	static selectSort(array){

	}
	static heapSort(array){
		var len =  array.length;
		function buildMaxHeap(arr){
			for(var i = Math.floor(len/2);i>=0;i--){
				heaily(arr,i);
				console.log(array);
			}
		}
		function heaily(arr,i){
			var largest  = i,
				left = i*2+1,
				right = i*2+2;
			if(left<len&&arr[largest]<arr[left]){
				largest = left;
			}
			if(right<len&&arr[largest]<arr[right]){
				largest = right;
			}
			if(largest!=i){
				[arr[i],arr[largest]] = [arr[largest],arr[i]];
				heaily(arr,largest);
			}
		}
		buildMaxHeap(array);//构建大顶堆
		for(var j=len-1;j>=0;j--){
			[array[0],array[j]]=[array[j],array[0]];
			len--;
			heaily(array,0);
		}
		return array;
	}
}
var array = [5,7,3,8,1,9,2,0,4,6,2];
console.log(SortFactory.heapSort(Array.from(array)));