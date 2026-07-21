function Two_Sum_Sorted(numbers:number[], target:number) : number[] {
/**
    * @problem: [ Two Integer Sum II | https://neetcode.io/problems/two-integer-sum-ii/question ]
    * @Solution: Two Pointer
    * @Idea: 
    * 3 case:
    *   > target -> right-- để tìm số nhỏ hơn
    *   < target -> left++ để tìm số lớn hơn
    *   == target -> return left+1, right+1 (Đề bài tính array bắt đầu từ vị trí 1)
    * @Complexcity: 
    * - Time: o(n)
    * - Space: o(1) 
 */


    let left = 0;
    let right = numbers.length-1;
    while (left<right) {
        if (numbers[left] + numbers[right] > target) {
            right--;
        }
        else if (numbers[left] + numbers[right] < target ) {
            left++;
        }
        else {
            return [left+1, right+1];
        }
    }
    return [];
} 

let array = [1,2,3,4];
let tar = 3;
console.log(Two_Sum_Sorted(array,tar));