import promptSync from "prompt-sync";
const prompt = promptSync();



function inputArray(n:number) : number[] {
    const input = prompt(`Nhap ${n} phan tu: `);
    const arr = input.split('').map(Number);
    return arr;
}




function printArray(array:number[]) : void {
    console.log(array.join(" "));
}



function prefixSum(nums:number[]) : number[] {
    if (nums.length === 0) return [];
    const prefix:number[] = new Array(nums.length);
    prefix[0] = nums[0];
    for (let j = 1;j<nums.length;j++) {
        prefix[j] = prefix[j-1] + nums[j]; 
    }
    return prefix;
}



function suffixSum(nums:number[]) : number[] {
    if (nums.length === 0) return [];
    const suffix:number[] = new Array(nums.length);
    suffix[nums.length-1] = nums[nums.length-1];
    for (let j = nums.length - 2; j>=0;j--) {
        suffix[j] = suffix[j+1] + nums[j];
    }

    return suffix;
}




function prefixSumToI(nums:number[], i:number ) : number {
    if (nums.length===0) return -1;
    const prefix:number[] = new Array(nums.length);
    prefix[0] =nums[0];
    for (let j = 1;j<nums.length;j++) {
        prefix[j] = prefix[j-1] + nums[j]; 
    }
    return prefix[i];
}




function suffixSumToI(nums:number[], i:number) : number {
    if (nums.length === 0 ) return -1;
    const suffix:number[] = new Array(nums.length);
    suffix[nums.length -1] = nums[nums.length-1];
    for (let j = nums.length - 2; j>=0; j--) {
        suffix[j] = suffix[j+1] + nums[j];
    }
    return suffix[i];
}




function sumLeftRight(nums:number[],l:number,r:number) : number {
    if  (nums.length === 0) return -1;
    console.log(nums);
    const prefix:number[] = new Array(nums.length);
    prefix[0] = nums[0];
    for (let j = 1;j<nums.length;j++) {
        prefix[j] = prefix[j-1] + nums[j];
    }
    console.log(prefix);
    let sum:number = prefix[r] - prefix[l-1];
    return sum;
}





function rangeSumQueries (
    nums:number[],
    queries:number[][]
) : number[] {
    if (nums.length === 0 ) return [];
    const prefix:number[] = new Array(nums.length);
    prefix[0] = nums[0];
    for (let j = 1;j<nums.length;j++) {
        prefix[j] = prefix[j-1] + nums[j];
    }
    console.log(prefix);
    const result: number[] = [];
    for (const [left,right] of queries) {
        if (left == 0){
            result.push(prefix[right]);
        }
        else {
            result.push(prefix[right] - prefix[left-1]);
        }
    }
    return result;
}



function rangeSumQueries_BruteForce (
    nums:number[],
    queries:number[][]
) : number[] {
    if (nums.length == 0) return [];
    const prefix:number[] = new Array(nums.length);
    prefix[0] = nums[0];
    for (let j = 1;j<nums.length;j++) {
        prefix[j] = prefix[j-1] + nums[j];
    }
    console.log(prefix);
    const result : number[] = [];
    for (const [left,right] of queries) {
        let sum = 0;
        for (let i = left; i <= right; i++) {
            sum+=nums[i];
        }
        result.push(sum);
    }
    return result;
}



function sum_of_i(nums:number[], i : number) : number[] {
    let preffix = new Array(nums.length);
    let suffix = new Array(nums.length);
    let result = new Array(nums.length);
    preffix[0] = 0;
    suffix[nums.length-1] = 0;
    for (let i = 1;i<nums.length;i++) {
        preffix[i] = preffix [i-1] + nums[i-1];
    }
    for (let i = nums.length - 2;i>=0;i--) {
        suffix[i] = suffix[i+1] + nums[i+1];
    }
    for (let i = 0;i<nums.length;i++) {
        let sum = preffix[i] + suffix [i];
        result[i] = sum;
    }
    return result;
}


function product_of_i(nums:number[]) : number[] {
    let preffix = new Array(nums.length);
    let suffix = new Array(nums.length);
    let result = new Array(nums.length);
    preffix[0] = 1;
    suffix[nums.length - 1] = 1;
    for (let i = 1;i<nums.length;i++) {
        preffix[i] = preffix[i-1]* nums[i-1];
    }
    for (let i = nums.length-2; i>=0; i--) {
        suffix[i] = suffix[i+1]*nums[i+1];
    }
    for (let i = 0; i < nums.length; i++) {
        let product = preffix[i]*suffix[i];
        result[i] = product;
    }
    return result;

}

let n = [1,2,4,6];
console.log(product_of_i(n));



