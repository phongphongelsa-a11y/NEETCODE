function alphaNum(c:string) : boolean {
    return (
        (c >= 'A' && c <= 'Z') || 
        (c >= 'a' && c <= 'z') || 
        (c >= '0' && c <= '9') 
    );
}
function Vaild_Palindrom(s:string) :boolean {
/**
    * @problem: [ Vailid Palindrome | https://neetcode.io/problems/is-palindrome/question?list=neetcode150 ]
    * @Solution: Two Pointer
    * @Idea: 
    *   Đặt 2 con trỏ ở đầu và cuối
    *   2 con trỏ chạy kiểm tra kí tự hợp lệ
    *   So sánh 2 char ở vị trí left right, !== return false
    * @Complexcity: 
    * - Time: o(n)
    * - Space: o(1) 
 */
    let left = 0;
    let right = s.length -1;
    while (left<right) {
        while (left < right && !alphaNum(s[left])) {
            left++;
        }
        while (right > left && !alphaNum(s[right])) {
            right--;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {     // toLowerCase() biến char hoa thành char thường
            return false;
        }
        left++
        right--;
    }
    return true;
}



function Valid_Palindrome_Brute_Force(s:string) : boolean {
/**
    * @problem: [ Vailid Palindrome | https://neetcode.io/problems/is-palindrome/question?list=neetcode150 ]
    * @Solution: Brute Force
    * @Idea: 
    *   Đảo ngược chuỗi rồi so sánh
    * @Complexcity: 
    * - Time: o(n)
    * - Space: o(n) 
 */

    let newStr:string = "";
    for (const c of s) {
        if (alphaNum(c)) {
            newStr += c.toLowerCase();
        }
    }
    return newStr  === newStr.split('').reverse().join('');
}



let s1 : string = "Was it a car or a cat I saw?"
console.log(Vaild_Palindrom(s1));