function mincost(arr)
{ 
//write your code here
// return the min cost
	//we'll try that n2logn wala apprach..
	let ans=0;
	arr.sort((a,b)=>b-a);
	while(arr.length>1){
		let last=arr[arr.length-1];
		let secLas=arr[arr.length-2];
		ans+=last+secLas;
		arr.splice(arr.length-2);
		arr.push(last+secLas);
		arr.sort((a,b)=>b-a);
	}

	return ans;
  
}

module.exports=mincost;
