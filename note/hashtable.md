# Hashtable (Key -> Hash(key) -> index -> value) 
## (Hash set là 1 tập không trùng lặp, ko index) (HashMap gồm 1 bảng key và value, có trùng lặp)
## Tìm kiếm tuần tự quá lâu O(n), có cách nào tính ra vị trí và nhảy thẳng đến đó luôn không? Có, và đó là ý tưởng của Hashtable
### VD thực tế:
- Trường có 10 cái tủ đánh số từ 0-9.
- Quy tắc gửi đồ: Lấy số cuối của mã sinh viên → đó là số tủ.  
SV "An"    — MSSV 2021043 → 3 % 10 = 3  → tủ số 3  
SV "Bình"  — MSSV 2021087 → 7 % 10 = 7  → tủ số 7  
SV "Cường" — MSSV 2021056 → 6 % 10 = 6  → tủ số 6

Khi cần lấy đồ của "An" (MSSV 2021043)  

=> Không cần mở từng tủ ra kiểm tra  
Tính 2021043 % 10 = 3 → đi thẳng đến tủ 3 → xong

Phép tính MSSV % 10 chính là *hash function*. Dãy tủ locker chính là *hash table*.

## Collision ( nếu hash key cả 2 ra cùng 1 index thì làm thế nào) =>  lưu bằng Linked List

| Thao tác | Array (tìm theo giá trị) | Hash Table |
| :--- | :--- | :--- |
| **Tìm kiếm** | O(n) | O(1) trung bình |
| **Thêm** | O(n)  | O(1) trung bình |
| **Xóa** | O(n) | O(1) trung bình |

### Áp dụng 
- Các bài toán tìm trùng: two sum, containsDuplicate
- Các bài toán đếm số lần xuất hiện: IsAnagram

<img width="1379" height="682" alt="image" src="https://github.com/user-attachments/assets/485017e8-fe0c-436b-a799-9168d197906c" />      


<img width="1580" height="681" alt="image" src="https://github.com/user-attachments/assets/292bcb57-b271-47c4-bd70-e34584356ec2" />