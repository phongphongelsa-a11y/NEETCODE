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

function Maximum_SubArray_Size_of_K_Sliding_Window(nums:number[], k:number): number {
    let window_Sum = 0;
    let max_Sum = 0;
    for (let i =0;i<nums.length;i++) {
        window_Sum+=nums[i];
    }

    for (let i = k;i<nums.length;i++) {
        window_Sum+=window_Sum+ nums[i] - nums[i-k];
        max_Sum = Math.max(window_Sum, max_Sum);
    }

    return max_Sum;
    
}
let array = [2,1,5,1,3,2];
let k = 3;
console.log(Maximum_SubArray_Size_of_K_Brute_Force(array,k));