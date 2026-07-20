import { asyncWrapProviders } from "node:async_hooks";


import promptSync from "prompt-sync";
const prompt = promptSync();
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



function input_Array(n: number): number[] {
    const input = prompt(`Nhap ${n} phan tu: `);
    const arr = input.split(" ").map(Number);
    return arr;
}

function print_Array(arr:number[]): void {
    console.log(arr.join(" "));
}


function linear_Search(arr:number[],  x: number) : boolean {
    let found = false;
    for (let i = 0;i<arr.length;i++) {
        if (arr[i]==x) {
            found  = true;
            break;
        }
    }
    return (found ? true : false);
}


function Tim_Chan(arr:number[]) : boolean {
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


function Search_Duplicate(arr:number[], brr:number[]) : boolean {
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
function remove_Duplicate (arr:number[]) : number[] {
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
function remove_Duplicate_Visited(arr:number[]) : number[] {
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

