function Two_sum_brute_force(nums,target) {
    for (let i =0;i<nums.length;i++) {
        for (let j = i+1;j<nums.length-1;j++) {
            if (nums[i]+nums[j]=== target) {
                return {i,j};
            }
        }
    }
    return [];
}

function Two_sum_Hash_Map(nums,target) {
    let prevMap = new Map();
    for (let i = 0; i<nums.length;i++) {
        let diff = target-nums[i];
        if (prevMap.has(diff)) {
            return [prevMap.get(diff),i];
        }
        prevMap.set(nums[i],i);
    }
    return [];
}