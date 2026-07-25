function merge(arr:number[], left:number, mid:number, right:number) : void {
    const n1 = mid - left + 1;
    let n2 = right - mid;
    const L:number[] = new Array(n1);
    const R:number[] = new Array(n2);

    for (let i = 0; i< n1; i++) {
        L[i] = arr[left+i];
    }
    for (let j = 0; j<n2; j++) {
        R[j] = arr[mid + 1 + j];
    }
    let i =0;
    let j =0;
    let k = left;

    while ( i<n1 && j<n2) {
        if (L[i]<=R[j]) {
            arr[k] = L[i];
            i++; 
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    while (j<n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr: number[], left: number, right: number): void {
    if (left >= right) {
        return;
    }

    const mid = left + Math.floor((right -   left) / 2);

    mergeSort(arr,left, mid);
    
    mergeSort(arr, mid + 1, right);

    merge(arr, left, mid, right);
}

function printArray(arr:number[]): void {
    console.log(arr.join(","));
}

const array: number[] = [12,11,13,5,6,7];
console.log("Mang ban dau: ");
printArray(array);

mergeSort(array, 0, array.length - 1);
console.log("Mang sau khi sort la: ");
printArray(array);