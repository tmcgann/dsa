'use strict';

function insertionSortAsc(items) {
	var i, j, key;

	for (j = 1; j < items.length; j++) {
		key = items[j];
		i = j - 1;

		while (i > -1 && items[i] > key) { // compare to the cached value (key), not items[j]
			items[i + 1] = items[i];
			i--;
		}

		items[i + 1] = key; // make sure to get 0 index b/c i = -1
	}

	return items;
}

function insertionSortDesc(items) {
	var i, j, key;

	for (j = 1; j < items.length; j++) {
		key = items[j];
		i = j - 1;

		while (i > -1 && items[i] < key) {
			items[i + 1] = items[i];
			i--;
		}

		items[i + 1] = key;
	}

	return items;
}

function selectionSortAsc(items) {
	var i, j, key, temp;

	for (j = 0; j < items.length; j++) {
		key = j;

		for (i = j; i < items.length; i++) {
			if (items[i] < items[key]) {
				key = i;
			}
		}

		temp = items[j];
		items[j] = items[key];
		items[key] = temp;
	}

	return items;
}

function selectionSortDesc(items) {
	var i, j, key, temp;

	for (j = 0; j < items.length; j++) {
		key = j;

		for (i = j; i < items.length; i++) {
			if (items[i] > items[key]) {
				key = i;
			}
		}

		temp = items[j];
		items[j] = items[key];
		items[key] = temp;
	}

	return items;
}

function mergeSortAsc(arr, p, r) {
    // check recursive base case
    // divide: calculate middle index
    // conquer: sort left have via recursion
    // conquer: sort right half via recursion
    // combine: merge the two halves
    if (p < r) {
        var q = Math.ceil((p + r) / 2);
        mergeSortAsc(arr, p, q - 1);   // 0, 2
        mergeSortAsc(arr, q , r);      // 3, 5
        merge(arr, p, q, r);        // 0, 3, 5
    }

	function merge(arr, p, q, r) {
	    // copy left half to new array
	    // copy right half to new array
	    // add sentinel values
	    // take smallest values from stacks and place in original stack
        console.log('arr = ' + arr + '; p = ' + p + '; r = ' + r);
	    var larr = arr.slice(p, q),     // O(n)
	        rarr = arr.slice(q, r + 1), // O(n)
	        uBound = r + 1,
	        i = 0,
	        j = 0;

	    larr.push(Infinity);
	    rarr.push(Infinity);

	    for (var k = p; k < uBound; k++) {
	        if (larr[i] < rarr[j]) {
	            arr[k] = larr[i];
	            i++;
	        } else {
	            arr[k] = rarr[j];
	            j++;
	        }
	    }
	}
}

// var arr = [6, 5, 4, 3, 2, 1];
// console.log(arr);
// mergeSortAsc(arr, 0, arr.length - 1);
// console.log(arr);