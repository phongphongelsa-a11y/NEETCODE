function Contain_Duplicates_Brute_Force(nums) {
    for (let i =0;i<nums.length;i++) {
        for (let j = i+1;j<nums.length;j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

function Contain_Duplicates_Hast_Set(nums) {
    let seen = new Set();
    for (num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

