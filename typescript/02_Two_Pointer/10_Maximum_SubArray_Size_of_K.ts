function Maximum_SubArray_Size_of_K_Brute_Force(nums:number[], k:number) : number {
    let sumMax = 0;
    for (let i =0;i<nums.length-k;i++) {
        let sum = 0;
        for (let j =i;j<i+k;j++) {
            sum+=nums[j];
        }
        sumMax = Math.max(sum,sumMax);
    }
    return sumMax;
}

let array = [2,1,5,1,3,2];
let k = 3;
console.log(Maximum_SubArray_Size_of_K_Brute_Force(array,k));