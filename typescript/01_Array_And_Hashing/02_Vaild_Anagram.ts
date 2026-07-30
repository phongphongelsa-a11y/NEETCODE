// ======================= Vaid Anagram ===============================

function is_Anagram(s: string, t: string) : boolean {
/**
    * @problem: [Vail Anagram | https://neetcode.io/problems/is-anagram/question?list=neetcode150 ]
    * @Solution: Brute Force
    * @Idea: 
    * - Kĩ thuật counting array - tạo array size (a-z) - ( +1, -1 triệt tiêu lẫn nhau) - array.fill(0) thì return true, ngược lại fasle 
    * @Complexcity: 
    * - Time: o(s+t)
    * - Space: o(n) 
 */
    if (s.length!=t.length) return false;
    let count = new Array(26).fill(0);
    for (let i =0; i<s.length;i++) {
        let cs = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        count[cs] = count[cs]+1;
        cs = t[i].charCodeAt(0) - 'a'.charCodeAt(0);
        count[cs] = count[cs]-1;
    }
    for (let i =0; i<count.length; i++) {
        if (count[i]!=0) {
            return false;
        }
    }
    return true;
}




function is_Anagram_With_Sort(s:string, t:string) : boolean {
/**
    * @problem: [Vail Anagram | https://neetcode.io/problems/is-anagram/question?list=neetcode150 ]
    * @Solution: Sort
    * @Idea: 
    * - Sort 2 chuỗi -> so sánh
    * @Complexcity: 
    * - Time: o(n log n + m log m)
    * - Space: o(1) 
    * ? Có cách nào không cần sort ? 
 */
    if (s.length!= t.length) return false;

    let sSort = s.split('').sort().join();
    let tSort = t.split('').sort().join();

    return sSort == tSort;
}



function is_Anagram_With_Count(s:string, t:string) : boolean {
/**
    * @problem: [Vail Anagram | https://neetcode.io/problems/is-anagram/question?list=neetcode150 ]
    * @Solution: Hash Map
    * @Idea: 
    * - Counting bằng Map - key: char; value: tần suất  
    * @Complexcity: 
    * - Time: o(s+t)
    * - Space: o(n) 
 */
    if (s.length!=t.length) return false;

    const map = new Map<string,number>();
    for (const letter of s) {
        map.set(letter, (map.get(letter)??0)+1);
    }
    for (const letter of t) {
        if (!map.has(letter)) return false;
        map.set(letter, (map.get(letter)??0)-1);
    }
    for (const value of map.values()) {
        if (value!==0) return false;
    }
    return true;
}



function is_Anagram_With_Map(s: string, t:string) : boolean {
/**
    * @problem: [Vail Anagram | https://neetcode.io/problems/is-anagram/question?list=neetcode150 ]
    * @Solution: Hash Map
    * @Idea: 
    * - Tạo 2 Map
    * - Key: char; value: tần suất xuất hiện của char trong string
    * - Nếu 2 Map value !- nhau thì return false, ngược lại true
    * @Complexcity: 
    * - Time: o(n)
    * - Space: o(S+T) 
 */
    if (s.length!== t.length) return false;
    const CountT = new Map<string,number>();
    const CountS = new Map<string,number>();
    for (let i =0;i<s.length;i++) {
        CountT.set(s[i], (CountT.get(s[i])??0)+1);
        CountS.set(s[i], (CountS.get(s[i])??0)+1);
    }
    for (const [key,value] of CountT) {
        if (CountS.get(key) != value) {
            return false;
        }
    }
    return true;
}