

// const prompt = require('prompt-sync')();

const { setMaxIdleHTTPParsers } = require('node:http');



// let a = Number(prompt('Nhap a: '));
// let b = Number(prompt('Nhap b: '));

// let tong = a + b;

// console.log(tong);


// const prompt = require('prompt-sync')();
// let chieuDai = Number(prompt('Nhap chieu dai: '));
// let chieuRong = Number(prompt('Nhap chieu rong: '));

// let DienTich = chieuDai*chieuRong;

// console.log('Dien tich la: ', DienTich);

// let name = "Hello word";

// console.log(name);


// const prompt = require('prompt-sync')();
// let diem = Number(prompt('Nhap diem: '));
// while (diem<0||diem>10) {
//     console.log('Khong hop le, nhap lai diem');
//     diem = Numer(prompt('prompt-sync'))();
// }
// if (diem >=8) {
//     console.log('Gioi');
// }
// else if (diem >=6.5) {
//     console.log("Kha");
// }
// else if (diem >=5) {
//     console.log('Trung Binh');
// }
// else {
//     console.log('yeu');
// }


// const prompt = require('prompt-sync')();
// let n = Number(prompt('Nhap n: '));
// if (n%2==0) {
//     console.log('So chan');
// }
// else {
//     console.log('So le');
// }


// const prompt = require('prompt-sync')();
// let SoDien, TienDien;
// const bac1 = 1984, bac2 = 2050, bac3 = 2380, bac4 = 2998, bac5 = 3350, bac6 = 3460;

// SoDien = Number(prompt('Nhap so dien cua ban: '));

// while (SoDien<0) {
//     console.log('So dien khong hop le, nhap lai so dien');
//     SoDien = Number(prompt('Nhap so dien cua ban: '));
// }
// if (SoDien <= 50 ) {
//     TienDien = SoDien*bac1;
// }
// else if (SoDien<=100) {
//     TienDien = 50 * bac1 + (SoDien - 50) * bac2;
// }
// else if (SoDien <= 200) {
//     TienDien = 50 * bac1 + (50 * bac2) + ((soDien - 100) * bac3);
// }
// else if (SoDien<=300) {
//     TienDien = 50 * bac1 + (50 * bac2) + (100 * bac3) + ((soDien - 200) * bac4);
// }
// else if (SoDien <= 400 ) {
//     TienDien = 50 * bac1 + (50 * bac2) + (100 * bac3) + (100 * bac4) + ((soDien - 300) * bac5);
// }
// else {
//     TienDien = 50 * bac1 + (50 * bac2) + (100 * bac3) + (100 * bac4) + (100 * bac5) + (soDien - 400) * bac6;
// }
// console.log('So tien ban phai tra la', TienDien);



// const prompt = require('prompt-sync')();
// let thang, nam;
// thang = Number(prompt('Nhap vao thang cua ban: '));
// nam = Number(prompt('Nhap vao nam cua ban: '));

// while ((thang<1 || thang>12) || nam<=0) {
//     if (thang<1 || thang>12) {
//         console.log('Thang khong hop le, nhap lai thang cua ban: ');
//         thang = Number(prompt('Nhap vao thang cua ban: '));
//     }
//     if (nam<=0) {
//         console.log('Nam khong khong hop le, nhap lai nam cua ban ');
//         nam = Number(prompt('Nhap vao nam cua ban: '))
//     }
// }

// if (thang == 1 || thang==3 || thang==5 || thang==7 || thang == 8 || thang==10 || thang == 12) {
//     console.log('Thang co 31 ngay');
// }
// else if (thang == 2) {
//     if ((nam % 4 == 0 && nam % 100!=0) || nam % 400 == 0) {
//         console.log('Thang 2 co 29 ngay');
//     }
//     else {
//         console.log('Thang 2 co 28 ngay');
//     }
// }
// else {
//     console.log('Thang co 30 ngay ');
// }




// const prompt = require('prompt-sync')();
// let n = Number(prompt("Nhap n: "));

// while (n<0) {
//     console.log("N khong hop le, nhap lai n ");
//     n = Number(prompt("Nhap n: "));
// }

// const a = new Array(100);

// for (let i = 0;i<n;i++) {
//     let value = Number(prompt(`Nhap phan tu thu ${i}: ` ))
//     a[i] = value;
// }

// let x = Number(prompt("Nhap x: "));
// let found = false;
// for (let i = 0;i<n;i++) {
//     if (a[i]===x) {
//         console.log(i);
//         found = true;
//         break;
//     }
// }
// if (!found) {
//     console.log(-1);
// }



// const prompt = require('prompt-sync')();
// let n = Number(prompt("Nhap N: "));
// while (n<0) {
//     console.log("N khong hop le, nhap lai N: ");
//     n = Number(prompt("Nhap N: "));
// }



// const a=[];
// for (let i = 0;i<n;i++) {
//     let val = Number(prompt(`Nhap vao phan tu thu ${i} `));
//     a.push(val);
// }
// let x = Number(prompt("Nhap x: "));
// const result =[];
// for (let i = 0;i<n;i++) {
//     if (a[i]===x) {
//         result.push(i);
//     }
// }
// console.log("so lan xuat hien x la: ")
// if (result.length > 0) {
//     console.log(result.join (" "));
// }
// else {
//     console.log(-1);
// }



// const prompt = require('prompt-sync')();
// let n = Number(prompt("Nhap N: "));

// while (n<0) {
//     console.log("N khong hop le, nhap lai N: ");
//     n = Number(prompt("Nhap N: "));
// }

// const a=[];
// for (let i = 0;i<n;i++) {
//     let val = Number(prompt(`Nhap phan tu thu ${i} `));
//     a.push(val);
// }
// let tong=0;
// for (let i = 0;i<n;i++) {
//     tong += a[i];
// }
// console.log(tong);


// const prompt = require('prompt-sync')();
// let n = Number(prompt("Nhap N: "));
// while (n<0) {
//     console.log("N khong hop le, nhap lai n: "); 
//     n = Number(prompt("Nhap N: "));
// }

// const a = [];
// for (let i = 0;i<n;i++) {
//     let val = Number(prompt(`Nhap phan tu thu ${i} `));
//     a.push(val);
// }

// let maxVal = a[0];
// let maxIndex = 0;
// let minVal = a[0];
// let minIndex = 0;
// for (let i = 0;i<n;i++) {
//     if (a[i]>maxVal) {
//         maxVal = a[i];
//         maxIndex = i;
//     }
//     if (a[i]<maxVal) {
//         minVal = a[i];
//         minIndex = i;
//     }
// }

// console.log("Gia tri Max la ", maxVal , "Index la: ", maxIndex , "Gia tri min la:" , minVal, "Index la: ", minIndex);


// const prompt = require('prompt-sync')();
// let n = Number(prompt("Nhap n: "));
// while (n<0) {
//     console.log("N khong hop le, nhap lai n: ");
//     n = Number(prompt("Nhap n: "));
// }

// if (n==0) {
//     console.log(1);
//     process.exit(0);
// }

// let gt=1;
// for (let i = 1;i<=n;i++) {
//     gt = gt*i;
// }

// console.log(gt);



// tạo NewArrUnique;
// tạo newArrayFrequent;
// topKFrequent(nums, k) {

// const Unique = [];
// const Frequent = [];
// for (let i = 0; i < num.size(); i++) {
//     if (nums[i] == " " ) continue;
//     Unique.push(nums[i])
//     let FrequentEl = 1;P
//     for (let j = i + 1; j < nums.size(); j++) {
//         if (nums[j] == " ") continue;
//         if (nums[i] === nums[j]) {
//             FrequentEl++;
//             nums[j] = " ";
//         }
//     }
//     Frequent.push(FrequentEl);
// }
// // Nhap k
// const result = [];
// for (let i = 0; i<k; i++) {
//     if (Frequent[i] == " ") continue;
//     let MaxVal = Frequent[0];
//     let MinIndex = 0;
//     for (let j = 1; j<nums.size(); j++) {
//         if (Frequent[j] > MaxVal) {
//             MaxVal = Frequent[j];
//             MaxIndex = j;
//         }   
//     }
//     Frequent[MaxIndex] = " ";
//     result.push(Unique[MaxIndex]);
// }

//}

// Ý tưởng: 
// - Tạo 2 array đại diện cho unique và frequent 
// - Mỗi lần đi qua 1 phần tử trong mảng thì push nums[i] vào unique và dùng biến đếm và đánh dấu những elements đã đếm
// - Đã có 2 array đại diện cho unique nums và frequent nums
// - Tiếp theo tìm max nhiều lần để lấy ra top k elements

function isAnagram(s,t) {
    if (s.length!=t.length) return false;
    const countT = new Map();
    const countS = new Map();
    for (let i = 0;i<n;i++) {
        countT.set(t[i],(countT.get(s[i])??0)+1);
        countS.set(s[i],(countS).get(s[i]??0)+1);
    }
    for (const [key,value] of countS) {
        if (countT.get(key)!=value) {
            return false;
        }
    }
    return true;
}

// solution 1
    function groupAnagrams(strs) {
        const res = new Map();
        
        for (let s of strs) {
            const sortedS = s.split('').sort().join('');
            if (!res.has(sortedS)) {
                res.set(sortedS, []);
            }
            res.get(sortedS).push(s);
        }
        return Array.from(res.values());
    }

// solution 2
// function groupAnagrams(strs) {
//     const res = new Map();
//     for (let s of strs) {
//         for (let c of s) {
//             count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
//         }
//         const key = count.join(',');
//         if (!res.has(key)) {
//             res.set(key, []);
//         }
//         res.get(key).push(s);
//     }

//     return Array.from(res.values());
// }

let string = ["dhg", "agfggg"];
console.log(groupAnagrams(string));



// const prompt = require('prompt-sync')();
// let n = Number(prompt("Nhap N: "));
// const a=[];
// for (let i = 0;i<n;i++) {
//     let val = Number(prompt(`Nhap vao phan tu thu ${i} `));
//     a.push(val);
// }





// const unique = [];
// for (let i = 0; i < a.length; i++) {
//     if (a[i] == "") continue;
//     unique.push(a[i]);
//     for (let j = i + 1; j < a.length; j++) {
//         if (a[j] == "") continue;
//         if (a[i] === a[j]) {
//             a[j] = "";
//         }
//     }
// }

// console.log(unique);
// unique.sort((x, y) => x - y);
// console.log(unique);
// let count = 1;
// for (let i = 0;i<unique.length;i++) {
//     if (unique[i + 1] - unique[i] == 1) {
//         count++;
//     }
// }
// console.log(count);
    


