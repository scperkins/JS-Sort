var nums = [];
	function generateRandNums(){
		var table = document.getElementById('nums');
		table.innerHTML = '';

		for (var x=0; x<99; x++) {
			rand = Math.floor((Math.random()*100)+1); 
		    nums.push(rand);
		    var row = document.createElement('tr');
		    var numbers = document.createElement('td');
		    
		    numbers.appendChild(document.createTextNode(nums[x]));
		    row.appendChild(numbers);
		    table.appendChild(row);
		}
		return nums;
	}

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
		return nums;
	} 


	function show_bubbleSort() {
		var sortedNums = [];
		var sortedNums = bubbleSort(nums); 

		for (var i=0; i <sortedNums.length; i++) {
			var table2 = document.getElementById('sortedNums')
			var row2 = document.createElement('tr')
			var numbers2 = document.createElement('td');

			numbers2.appendChild(document.createTextNode(sortedNums[i]));
			row2.appendChild(numbers2);
			table2.appendChild(row2);

		}
	}