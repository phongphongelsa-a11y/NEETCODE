function Trapping_Rain_Water(height:number[]) : number {
    if (height.length<0) return 0;

    let result: number = 0;
    for (let i = 0; i<height.length;i++) {

        let max_Left: number = height[i];
        let max_Right: number = height[i];

        for (let j = 0; j<i; j++) {
            max_Left = Math.max(max_Left, height[j]);
        }

        for (let j = i+1; j<height.length;j++) {
            max_Right = Math.max(max_Right, height[j]);
        }
        
        let water = Math.min(max_Left, max_Right) - height[i];
        result+= water;
    }
    return result;
}

let h:number[] = [0,2,0,3,1,0,1,3,2,1];
console.log(Trapping_Rain_Water(h));