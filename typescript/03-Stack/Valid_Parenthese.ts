function brute_force(s: string) : boolean {
    // Time: o(n^2)
    // Space: o(n);

    // Lặp cho đến khi các cặp ngoặc được thay thế bằng '' -> Nếu chuỗi rỗng thì true, nếu còn thì false

    while (s.includes('[]') || s.includes('{}') || s.includes('()')) {
        s = s.replace('[]','');
        s = s.replace('{}','');
        s = s.replace('()','');
    }
    return s == '';
}

function Valid_Parenthese(s:string) : boolean {
    // Time: o(n);
    // Space: o(n);
    // Tạo map các cặp ngoặc mở và đóng -> duyệt s -> nếu có ngoặc mở thì push ngoặc đóng vào stack -> nếu ko phải ngoặc mở
    // -> kiểm tra xem đỉnh stack có phải là ngoặc đóng ko, nếu ko phải thì return false -> return true nếu stack rỗng 
    let stack = [];
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
    
}


let string = '[]';
console.log(brute_force(string));
