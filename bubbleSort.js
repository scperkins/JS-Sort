var nums = [];
for (var x=0; x<100; x++) {
    rand = Math.floor((Math.random()*100)+1);
    nums.push(rand);
}
console.log(nums);


function bubbleSort(nums) {
	var isSorted, temp;
	do {
		isSorted = false;
		for (var i=0; i < nums.length-1; i++) {
			if (nums[i] > nums[i+1]) {
				temp = nums[i];
				nums[i] = nums[i+1];
				nums[i+1] = temp;
				isSorted = true;
			}
		}
	}
	while(isSorted);
} 

bubbleSort(nums);
console.log(nums);
	