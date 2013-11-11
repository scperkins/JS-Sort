
function swap(items, firstIndex, secondIndex) {
	var temp = items[firstIndex];
	items[firstIndex] = items[secondIndex];
	items[secondIndex]= temp; 
}

function partition(items, left, right) {

	var pivot = items[Math.floor((right+left)/2)], 
	i = left,
	j = right;

	while (i<j) {

		while (items[i] < pivot) {
			i++;
		}

		while (items[j] > pivot){
			j--;
		}

		if (i <= j){
			swap(items, i, j);

			//change indexes to continue loop
			i++;
			j--;
		}

	} //end while
	return i;
}

function quicksort(items, left, right) {
	var index;

	if (items.length > 1) {
		left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        // split up the entire array
        index = partition(items, left, right);

	    // if the returned index
	    if (left < index - 1) {
	        quickSort(items, left, index - 1);
	    }

	    if (index < right) {
	        quickSort(items, index, right);
	    }

	}

    return items;

}