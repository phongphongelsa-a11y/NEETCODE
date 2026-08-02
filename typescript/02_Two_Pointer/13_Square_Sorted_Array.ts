function square_Array(nums:number[]) : number[] {
        // Tách âm và dương
        let positiveArray: number[] = [];
        let negativeArray: number[] = [];
        let result: number[] = [];
        for (let i = 0; i<nums.length;i++) {
            let square: number = 0;
            if (nums[i] < 0) {
                square = positive(nums[i]) * positive(nums[i]);
                negativeArray.push(square);
            }
            else {
                square = nums[i] * nums[i];
                positiveArray.push(square);
            }
        }
  
        // reverse negative array
        let left = 0;
        let right = negativeArray.length - 1;
        while (left<right) {
            let temp = negativeArray[right];
            negativeArray[right] = negativeArray[left];
            negativeArray[left] = temp;
            left++;
            right--;
        }

        console.log(positiveArray);
        console.log(negativeArray);

        // merge
        let i = 0;
        let j = 0;

        while (i<positiveArray.length && j<negativeArray.length) {
            if (positiveArray[i] < negativeArray[j]) {
                result.push(positiveArray[i]);
                i++
            }
            else {
                result.push(negativeArray[j]);
                j++;
            }
        }
        console.log(result);

        while (i<positiveArray.length) {
            result.push(positiveArray[i]);
            i++
        }
        while (j<negativeArray.length) {
            result.push(negativeArray[j]);
            j++;
        }
    return result;
}


function positive(x:number) {
    return x<0 ? -x : x
}

let array = [-4,-1,0,3,10];
console.log(square_Array(array));