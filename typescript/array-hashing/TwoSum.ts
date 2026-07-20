// ======================= Two Sum =====================================

function twoSum(arr:number[], target:number) {
/**
    * @problem: [Two Sum | https://neetcode.io/problems/two-integer-sum/question]
    * @Solution: Brute Force
    * @Idea: 
    * - For lồng - kiểm tra mọi trường hợp - return index của i && j nếu a[i] + a[j] == target
    * @Complexcity: 
    * - Time: o(n^2)
    * - Space: o(1) 
 */
    for (let i = 0;i<arr.length;i++) {
        for (let j =i+1;j<arr.length;j++) {
            if (arr[i]+arr[j]==target) {
                return {i,j}
            }
        }
    }
    return [];
} 



function twoSumWithDataStruct(arr:number[], target:number) {
/**
    * @problem: [Two Sum | https://neetcode.io/problems/two-integer-sum/question]
    * @Solution: Hash Map
    * @Idea: 
    * Key: nums; Value: Index
    * - Đẩy vào Map -> diff = target - nums[i] -> tìm diff -> nếu có thì return i && j
    * @Complexcity: 
    * - Time: o(n)
    * - Space: o(n) 
 */
    const prevMap = new Map <number,number>();
    for (let i =0;i<arr.length;i++) {
        let diff:number = target - arr[i];
        if (prevMap.has(diff)) {
            return [prevMap.get(diff),i];
        }
        prevMap.set(arr[i],i);
    }
    return [];
}