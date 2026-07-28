function Valid_Anagram(s,t) {
    if (s.length != t.length) return false;
    let count = new Array(26).fill(0);
    for (let i = 0; i<s.length;i++) {
        let cs = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        count[cs] = count[cs] + 1;
        cs = t[i].charCodeAt(0) - 'a'.charCodeAt(0);
        count[cs] = count[cs] - 1;
    }
    console.log(count);
    for (let i = 0;i<count.length;i++) {
        if (count[i] != 0) {
            return false;
        }
    }
    return true;
}

function Valid_Anagram_Sort(s,t) {
    if (s.length!= t.length) return false;
    let sSort = s.split('').sort().join();
    let tSort = t.split('').sort().join();
    return sSort == tSort;
}

function Valid_Anagram_Hash_Map(s,t) {
    if (s.length!= t.length ) return false;
    let countS = new Map();
    let countT = new Map();
    
    for (let i = 0; i<s.length;i++) {
        countS.set(s[i], (countS.get(s[i])??0)+1);
        countT.set(t[i], (countT.get(t[i])??0)+1);
    }

    for (const [key,value] of countS) {
        if (countT.get(key) != value) {
            return false;
        }
    }
    return true;
}
let s1 = "hoh", s2="hoh";
console.log(Valid_Anagram_Hash_Map(s1,s2));