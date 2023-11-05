#INSTAGRAM CLONE
## Mô tả
Đây là một ứng dụng Instagram được thực hiện bởi 3 thành viên
1. Nguyễn Văn Hiếu ( D16CNPM5 )
2. Nguyễn Văn Hiếu ( D16CNPM7 )
3. Nguyễn Minh Hiếu ( D16CNPM7 )

Đây là giao diện (front-end) của ứng dụng Instagram được dùng để làm báo cáo cuối kỳ cho môn 'Lập trình Mobile' của trường Đại học Điện Lực năm 2023

## Hướng dẫn sử dụng Github
1. Git add: Lệnh git add được sử dụng để thêm các thay đổi vào vùng đệm (staging area) của Git. Vùng đệm là nơi lưu trữ các thay đổi mà bạn muốn đưa vào phiên bản tiếp theo của dự án của mình.
- Cú pháp cơ bản của lệnh git add :
+ git add . (Thêm tất cả các thay đổi trong thư mục hiện tại)
+ git add index.html (Thêm các thay đổi trong tệp index.html)

2. Git commit: được sử dụng để lưu các thay đổi trong vùng đệm (staging area) của Git vào lịch sử của dự án. Lịch sử của dự án là nơi lưu trữ tất cả các thay đổi đã được thực hiện đối với dự án của bạn.
- Cú pháp cơ bản của lệnh git commit:
+ Ví dụ: để lưu các thay đổi trong vùng đệm với thông báo "Thêm một tính năng mới", bạn có thể sử dụng lệnh sau:
git commit -m "Thêm một tính năng mới"

3. git push: được sử dụng để đẩy các thay đổi từ kho lưu trữ cục bộ của bạn lên kho lưu trữ từ xa. Kho lưu trữ từ xa là kho lưu trữ của dự án của bạn trên GitHub
- Dưới đây là cú pháp cơ bản của lệnh git push:
git push -u origin (Tên nhánh): câu lệnh này sẽ chỉ cần nhập khi lần đầu push lên nhánh. Kể từ lần push thứ 2 thì chỉ cần gõ lệnh git push là code sẽ tự động được push lên nhánh.

4. git checkout -b : được sử dụng để tạo và chuyển sang một nhánh mới trong Git. Cờ -b có nghĩa là "branch", và nó sẽ yêu cầu Git tạo một nhánh mới với tên được chỉ định.
- Dưới đây là cú pháp của lệnh git checkout -b:
git checkout -b (tên-nhánh)
+ Ví dụ: để tạo một nhánh mới có tên feature và chuyển sang nhánh đó, bạn sẽ sử dụng lệnh sau:
git checkout -b feature

5. git pull : được sử dụng để lấy các thay đổi mới từ kho lưu trữ từ xa và hợp nhất chúng vào kho lưu trữ cục bộ của bạn. Kho lưu trữ từ xa là kho lưu trữ của dự án của bạn trên GitHub.