import { removeListener } from "node:cluster";
// ======================== Remove element  ===============================
function Remove_Element(nums:number[], value:number) : number {
/*
    * @problem: [ Remove Element | https://leetcode.com/problems/remove-element/?envType=problem-list-v2&envId=two-pointers ]
    * @Solution: Two Pointer
    * @Idea: 
    *   Đặt i ở đầu và j ở cuối, i  
    * @Complexcity: 
    * - Time: o(n)
    * - Space: o(1) 
*/
    let i =0;
    let j = nums.length -1;
    while (i<=j) {
        if (nums[i] !== value) {
            i++
        }
        else {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j--;
        }
    }
    return i;

}
let array:number[] = [1];
let value = 1;
console.log(Remove_Element(array,value));