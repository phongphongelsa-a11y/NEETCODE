// ======================== Group Anagram ===============================



function isAnagramWithMap(s: string, t:string) : boolean {
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
    if (s.length!=t.length) return false;
    const countS = new Map<string,number>();
    const countT = new Map<string,number>();
    for (let i = 0;i<s.length;i++) {
        countS.set(s[i],(countS.get(s[i])??0)+1);
        countT.set(t[i],(countT.get(t[i])??0)+1);
    }

    for (const[key,value] of countS) {
        if (countT.get(key)!=value) {
            return false;
        }
    }
    return true;    
}

function groupAnagram(strs: string[]) : string[][] {
/**
    * @problem: [GroupAnagram | https://neetcode.io/problems/anagram-groups/question?list=neetcode150 ]
    * @Solution: Brute Force
    * @Idea: 
    * - For lồng để tìm các anagram
    * - Dùng mảng đánh dấu "#"
    * - Dùng lại function isAnagram
    * @Complexcity: 
    * - Time: o(n^2)
    * - Space: o(n*m) 
 */
    if (strs.length === 0) return [[]];
    else if (strs.length === 1) return [[strs[0]]];
    const result: string[][] = [];  
    for (let i = 0;i<strs.length;i++) {
        if (strs[i]=="#") continue;
        let resultEl: string[] = [];
        resultEl.push(strs[i]);
        for (let j = i+1;j<strs.length;j++) {
            if (isAnagramWithMap(strs[i],strs[j])) {
                resultEl.push(strs[j]);
                strs[j] = "#";
            }
        }
        result.push(resultEl);
    }
    return result;
} 

function groupAngramWithHashMap(strs:string[]) : string[][] {
/**
    * @problem: [GroupAnagram | https://neetcode.io/problems/anagram-groups/question?list=neetcode150 ]
    * @Solution: Hash Map + Sort
    * @Idea: 
    * - Các anagram sau khi sort sẽ đều giống nhau
    * - Key là các string đã được sort, value là các string gốc cần return
    * @Complexcity: 
    * - Time: o(n * n log n)
    * - Space: o(n) 
 */
    const result = new Map();
    for (let s of strs) {
        let sortedS = s.split('').sort().join('');  // Split: chia chuỗi thành char -> sort -> Join: nhóm
        if (!result.has(sortedS)) {     // Tìm trong map, khác thì thêm set làm key
            result.set(sortedS,[]);
        }
        result.get(sortedS).push(s);    // Nếu có thì push chuỗi gốc vào value;
    }
    return Array.from(result.values());
}


function getKey (str: string): string {
    const AZ= 'abcdefghijklmnopqrstuvyz';
    const count = new Map<string,number>();
    
    for (const char of AZ) {
        count.set(char,0);
    }

    for (const char of str) {
        count.set(char,count.get(char)!+1);
    }

    let result = '';
    for (const char of AZ) {
        const freq = count.get(char)!;
        if (freq!=0) {
            result += char + freq.toString();
        }
    }
    return result;    
}
function groupAnagramWithAz(strs:string[]) : string[][] {
/**
    * @problem: [GroupAnagram | https://neetcode.io/problems/anagram-groups/question?list=neetcode150 ]
    * @Solution: Hash Map
    * @Idea:
    *  Khởi tạo một Frequency Map gồm các chữ cái từ a-z.fill 0.
    *  Đếm số lần xuất hiện của từng ký tự trong chuỗi input và set vào Map
    *  Duyệt lại bảng chữ cái theo thứ tự chuẩn, nối các ký tự có tần suất > 0 cùng số lượng của chúng thành một chuỗi kết quả (Ví dụ: "a1b2").
    *  Các từ là Anagram của nhau sẽ ra 1 cùng một chuỗi kết quả.
    * @Complexcity: 
    * - Time: o(n * m)
    * - Space: o(n) 
 */
    const m = new Map<string,string[]>();
    for (const str of strs) {
        const key = getKey(str);
        if (!m.has(key)) {
            m.set(key,[str]);
        }
        m.get(key)!.push(str);
    }
    return Array.from(m.values());
}


function groupAnagrams(strs:string[]): string[][] {
/**
    * @problem: [GroupAnagram | https://neetcode.io/problems/anagram-groups/question?list=neetcode150 ]
    * @Solution: Hash Map + Array Count Frequent
    * @Idea: 
    *  Khởi tạo một đếm count gồm 26 phần tử, ban đầu toàn 0
    *  Tính toán index = bằng bảng mã ASCII. lấy ASCII của kí tự đó trừ đi ASCII kí tự 'a' (vd: 'c' - 'a', 'b'-'a')
    *  Key là chuỗi đại diện cho số lượng từng ký tự. Ví dụ: từ "aab" có mảng [2, 1, 0]
    *  Các từ là Anagram của nhau sẽ ra 1 cùng một chuỗi kết quả.
    *  Chuyển mảng các số [2, 1, 0] thành chuỗi '2,1,0' để làm key
    *  Nếu chưa có thì set key - nếu có thì 2 Anagram
    *  Return Value trong Map
    * @Complexcity: 
    * - Time: o(n * m)
    * - Space: o(n*m) 
 */
    const res = new Map();
    const count = new Array(26).fill(0);
    for (let s of strs) {
        for (let c of s) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        const key = count.join(',');
        if (!res.has(key)) {
            res.set(key, []);
        }
        res.get(key).push(s);
    }
    return Array.from(res.values());
}