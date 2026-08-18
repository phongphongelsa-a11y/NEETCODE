function brute_force(s: string) : boolean {
    while (s.includes('[]') || s.includes('{}') || s.includes('()')) {
        s = s.replace('[]','');
        s = s.replace('{}','');
        s = s.replace('()','');
    }
    return s == '';
}

function Valid_Parenthese(s:string) : boolean {
    let stack = [];

    // for (let c of s ) {
    //     if (c == '[') {
    //         stack.push(']');
    //     }
    //     else if (c == '{') {
    //         stack.push('}');
    //     }
    //     else if (c == '(') {
    //         stack.push(')');
    //     }
    //     else {
    //         if (c !== stack.pop()) {
    //             return false;
    //         }
    //     }
    // }
    // return stack.length === 0;
    
    
    const map = new Map<string,string>([
        ['[',']'],
        ['{','}'],
        ['(',')']
    ]);


    for (let char of s) {
        if (map.has(char)) {
            stack.push(map.get(char));
        }
        else {
            if (char !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length === 0;
}


let string = '[]';
console.log(brute_force(string));
