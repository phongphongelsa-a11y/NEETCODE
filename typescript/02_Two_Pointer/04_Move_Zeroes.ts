// ======================== Move Zeroes  ===============================
function Move_Zeroes(nums:number[]) {
/*
    * @problem: [ Move Zeroes | https://leetcode.com/problems/move-zeroes/?envType=problem-list-v2&envId=two-pointers ]
    * @Solution: Two Pointer
    * @Idea: 
    *   Đặt l và r ở đầu, trỏ r đi tìm những số !== 0 để swap 
    * @Complexcity: 
    * - Time: o(n)
    * - Space: o(1) 
*/
    let l=0;
    for (let r = 0; r<nums.length;r++) {
        if (nums[r] !== 0) {
            let temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++;
        }
    }
    return nums;
}
const array:number[] = [1,2,0,0,3];
console.log(Move_Zeroes(array));