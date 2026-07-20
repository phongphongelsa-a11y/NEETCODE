import promptSync from "prompt-sync";
const prompt = promptSync();

function inputArray(n: number): number[] {
    const input = prompt(`Nhap ${n} phan tu: `);
    const arr = input.split(" ").map(Number);
    return arr;
}

function printArray(arr:number[]): void {
    console.log(arr.join(" "));
}


function linearSearch(arr:number[],  x: number) : boolean {
    let found = false;
    for (let i = 0;i<arr.length;i++) {
        if (arr[i]==x) {
            found  = true;
            break;
        }
    }
    return (found ? true : false);
}


function TimChan(arr:number[]) : boolean {
    let found: boolean = false;
    for (let i = 0;i<arr.length;i++) {
        if (arr[i]%2===0) {
            found = true;
            break;
        }
    }
    return (found ? true : false);
}


function Sort(arr:number[]) : boolean {
let sorted: boolean = true;
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>arr[i+1]) {
        sorted = false;
        break;
    }
}
return (sorted ? true : false);
}


function SearchDuplicate(arr:number[], brr:number[]) : boolean {
let duplicate : boolean = false;
for (let i = 0;i<arr.length;i++) {
    for (let j = 0;j<brr.length;j++) {
        if (arr[i]===brr[j]) {
            duplicate = true;
            break;
        }
    }
}

return (duplicate ? true : false);
}

// Remove Duplicate flag
function removeDuplicate (arr:number[]) : number[] {
    const result : number[] = [];
    for (let i = 0;i<arr.length;i++) {
        let isDuplicate: boolean = false;
        for (let j = 0;j<result.length;j++) {
            if (arr[i] == result[j]) {
                isDuplicate = true;
                break;
            }   
        }
        if (!isDuplicate) {
            result.push(arr[i]);
        }
    }
    return result;   
}

// Remove Duplicate visited
function removeDuplicateVisited(arr:number[]) : number[] {
    const visited: boolean[] = new Array(arr.length).fill(false);
    const result: number [] = [];
    for (let i = 0;i<arr.length;i++) {
        if (visited[i]) continue;
        result.push(arr[i]);
        for (let j = i+1;j<arr.length;j++) {
            if (visited[j]) continue;
            if (arr[i] == arr[j]) {
                visited[j] = true;
            }
        }
    }
    return result;
}



// ===================== Contains Duplicate ==============================

function hasDuplicate(arr: number[]): boolean {
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


function hasDuplicateWithSort(arr:number[], n:number) : boolean {
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

function DuplicateWithDataStruct (arr:number[]) : boolean {
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
