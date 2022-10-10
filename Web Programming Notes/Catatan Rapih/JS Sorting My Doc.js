
function primitiveSorting(arr){
    for(let i = 0; i < arr.length-1; i++){
        for(let j = 0; j < arr.length-1; j++){
            if(arr[j] > arr[j+1]){
                current = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = current;
            }
        }
    }
    return arr
}
a = [9,6,5,8,4,6,3,7,5,4,1]
console.log(primitiveSorting(a));



function insertionSort(arr) {
    let n = arr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = arr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < arr[j])) {
                // kalo mau decrease order ganti < jadi > di current < arr
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = current;
        }
    return arr;
}


