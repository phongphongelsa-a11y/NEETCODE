# Two-pointer
- Là kĩ thuật sử dụng 2 biến ở 2 vị trí khác nhau trong cấu trúc dữ liệu
## Tại sao dùng Two-pointer
- Lợi dụng tính chất bài toán để quyết định move con trỏ, suy ra cách giải tốt hơn.
- Mỗi lần move phải loại trừ được gì đó , không cần thử.
- *Pattern chung là suy luận ra được luôn, mà không cần phải tính thử*

## Các dạng Two pointer
- 2 con trỏ đối xứng (từ 2 đầu vào giữa).
- 2 con trỏ cùng chiều (slow and fast).
- Sliding window
- 2 con trỏ chạy trên 2 data khác nhau
## Độ phức tạp
- Giúp giảm Space Complexcity và Time Complexcity vì làm in-place (xét về space complexcity)
## Ứng dụng 
- Lợi dụng tính chất bài toán như Two Sum Input Sorted Array
- Các bài kiểm tra đối xứng.
- VD: Bài toán Two Sum Input Sorted Array (quyết định move con trỏ nào dựa trên so sánh với target)
  + Nếu đã sắp xếp, t hấy tính chất là
  + Nếu tổng quá nhỏ -> tăng right
  + Nếu tổng quá lớn -> giảm left
