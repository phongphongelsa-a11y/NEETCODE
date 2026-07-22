
// ===================== Contains Duplicate ==============================

function has_Duplicate(arr: number[]): boolean {
/**
    * @problem: [Contains Duplicate | https://neetcode.io/problems/duplicate-integer/question?list=neetcode150]
    * @Solution: Brute Force
    * @Idea: 
    * - For lồng, hai biến i j chạy trên array - kiểm tra mọi trường hợp
    * @Complexcity: 
    * - Time: o(n^2)
    * - Space: o(1)
    * ? Có cách nào giảm so sánh thừa không ? 
 */
    for (let i=0;i<arr.length;i++) {
        for (let j =i+1;j<arr.length;j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;
}


function has_Duplicate_With_Sort(arr:number[], n:number) : boolean {
/**
    * @problem: [Contains Duplicate | https://neetcode.io/problems/duplicate-integer/question?list=neetcode150]
    * @Solution: Sort
    * @Idea: 
    * - Sort -> so sánh a[i] với a[i-1]
    * @Complexcity: 
    * - Time: o(n log n)
    * - Space: o(1)
    * ? Có cách không cần sort ? 
 */
    arr.sort((a,b) => a-b);
    for (let i = 0;i<n;i++) {
        if (arr[i]==arr[i-1]) {
            return true;
        }
    }
    return false;
}

function Duplicate_With_Data_Struct (arr:number[]) : boolean {
/**
    * @problem: [Contains Duplicate | https://neetcode.io/problems/duplicate-integer/question?list=neetcode150]
    * @Solution: Hash Set
    * @Idea: 
    * - Dùng Struct Hash Set (Tập không trùng lặp) 
    * @Complexcity: 
    * - Time: o(n)
    * - Space: o(n) 
 */
    const seen = new Set();
    for (const num of arr) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}
const array:number[] = [1,2,3,4,5,3,4];
console.log(Duplicate_With_Data_Struct(array));
