
// ======================== Reverse Array  ===============================
function Reverse_Array(nums:number[]) : number[] {
    let left = 0;
    let right = nums.length -1;
    while (left<right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--; 
    }
    return nums;
}

const array:number[] = [1,2,3,4,5];
console.log(Reverse_Array(array));