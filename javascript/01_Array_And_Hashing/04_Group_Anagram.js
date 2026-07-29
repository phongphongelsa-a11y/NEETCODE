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
