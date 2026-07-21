function alphaNum(c:string) : boolean {
    return (
        (c >= 'A' && c <= 'Z') || 
        (c >= 'a' && c <= 'z') || 
        (c >= '0' && c <= '9') 
    );
}
function Vaild_Palindrom(s:string) :boolean {
    let left = 0;
    let right = s.length -1;
    while (left<right) {
        while (left < right && !alphaNum(s[left])) {
            left++;
        }
        while (right > left && !alphaNum(s[right])) {
            right--;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++
        right--;
    }
    return true;
}



function Valid_Palindrome_Brute_Force(s:string) : boolean {
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