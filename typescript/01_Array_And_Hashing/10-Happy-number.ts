function Happy_number(n:number):boolean {
    const seen = new Set();
    while (n!==1) {
        if (seen.has(n)) return false;
        seen.add(n);
        let sum = 0;
        while (n>0) {
            let number = n%10;
            sum+= number*number;
            n = Math.floor(n/10);
        }
        n = sum;
    }
    return true;
}

let num = 19;
console.log(Happy_number(num));