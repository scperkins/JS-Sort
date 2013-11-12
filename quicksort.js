
function swap(nums, firstIndex, secondIndex) {
	var temp = nums[firstIndex];
	nums[firstIndex] = nums[secondIndex];
	nums[secondIndex]= temp; 
}

function partition(nums, left, right) {

	var pivot = nums[Math.floor((right+left)/2)], 
	i = left,
	j = right;

	while (i<j) {

		while (nums[i] < pivot) {
			i++;
		}

		while (nums[j] > pivot){
			j--;
		}

		if (i <= j){
			swap(nums, i, j);

			//change indexes to continue loop
			i++;
			j--;
		}

	} //end while
	return i;
}

function quicksort(nums, left, right) {
	var index;

	if (nums.length > 1) {
		left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? nums.length - 1 : right;

        // split up the entire array
        index = partition(nums, left, right);

	    // if the returned index
	    if (left < index - 1) {
	        quicksort(nums, left, index - 1);
	    }

	    if (index < right) {
	        quicksort(nums, index, right);
	    }

	}

    return nums;

}

function show_quicksort() {
		var sortedNums = [];
		var sortedNums = quicksort(nums); 

		for (var i=0; i <sortedNums.length; i++) {
			var table2 = document.getElementById('sortedNums')
			var row2 = document.createElement('tr')
			var numbers2 = document.createElement('td');

			numbers2.appendChild(document.createTextNode(sortedNums[i]));
			row2.appendChild(numbers2);
			table2.appendChild(row2);

		}
}