import { removeListener } from "node:cluster";
// ======================== Remove element  ===============================
function Remove_Element(nums:number[], value:number) : number {
/*
    * @problem: [ Remove Element | https://leetcode.com/problems/remove-element/?envType=problem-list-v2&envId=two-pointers ]
    * @Solution: Two Pointer
    * @Idea: 
    *   Pattern: i và j ở 2 đầu chạy vào
    *   Nếu i !== value thì tăng i để tìm phần tử
    * @Complexcity: 
    * - Time: o(n)
    * - Space: o(1) 
*/
    let i =0;
    let j = nums.length -1;
    while (i<=j) {
        if (nums[i] !== value) {
            i++;
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

function Remove_Element_Fast_Slow(nums:number[], value: number) :number {
    // i: người kiểm tra hàng hóa
    // index: xếp hàng lên kệ
    // nếu nums[i] == val --> đi tiếp --> index giữ nguyên ko tăng
    // nếu nums[i] !== val --> xếp vào chỗ index
    let index = 0;
    for (let i =0;i<nums.length;i++) {
        if (nums[i]!==value) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
}
let array:number[] = [1];
let value = 1;
console.log(Remove_Element(array,value));