function ConTainer_Water_Brute_Force(heights:number[]) : number {
    let max_Area = -Infinity;
        for (let i = 0; i< heights.length;i++) {
            for (let j =i+1;j<heights.length;j++) {
                let width = j - i;
                let height = Math.min(heights[i], heights[j]) 
                let area = width * height;
                max_Area = Math.max(area,max_Area);
                
            }
        }
        return max_Area;
}

function ConTainer_Water_Two_Pointer(heights:number[]) : number {
    let max_Area = -Infinity;
        let i = 0;
        let j = heights.length - 1;
        while (i<j) {
            let width = j - i;
            let height = Math.min(heights[i], heights[j]);
            let area = width*height;
            max_Area = Math.max(area,max_Area);
            if (heights[i] < heights[j]) {
                i++;
            }
            else {
                j--;
            }
        }
        return max_Area;
}
let h = [1,8,6,2,5,4,8,3,7];
console.log(ConTainer_Water_Brute_Force(h));