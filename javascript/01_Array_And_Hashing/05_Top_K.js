function TopK_Element_Brute_Force(nums,k) {
    let unique = [];
    let frequent = [];
    let visited = new Array(nums.length).fill(false);
    for (let i =0;i<nums.length; i++) {
        if (visited[i]) continue;
        let count = 1;
        unique.push(nums[i]);
        for (let j = i+1;j<nums.length;j++){
            if (visited[j]) continue;
            if (nums[i] === nums[j]) {
                count++;
                visited[j] = true;
            }
        }
        frequent.push(count);
    }
    
    console.log(unique);
    console.log(frequent);


    let result = [];
    for (let i =0;i<k;i++) {
        let maxVal = frequent[0];
        let maxIndex = 0;
        for (let j = 1; j<frequent.length;j++) {
            if (frequent[j] > maxVal) {
                MaxFrequent = nums[j];
                maxIndex = j;
            }        
        }
        result.push(unique[maxIndex]);
        console.log(result);
        frequent[maxIndex] = -1;
    }
    return result;
}
let array = [1,2,2,2,3,3,3,3,3];
let k = 2;
console.log(TopK_Element_Brute_Force(array,k));