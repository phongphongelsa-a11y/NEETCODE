


function printArray(nums:number[]): void {
    for (let i = 0;i<nums.length;i++) {
        let result = "";
        for (let j = i; j<nums.length;j++) {
            if (j==i) {
                result += nums[j];
            } 
            else { 
                result += "," + nums[j];
            }
            console.log(result);
        }
    }
}

function printSub(nums:number[]): void {
    for (let start = 0; start < nums.length; start++) {
        for (let end = start; end < nums.length; end++) {
            let str = "";

            for (let k =start;k<=end;k++) {
                str += nums[k] + "";
            }
            console.log(str);
        }
    }
}

function sumSubArray(nums:number[]): void {
    for (let i =0;i<nums.length;i++) {
        let sum = 0;
        for (let j = i;j<nums.length;j++) {
            sum+= nums[j];
            console.log(sum);
        }
    }
}

function subArrayMax(nums:number[]): number {
    let sub_max = -Infinity;
    for (let i =0;i<nums.length;i++) {
        let sum = 0;
        for (let j =i;j<nums.length;j++) {
            sum+= nums[j];
            sub_max = Math.max(sub_max, sum);   
        }
    }
    return sub_max;
}

function subArrayMin(nums:number[], target: number) {
    if (nums.length === 0) return 0;
    let min_length = +Infinity;
    for (let i =0;i<nums.length;i++) {
        let sum = 0;
        let count = 0;
        for (let j =i;j<nums.length;j++) {
            sum+=nums[j];
            count++;
            if (sum>=target) {
                min_length = Math.min(count,min_length);
                break;
            }
        }
    }
    if (min_length === Infinity) {
        return 0;
    }
    else {
        return min_length;
    }
}


function subArrayMin_Sliding_Window(nums:number[], target: number) {
    if (nums.length === 0) return 0;
    let left = 0,
        sum = 0,
        min_Length = +Infinity;
    for (let right = 0; right < nums.length; right++) {
        sum+=nums[right];
        while (sum >= target) {
            min_Length = Math.min(min_Length, right - left + 1);
            sum-=nums[left];
            left++;
        }
    }
    return min_Length === +Infinity ? 0 : min_Length;

}

let array = [2,3,1,2,4,3];
let target = 7;
console.log(subArrayMin_Sliding_Window(array,target));

