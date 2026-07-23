function remove_Duplicate_Sorted(nums:number[]) : number {
    // i đóng vai trò đại diện cho các vị trí cần ghi vào
    // j đóng vai trò chạy kiểm tra (so sánh nums[j] với nums[j-1]) ---> khác thì gán nums[j] vào nums[i]
    if (nums.length == 0 || nums.length == 1) return nums.length;
    let i = 1;
    let j = 1;
    while (j<nums.length) {
        if (nums[j] != nums[j-1]) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    console.log(nums);
    return i ;
}
const array = [0,0,1,1,1,2,2,3,3,4];
console.log(remove_Duplicate_Sorted(array));