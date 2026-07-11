import { asyncWrapProviders } from "node:async_hooks";
import promptSync from "prompt-sync";
const prompt = promptSync();



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




function inputArray(n: number): number[] {
    const input = prompt(`Nhap ${n} phan tu: `);
    const arr = input.split(" ").map(Number);
    return arr;
}

function printArray(arr:number[]): void {
    console.log(arr.join(" "));
}
// Bructe Force Duplicates
// Time: o(n^2);
// Space: o(1);
function hasDuplicate(arr: number[]): boolean {
    for (let i=0;i<arr.length;i++) {
        for (let j =i+1;j<arr.length;j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;
}

// Sort Duplicates
// Time: O(nlogn+m);
// Space: O(1);
function hasDuplicateWithSort(arr:number[], n:number) : boolean {
    arr.sort((a,b) => a-b);
    for (let i = 0;i<n;i++) {
        if (arr[i]==arr[i-1]) {
            return true;
        }
    }
    return false;
}

// Hash Set Duplicates
// Time: O(n);
// Space: O(n);
function DuplicateWithDataStruct (arr:number[]) : boolean {
    const seen = new Set();
    for (const num of arr) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
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


// isAnagram Bructe Force
// Time: o(n+m);
// Space: o(1);
function isAnagram(s: string, t: string) : boolean {
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
// isAnagram Sort
// Time: o(nlogn+mlogm)
// Space: o(1);
function isAnagramWithSort(s:string, t:string) : boolean {
    if (s.length!= t.length) return false;

    let sSort = s.split('').sort().join();
    let tSort = t.split('').sort().join();

    return sSort == tSort;
}
// isAnagram HashMap
// Time: o(n+m);
// Space: o(n+m);
function isAnagramWithMap(s: string, t:string) : boolean {
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

// isAngramWithCount
// Time: o(s+t);
// space: o(n);
function isAnagramWithCount(s:string, t:string) : boolean {
    if (s.length!=t.length) return false;

    const map = new Map<string,number>();
    for (const letter of s) {
        map.set(letter, (map.get(letter)||0)+1);
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


// Bructe Force groupAnagram
// Time: o(n)^2
// Space: o(n+m)
function groupAnagram(strs: string[]) : string[][] {
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
// hashMapSorted(key) groupAnagram
// Time: o(n^2)
// Space: o(n)
function groupAngramWithHashMap(strs:string[]) : string[][] {
    const result = new Map();
    for (let s of strs) {
        let sortedS = s.split('').sort().join('');
        if (!result.has(sortedS)) {
            result.set(sortedS,[]);
        }
        result.get(sortedS).push(s);
    }
    return Array.from(result.values());
}


const AZ= 'abcdefghijklmnopqrstuvwxyz';
function getKey (str: string): string {
    const AZ= 'abcdefghijklmnopqrstuvwxyz';
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

// solution 2
function groupAnagrams(strs:string[]): string[][] {
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

// TopK Brutce Force 
// Time:o(n^2)+o(k*n)
// Space: o(n)+o(n)+o(n)+o(k) = o(3n+k)
function BrutceForceTopK(arr:number[],k:number) {
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
    const count = new Map<number,number>();
    for (const num of arr) {
        count.set(num, (count.get(num)??0)+1);
    }
    const array = Array.from(count.entries());
    array.sort((a,b)=>b[1]-a[1]);
    return array.slice(0,k).map(pair=>pair[0]);
}

function HashMapBucketSortTopK(arr:number[],k:number) {
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

