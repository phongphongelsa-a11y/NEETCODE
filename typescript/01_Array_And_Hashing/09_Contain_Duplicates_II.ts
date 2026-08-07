// Tìm 2 số trong mảng sao cho chúng bằng nhau và cách tối đa k chỗ 

// Brute Force
function Contain_Duplicates_II(nums: number[], k:number) : boolean {
    for (let i = 0; i<nums.length; i++) {
        for (let j = i+1;j<nums.length; j++) {
            if (nums[i] === nums[j] && j - i <= k) {
                return true;
            }
        }
    }
    return false;
}

function Contain_Duplicates_II_Hash_Map(nums:number[], k: number) :boolean {
    const seen = new Map<number,number>();
    for (let i = 0; i<nums.length; i++) {
        if (seen.has(nums[i]) && i - seen.get(nums[i])! <= k) {
            return true;
        }
        seen.set(nums[i], i);
    }
    return false;
}

let array:number[] = [1,2,3,1];
let kk = 3
console.log(Contain_Duplicates_II_Hash_Map(array,kk))

