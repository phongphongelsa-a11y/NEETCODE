function three_Sum(nums:number[]) : number[][] {
    nums.sort((a,b) => (a>b) ? 1 : -1);
    let result = [];
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] == nums[i-1]) continue;

        let l = i +1;
        let r = nums.length - 1;
        while (l<r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum > 0) {
                r--;
            }
            else if (sum < 0) {
                l++;
            }
            else {
                result.push([nums[i], nums[r], nums[l]]);
                l++;
                r--;
                while (l<r && nums[l] == nums[l-1]) {
                    l++;
                }
            }
        }    
    }
    return result;
}

const array = [0,0,0];
console.log(three_Sum(array));