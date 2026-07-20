function encode(strs: string) {
/**
    * @problem: [Encode and Decode Strings] | https://neetcode.io/problems/string-encode-and-decode/question?list=neetcode150 ]
    * @Solution: mã hóa chuỗi input và giải mã chuỗi đã mã hóa
    * @Idea: 
    *   Danh sách chuỗi ký tự, mã hóa chuỗi kí tự thành một chuỗi duy nhất trong hàm encode
    *   Nhân vào chuỗi được mã hóa bởi hàm encode, dịch ngược lại thành danh sách chuỗi ban đầu
    *   [độ dài] + "#" + [chuỗi]
    *   # là mốc
    *   2#ab1#b1#c3#abc
    * @Complexcity: 
    * - Time: o(n)
    * - Space: o(n) 
 */
    let res = [];
    let i = 0;
    for (let s of strs) {
        res.push(String(s.length), '#', s);
    }
    return res.join('');
}

function decode(str:string) {
    let res = [];
    let i = 0;
    while (i < str.length) {
        let j = i;
        while (str[j] !== '#') {
            j++;
        }
        let length = parseInt(str.substring(i, j));
        i = j + 1;
        j = i + length;
        res.push(str.substring(i, j));
        i = j;
    }
    return res;
}

