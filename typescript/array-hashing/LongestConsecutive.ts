// ======================== Longest Consecutive Sequence  ===============================


function longestConsecutive(nums:number[]) : number {
/**
    * @problem: Longest Consecutive Sequence | https://neetcode.io/problems/valid-sudoku/question?list=neetcode150 ]
    * @Solution:  Longest Consecutive Sequence Bructe Force
    * @Idea: 
    *   Duyệt từng num trong array
    *   Tự hỏi rằng 1? có số nào trước đó +1 bằng 2 trong array ko, có thì tăng current và currentLength; 2? có 3 trong array ko, 3? có 4 trong array ko .....
    *   Check hết array ko còn số nào thì đó là chuỗi liên tiếp dài nhất
    *   Đếm chiều dài chuỗi liên tiếp đó
    *   Nếu dài hơn kết quả hiện tại thì cập nhập Max
    *   return maxLength
    * @Complexcity: 
    * - Time: o(n^2)
    * - Space: o(n) 
 */

    if (nums.length == 0) return 0;
    if (nums.length == 1) return 1;
    let maxLength = 0;
    for (const num of nums) {
        let current = num;
        let currentLength = 1;
        while (Contain(nums, current+1)) {
            current++;
            currentLength++;
        }
        maxLength = Math.max(maxLength,currentLength)
    } 
    return maxLength;
    }
function Contain(nums:number[], target:number ) :boolean {
    for (const num of nums) {
        if (num==target) {
            return true;
        }
    }
    return false;
}
