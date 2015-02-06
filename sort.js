'use strict';

var arr;

function insertionSortAsc(items) {
    var i, j, key;

    for (j = 1; j < items.length; j++) {
        key = items[j];
        i = j - 1;

        // compare to the cached value (key), not items[j]
        while (i > -1 && items[i] > key) { // change to > to sort DESC
            items[i + 1] = items[i];
            i--;
        }

        items[i + 1] = key; // make sure to get 0 index b/c i = -1
    }

    return items;
}

// arr = randomArray(10, 100);
// console.log(arr);
// insertionSortAsc(arr);
// console.log(arr);

function selectionSortAsc(items) {
    var i, j, key, temp;

    for (j = 0; j < items.length; j++) {
        key = j;

        for (i = j; i < items.length; i++) {
            if (items[i] < items[key]) { // change to > to sort DESC
                key = i;
            }
        }

        temp = items[j];
        items[j] = items[key];
        items[key] = temp;
    }

    return items;
}

// arr = randomArray(10, 100);
// console.log(arr);
// selectionSortAsc(arr);
// console.log(arr);

function mergeSortAsc(arr, p, r) {
    // check recursive base case
    // divide: calculate middle index
    // conquer: sort left have via recursion
    // conquer: sort right half via recursion
    // combine: merge the two halves
    // console.log('arr = ' + arr + '; p = ' + p + '; r = ' + r);
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
        // merge left and right array by taking smallest (or largest) values first
        // console.log('arr = ' + arr + '; p = ' + p + '; r = ' + r);
        var larr = arr.slice(p, q),     // O(n)
            rarr = arr.slice(q, r + 1), // O(n)
            uBound = r + 1,
            i = 0,
            j = 0;

        larr.push(Infinity); // change to -Infinity to sort DESC
        rarr.push(Infinity);

        for (var k = p; k < uBound; k++) {
            if (larr[i] < rarr[j]) { // change to > to sort DESC
                arr[k] = larr[i];
                i++;
            } else {
                arr[k] = rarr[j];
                j++;
            }
        }
    }
}

// arr = randomArray(10, 100);
// console.log(arr);
// mergeSortAsc(arr, 0, arr.length - 1);
// console.log(arr);

//////////////////////
// UTILITY FUNCTIONS
//////////////////////

function randomArray(size, maxValue, allUnique) {
    var arr = [],
        val;
    size = size || 10;
    maxValue = maxValue || size;
    allUnique = (typeof allUnique === 'undefined') ? true : allUnique;

    if (allUnique) {
        pushUnique();
    } else {
        pushValue();
    }

    return arr;

    function pushUnique() {
        while (arr.length < size) {
            val = Math.round(Math.random() * maxValue);
            if (arr.indexOf(val) < 0) {
                arr.push(val);
            }
        }
    }

    function pushValue() {
        for (var i = 0; i < size; i++) {
            arr.push(Math.round(Math.random() * maxValue));
        }
    }
}