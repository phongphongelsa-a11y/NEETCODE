function occurrence(arr:number[]): boolean {
    let unique = [];
    let frequent = [];
    let visited = new Array(arr.length + 1).fill(false);
    for (let i = 0; i<arr.length;i++) {
        if (visited[i]) continue;
        unique.push(arr[i]);
        let count = 1;
        for (let j = i + 1; j<arr.length;j++) {
            if (visited[j]) continue;
            if (arr[i] === arr[j]) {
                visited[j] = true;
                count++;
            }
        }
        frequent.push(count);
    }

    for (let i = 0; i<frequent.length; i++) {
        for (let j = i+1; j<frequent.length;j++) {
            if (frequent[i] === frequent[j]) {
                return false;
            }
        }
    }
    return true;
}

function occurence_hashMap(nums:number[]): boolean {
    const count = new Map<number, number>();

    for (let num of nums) {
        count.set(num, (count.get(num)??0) + 1);
    }

    let frequentArray = Array.from(count.values());

    const seen = new Set();
    for (let num of frequentArray) {
        if (seen.has(num)) {
            return false;
        }
        seen.add(num);
    }
    return true;
}