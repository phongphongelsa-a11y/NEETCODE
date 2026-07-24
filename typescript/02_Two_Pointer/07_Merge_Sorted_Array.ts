function Merge_Sorted_Array(nums1: number[], m:number, nums2: number[], n:number) : number[] {
    // Tạo array mới
    // Cho i và j chạy trên nums1 và nums2
    // Compare, bé hơn thì push vào array rồi tăng biến
    
    const mergeArray = [];
    let i =0;
    let j =0;
    
    while (i<m&&j<n) {
        if (nums1[i] < nums2[j]) {
            mergeArray.push(nums1[i]);
            i++;
        }
        else {
            mergeArray.push(nums2[j]);
            j++;
        }
    }
    while (i<m) {
        mergeArray.push(nums1[i]);
        i++;
    }
    while (j<n) {
        mergeArray.push(nums2[j]);
        j++;
    }
    console.log(mergeArray);
    return mergeArray;
}

let array1:number[] = [1,2,3,0,0,0];
let m1 : number = 3;
let array2:number[] = [2,5,6];
let n1 :number = 3; 

console.log(Merge_Sorted_Array(array1, m1, array2, n1));