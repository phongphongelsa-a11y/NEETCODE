import { asyncWrapProviders } from "node:async_hooks";
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



// ======================= Vaid Anagram ===============================

function isAnagram(s: string, t: string) : boolean {
/**
    * @problem: [Vail Anagram | https://neetcode.io/problems/is-anagram/question?list=neetcode150 ]
    * @Solution: Brute Force
    * @Idea: 
    * - Kĩ thuật counting array - tạo array size (a-z) - ( +1, -1 triệt tiêu lẫn nhau) - array.fill(0) thì return true, ngược lại fasle 
    * @Complexcity: 
    * - Time: o(s+t)
    * - Space: o(n) 
 */
    if (s.length!= t.length) return false;
    let a = new Array(26).fill(0);
    for (let i = 0;i<s.length;i++) {
        let cs = s[i].charCodeAt(0) - 97;
        a[cs] = a[cs] +1;
        cs = t[i].charCodeAt(0) - 97;
        a[cs] = a[cs] -1;        
    }
    for (let i = 0;i<a.length;i++) {
        if (a[i]!=0) {
            return false;
        }
    }
    return true;
}




function isAnagramWithSort(s:string, t:string) : boolean {
/**
    * @problem: [Vail Anagram | https://neetcode.io/problems/is-anagram/question?list=neetcode150 ]
    * @Solution: Sort
    * @Idea: 
    * - Sort 2 chuỗi -> so sánh
    * @Complexcity: 
    * - Time: o(n log n + m log m)
    * - Space: o(1) 
    * ? Có cách nào không cần sort ? 
 */
    if (s.length!= t.length) return false;

    let sSort = s.split('').sort().join();
    let tSort = t.split('').sort().join();

    return sSort == tSort;
}



function isAnagramWithCount(s:string, t:string) : boolean {
/**
    * @problem: [Vail Anagram | https://neetcode.io/problems/is-anagram/question?list=neetcode150 ]
    * @Solution: Hash Map
    * @Idea: 
    * - Counting bằng Map - key: char; value: tần suất  
    * @Complexcity: 
    * - Time: o(s+t)
    * - Space: o(n) 
 */
    if (s.length!=t.length) return false;

    const map = new Map<string,number>();
    for (const letter of s) {
        map.set(letter, (map.get(letter)??0)+1);
    }
    for (const letter of t) {
        if (!map.has(letter)) return false;
        map.set(letter, (map.get(letter)??0)-1);
    }
    for (const value of map.values()) {
        if (value!==0) return false;
    }
    return true;
}



function isAnagramWithMap(s: string, t:string) : boolean {
/**
    * @problem: [Vail Anagram | https://neetcode.io/problems/is-anagram/question?list=neetcode150 ]
    * @Solution: Hash Map
    * @Idea: 
    * - Tạo 2 Map
    * - Key: char; value: tần suất xuất hiện của char trong string
    * - Nếu 2 Map value !- nhau thì return false, ngược lại true
    * @Complexcity: 
    * - Time: o(n)
    * - Space: o(S+T) 
 */
    if (s.length!=t.length) return false;
    const countS = new Map<string,number>();
    const countT = new Map<string,number>();
    for (let i = 0;i<s.length;i++) {
        countS.set(s[i],(countS.get(s[i])??0)+1);
        countT.set(t[i],(countT.get(t[i])??0)+1);
    }

    for (const[key,value] of countS) {
        if (countT.get(key)!=value) {
            return false;
        }
    }
    return true;    
}

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



// ======================== Group Anagram ===============================


function groupAnagram(strs: string[]) : string[][] {
/**
    * @problem: [GroupAnagram | https://neetcode.io/problems/anagram-groups/question?list=neetcode150 ]
    * @Solution: Brute Force
    * @Idea: 
    * - For lồng để tìm các anagram
    * - Dùng mảng đánh dấu "#"
    * - Dùng lại function isAnagram
    * @Complexcity: 
    * - Time: o(n^2)
    * - Space: o(n*m) 
 */
    if (strs.length === 0) return [[]];
    else if (strs.length === 1) return [[strs[0]]];
    const result: string[][] = [];  
    for (let i = 0;i<strs.length;i++) {
        if (strs[i]=="#") continue;
        let resultEl: string[] = [];
        resultEl.push(strs[i]);
        for (let j = i+1;j<strs.length;j++) {
            if (isAnagramWithMap(strs[i],strs[j])) {
                resultEl.push(strs[j]);
                strs[j] = "#";
            }
        }
        result.push(resultEl);
    }
    return result;
} 

function groupAngramWithHashMap(strs:string[]) : string[][] {
/**
    * @problem: [GroupAnagram | https://neetcode.io/problems/anagram-groups/question?list=neetcode150 ]
    * @Solution: Hash Map + Sort
    * @Idea: 
    * - Các anagram sau khi sort sẽ đều giống nhau
    * - Key là các string đã được sort, value là các string gốc cần return
    * @Complexcity: 
    * - Time: o(n * n log n)
    * - Space: o(n) 
 */
    const result = new Map();
    for (let s of strs) {
        let sortedS = s.split('').sort().join('');  // Split: chia chuỗi thành char -> sort -> Join: nhóm
        if (!result.has(sortedS)) {     // Tìm trong map, khác thì thêm set làm key
            result.set(sortedS,[]);
        }
        result.get(sortedS).push(s);    // Nếu có thì push chuỗi gốc vào value;
    }
    return Array.from(result.values());
}


function getKey (str: string): string {
    const AZ= 'abcdefghijklmnopqrstuvyz';
    const count = new Map<string,number>();
    
    for (const char of AZ) {
        count.set(char,0);
    }

    for (const char of str) {
        count.set(char,count.get(char)!+1);
    }

    let result = '';
    for (const char of AZ) {
        const freq = count.get(char)!;
        if (freq!=0) {
            result += char + freq.toString();
        }
    }
    return result;    
}
function groupAnagramWithAz(strs:string[]) : string[][] {
/**
    * @problem: [GroupAnagram | https://neetcode.io/problems/anagram-groups/question?list=neetcode150 ]
    * @Solution: Hash Map
    * @Idea:
    *  Khởi tạo một Frequency Map gồm các chữ cái từ a-z.fill 0.
    *  Đếm số lần xuất hiện của từng ký tự trong chuỗi input và set vào Map
    *  Duyệt lại bảng chữ cái theo thứ tự chuẩn, nối các ký tự có tần suất > 0 cùng số lượng của chúng thành một chuỗi kết quả (Ví dụ: "a1b2").
    *  Các từ là Anagram của nhau sẽ ra 1 cùng một chuỗi kết quả.
    * @Complexcity: 
    * - Time: o(n * m)
    * - Space: o(n) 
 */
    const m = new Map<string,string[]>();
    for (const str of strs) {
        const key = getKey(str);
        if (!m.has(key)) {
            m.set(key,[str]);
        }
        m.get(key)!.push(str);
    }
    return Array.from(m.values());
}


function groupAnagrams(strs:string[]): string[][] {
/**
    * @problem: [GroupAnagram | https://neetcode.io/problems/anagram-groups/question?list=neetcode150 ]
    * @Solution: Hash Map + Array Count Frequent
    * @Idea: 
    *  Khởi tạo một đếm count gồm 26 phần tử, ban đầu toàn 0
    *  Tính toán index = bằng bảng mã ASCII. lấy ASCII của kí tự đó trừ đi ASCII kí tự 'a' (vd: 'c' - 'a', 'b'-'a')
    *  Key là chuỗi đại diện cho số lượng từng ký tự. Ví dụ: từ "aab" có mảng [2, 1, 0]
    *  Các từ là Anagram của nhau sẽ ra 1 cùng một chuỗi kết quả.
    *  Chuyển mảng các số [2, 1, 0] thành chuỗi '2,1,0' để làm key
    *  Nếu chưa có thì set key - nếu có thì 2 Anagram
    *  Return Value trong Map
    * @Complexcity: 
    * - Time: o(n * m)
    * - Space: o(n*m) 
 */
    const res = new Map();
    const count = new Array(26).fill(0);
    for (let s of strs) {
        for (let c of s) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        const key = count.join(',');
        if (!res.has(key)) {
            res.set(key, []);
        }
        res.get(key).push(s);
    }
    return Array.from(res.values());
}


// ======================== Top K  ===============================

function BrutceForceTopK(arr:number[],k:number) {
/**
    * @problem: [Top K Frequent Element | https://neetcode.io/problems/top-k-elements-in-list/question?list=neetcode150 ]
    * @Solution: Bructe Force Top K
    * @Idea: 
    *   Tạo 2 array đại diện cho unique và frequent của element 
    *   Push element vào array unique và mảng frequent vào cùng 1 lúc tránh lệch index
    *   Ta thu được 2 array unique và frequent cùng index
    *   Tạo 1 array result để push phần tử tại max frequent (result.push(unique[frequent]));
    *   Tìm max theo k lần trong mảng frequent vì cùng index nên ánh xạ lên mảng unique (tìm được 1 max thì đánh dấu lại bằng -1)
    *   return result
    * @Complexcity: 
    * - Time: o(n^2)
    * - Space: o(n+n+n) = o(3n) = o(n) 
 */
    const unique:number[] = [];
    const frequent:number[] =[];
    const visited : boolean[] = new Array(arr.length).fill(false);

    for (let i = 0;i<arr.length;i++) {
        if (visited[i]) continue;
        unique.push(arr[i]);
        let frequentEl = 1;
        for (let j = i+1;j<arr.length;j++) {
            if (visited[j]) continue;
            if (arr[i]==arr[j]) {
                frequentEl++;
                visited[j] = true;
            }
        }
        frequent.push(frequentEl);
    }

    const result : number[] = []

    for (let i = 0;i<k;i++) {
        let maxVal = frequent[0];
        let maxIndex = 0;
        for (let j = 1; j<frequent.length;j++) {
            if (frequent[j] > maxVal) {
                maxVal = frequent[j];
                maxIndex = j;
            }
        }
        result.push(unique[maxIndex]);
        frequent[maxIndex] = -1; 
    }
    return result;    
}

function HashMapTopK(arr:number[],k:number) {
/**
    * @problem: [Top K Frequent Element | https://neetcode.io/problems/top-k-elements-in-list/question?list=neetcode150 ]
    * @Solution: Hash Map
    * @Idea: 
    *   Build 1 Hash Map lưu frequent của từng element (key là num trong nums, value là tần suất xuất hiện 
    *   Thu được 1 Map có tần suất xuất hiện của num
    *   Chuyển Map thành array
    *   [
            [2,3]
            [3,1]
            [4,2]
    *   ] 
    *   Sort a[1] với b[1];
    *   Dùng hàm slice cắt array từ 0 - K. map(pair=> pair[0]) #tức là lấy phần tử [0] trong array#
    * @Complexcity: 
    * - Time: o(n log n )
    * - Space: o(n) 
 */
    const count = new Map<number,number>();
    for (const num of arr) {
        count.set(num, (count.get(num)??0)+1);
    }
    const array = Array.from(count.entries());
    array.sort((a,b)=>b[1]-a[1]);
    return array.slice(0,k).map(pair=>pair[0]);
}

function HashMapBucketSortTopK(arr:number[],k:number) {
/**
    * @problem: [Top K Frequent Element | https://neetcode.io/problems/top-k-elements-in-list/question?list=neetcode150 ]
    * @Solution: Bucket Sort
    * @Idea: 
    *   
    *  
    * @Complexcity: 
    * - Time: o(n log n )
    * - Space: o(n) 
 */
    const count = new Map<number,number>();
    const freq:number[][] = Array.from(
        {length: arr.length +1},
        () => []
    );
    // frequent Element
    for (const n of arr) {
        count.set(n,(count.get(n)??0)+1);
    }
    //bucket sort
    for (const [n,f] of count ) {
        freq[f].push(n);
    }
    const result : number[] = [];
    for (let i = freq.length-1; i>0 ; i--) {
        for (const n of freq[i]) {
            result.push(n);
            if (result.length === k) {
                return result;
            }
        }
    }
}


// ======================== Top K  ===============================

function encode(strs: string) {
/**
    * @problem: [Encode and Decode Strings] | https://neetcode.io/problems/string-encode-and-decode/question?list=neetcode150 ]
    * @Solution: mã hóa chuỗi input và giải mã chuỗi đã mã hóa
    * @Idea: 
    *   Danh sách chuỗi ký tự, mã hóa chuỗi kí tự thành một chuỗi duy nhất trong hàm encode
    *   Nhân vào chuỗi được mã hóa bởi hàm encode, dịch ngược lại thành danh sách chuỗi ban đầu
    *   [độ dài] + "#" + [chuỗi]
    *   # là mốc
    *   2#ab1#b1#c3#abc
    * @Complexcity: 
    * - Time: o(n)
    * - Space: o(n) 
 */
    let res = [];
    let i = 0;
    for (let s of strs) {
        res.push(String(s.length), '#', s);
    }
    return res.join('');
}

function decode(str:string) {
    let res = [];
    let i = 0;
    while (i < str.length) {
        let j = i;
        while (str[j] !== '#') {
            j++;
        }
        let length = parseInt(str.substring(i, j));
        i = j + 1;
        j = i + length;
        res.push(str.substring(i, j));
        i = j;
    }
    return res;
}


// ======================== Sudoku  ===============================

function isValidSudoku(board:string[]) : boolean {
/**
    * @problem: [Valid Sudoku] | https://neetcode.io/problems/valid-sudoku/question?list=neetcode150 ]
    * @Solution:  Vaild Sudoku
    * @Idea: 
    *   Duyệt từng row, column kiểm tra trùng lặp
    *   Duyệt từng box kiểm tra trùng lặp 
    *   Tạo set cho từng row, column - nếu has board[i][j] trả về false - ko thì add vào set
    *   Column tương tự
    *   Box lấy các vị trí bắt đầu của từng box (bài này cho cố định kích thước là 9 nên có thể tính luôn vị trí bắt đầu cho từng box)
    *   Tạo set cho từng box và kiểm tra trùng lặp
    *   Nếu case đi hết mà không trả về false ở lần duyệt nào thì cuối cùng có thể trả về true
    * @Complexcity: 
    * - Time: o(n^2)
    * - Space: o(n) 
 */
        // duyệt từng Row
        for (let i = 0;i<9;i++) {
            let seen = new Set();
            for (let j = 0;j<9;j++) {
                if (board[i][j]==".") continue;
                if (seen.has(board[i][j])) {
                    return false;
                }
                seen.add(board[i][j]);
            }
        }

        // duyệt từng Column
        for (let j=0;j<9;j++) {
            let seen = new Set();
            for (let i=0;i<9;i++) {
                if (board[i][j]==".") continue;
                if (seen.has(board[i][j])) {
                    return false;
                }
                seen.add(board[i][j]);
            }
        }

        // duyệt từng box
        const start = [
            [0,0], [0,3], [0,6],
            [3,0], [3,3], [3,6],
            [6,0], [6,3], [6,6],
        ];

        for (const [startRow, startCol] of start ) {
            let seen = new Set();
            for (let i = 0;i<3;i++) {
                for (let j = 0; j<3;j++) {
                    let r = startRow +i;
                    let c = startCol +j;
                    let val = board[r][c];
                    if (val == ".") continue;
                    if (seen.has(board[r][c])) {
                        return false;
                    }
                    seen.add(board[r][c]);
                }
            }
        }
        return true;
    }


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

const n = [9,1,4,7,3,-1,0,5,8,-1,6];
console.log(longestConsecutive(n));

// let n = Number(prompt("Nhap n: "));
// while (n<0) {
//     console.log("Nhap lai n: ");
//     n = Number(prompt("Nhap n: "));

// }
// let k = Number(prompt("Nhap k: "));
// let array:number[] = inputArray(n);
// console.log(BrutceForceTopK(array,k));


// import promptSync from "prompt-sync";
// const prompt = promptSync();
// const input = prompt("Nhap string: ");
// const strs: string[] = input.split(" ");
// console.log(groupAnagram(strs));

// let n = Number(prompt("Nhap n: "));
// while (n<0) {
//     console.log("Nhap lai n: ");
//     n = Number(prompt("Nhap n: "));
// }
// const array = inputArray(n);

// prinArray(array);
// console.log(hasDuplicateWithSort(array));
// prinArray(array);

