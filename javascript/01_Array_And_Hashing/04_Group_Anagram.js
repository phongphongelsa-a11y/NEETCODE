// Solution key: sort
function group_Anagram(strs) {
    let result = new Map();
    for (let s of strs) {
        const sorted_s = s.split('').sort().join();
        if (!result.has(sorted_s)) {
            result.set(sorted_s,[]);
        }
        result.get(sorted_s).push(s);
    }
    return result;
}
// Solution 2 for
function group_anagram_brute_force(strs) {
    let result = [];
    for (let i =0;i<strs.length;i++) {
        if (strs[i] == "") continue;
        for (let j = i+1; j<strs.length;j++) {
            let Elresult = [];
            if (strs[j] == "") continue;
            if (isAnagram(strs[i], strs[j])) {
                Elresult.push(strs[i], strs[j]);
                strs[j] = "";
            }
        }
        result.push(Elresult);
    } 
    return result;
}

function isAnagram(s,t) {
    let count = new Array(26).fill(0);
    for (let i = 0; i<s.length;i++) {
        let cs = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        count[cs] = count[cs] + 1;
        cs = t[i].charCodeAt(0) - 'a'.charCodeAt(0);
        count[cs] = count[cs] - 1;
    }
    
    for (let i = 0; i<count.length; i++) {
        if (count[i] != 0) {
            return false;
        }
    }
    return true;
}
