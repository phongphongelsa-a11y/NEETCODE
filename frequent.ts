import PromptSync from "prompt-sync";
const prompt = PromptSync();
function Duplicate(arr:number[]) : boolean{
    const seen = new Set();
    for (const num of arr) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

function ValidAnagram(s:string, t:string) : boolean {
    if (s.length!= t.length) return false;
    const countS = new Map<string,number>();
    const countT = new Map<string,number>();
    for (let i = 0;i<s.length;i++) {
        countS.set(s[i], (countS.get(s[i])??0)+1);
        countT.set(t[i], (countT.get(t[i])??0)+1);
    }
    for (const [key,value] of countS) {
        if (countT.get(key)!=value) {
            return false;
        }
    }
    return true;
}

function twoSum(arr:number[], target:number) {
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


function groupAnagram(strs:string[]) : string[][] {
    const result = new Map<string,string[]>();
    for (let s of strs) {
        let sorted = s.split('').sort().join('');
        if (!result.has(sorted)) {
            result.set(sorted,[]);
        }
        result.get(sorted)!.push(s);
    }
    return Array.from(result.values());
}
let s:string[] = ["cat", "act", "are", "arre","rea"];

console.log(groupAnagram(s));
