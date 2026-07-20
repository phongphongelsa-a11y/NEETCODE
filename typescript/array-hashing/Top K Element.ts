// ======================== Top K  ===============================

function BrutceForceTopK(arr:number[],k:number) {
/**
    * @problem: [Top K Frequent Element | https://neetcode.io/problems/top-k-elements-in-list/question?list=neetcode150 ]
    * @Solution: Bructe Force Top K
    * @Idea: 
    *   Tạo 2 array đại diện cho unique và frequent của element 
    *   Push element vào array unique và mảng frequent vào cùng 1 lúc tránh lệch index
    *   Ta thu được 2 array unique và frequent cùng index
    *   Tạo 1 array result để push phần tử tại max frequent (result.push(unique[frequent]));
    *   Tìm max theo k lần trong mảng frequent vì cùng index nên ánh xạ lên mảng unique (tìm được 1 max thì đánh dấu lại bằng -1)
    *   return result
    * @Complexcity: 
    * - Time: o(n^2)
    * - Space: o(n+n+n) = o(3n) = o(n) 
 */
    const unique:number[] = [];
    const frequent:number[] =[];
    const visited : boolean[] = new Array(arr.length).fill(false);

    for (let i = 0;i<arr.length;i++) {
        if (visited[i]) continue;
        unique.push(arr[i]);
        let frequentEl = 1;
        for (let j = i+1;j<arr.length;j++) {
            if (visited[j]) continue;
            if (arr[i]==arr[j]) {
                frequentEl++;
                visited[j] = true;
            }
        }
        frequent.push(frequentEl);
    }

    const result : number[] = []

    for (let i = 0;i<k;i++) {
        let maxVal = frequent[0];
        let maxIndex = 0;
        for (let j = 1; j<frequent.length;j++) {
            if (frequent[j] > maxVal) {
                maxVal = frequent[j];
                maxIndex = j;
            }
        }
        result.push(unique[maxIndex]);
        frequent[maxIndex] = -1; 
    }
    return result;    
}

function HashMapTopK(arr:number[],k:number) {
/**
    * @problem: [Top K Frequent Element | https://neetcode.io/problems/top-k-elements-in-list/question?list=neetcode150 ]
    * @Solution: Hash Map
    * @Idea: 
    *   Build 1 Hash Map lưu frequent của từng element (key là num trong nums, value là tần suất xuất hiện 
    *   Thu được 1 Map có tần suất xuất hiện của num
    *   Chuyển Map thành array
    *   [
            [2,3]
            [3,1]
            [4,2]
    *   ] 
    *   Sort a[1] với b[1];
    *   Dùng hàm slice cắt array từ 0 - K. map(pair=> pair[0]) #tức là lấy phần tử [0] trong array#
    * @Complexcity: 
    * - Time: o(n log n )
    * - Space: o(n) 
 */
    const count = new Map<number,number>();
    for (const num of arr) {
        count.set(num, (count.get(num)??0)+1);
    }
    const array = Array.from(count.entries());
    array.sort((a,b)=>b[1]-a[1]);
    return array.slice(0,k).map(pair=>pair[0]);
}

function HashMapBucketSortTopK(arr:number[],k:number) {
/**
    * @problem: [Top K Frequent Element | https://neetcode.io/problems/top-k-elements-in-list/question?list=neetcode150 ]
    * @Solution: Bucket Sort
    * @Idea: 
    *   
    *  
    * @Complexcity: 
    * - Time: o(n log n )
    * - Space: o(n) 
 */
    const count = new Map<number,number>();
    const freq:number[][] = Array.from(
        {length: arr.length +1},
        () => []
    );
    // frequent Element
    for (const n of arr) {
        count.set(n,(count.get(n)??0)+1);
    }
    //bucket sort
    for (const [n,f] of count ) {
        freq[f].push(n);
    }
    const result : number[] = [];
    for (let i = freq.length-1; i>0 ; i--) {
        for (const n of freq[i]) {
            result.push(n);
            if (result.length === k) {
                return result;
            }
        }
    }
}