# Kiana — Chính sách bảo mật & Quy tắc

Website tĩnh tiếng Việt, HTML/CSS/JavaScript thuần. Mở `index.html` trong trình duyệt, không cần cài đặt hay build. Thư mục `dist/` chứa bản sẵn để đưa lên dịch vụ hosting tĩnh.

- `index.html`: giao diện và nội dung.
- `style.css`: bố cục responsive cho điện thoại và máy tính.
- `script.js`: chuyển tab, mục lục và hộp hướng dẫn liên hệ; hỗ trợ bàn phím.
- `assets/`: ba ảnh Kiana có sẵn trong workspace.

Nội dung chính sách là bản mẫu. Trước khi công bố chính thức, chủ bot cần xác nhận loại dữ liệu thực tế, mục đích xử lý, thời hạn lưu, bên nhận dữ liệu và thông tin liên hệ. Nút liên hệ và hỗ trợ mở máy chủ Discord: https://discord.gg/xAAEQrjnyp.

Có chuyển đổi Việt/Anh và giao diện sáng/tối. Lựa chọn được lưu bằng localStorage trên trình duyệt; nếu chưa chọn, giao diện theo cài đặt hệ thống. Không sử dụng CDN, thư viện, analytics hoặc cookie trong mã trang. Hình ảnh được tải từ assets cục bộ.

Bản local đã kiểm tra cú pháp JavaScript, ID HTML, liên kết nội bộ và đường dẫn assets. Chưa kiểm tra tự động trong trình duyệt.

`preferences.js` chứa bản dịch tiếng Anh và chức năng ngôn ngữ/giao diện. Thông báo phi lợi nhuận, chưa xin phép và chưa được cấp phép xuất hiện trong nội dung và chân trang.

## GitHub Pages

Workflow `.github/workflows/pages.yml` kiểm tra JavaScript và đóng gói các file nguồn cùng assets khi push hoặc tạo pull request vào `main`/`master`. Chỉ push trên nhánh mặc định hoặc chạy thủ công trên nhánh mặc định mới triển khai; pull request chỉ kiểm tra và đóng gói.

Trong repository `Weita-tech/TunaDiscordTOS`, chọn **Settings → Pages → Build and deployment → Source → GitHub Actions**. Sau khi đẩy mã nguồn, theo dõi workflow **Deploy GitHub Pages** trong tab Actions. Workflow tạo gói từ nguồn tại thư mục gốc nên không phụ thuộc bản `dist/` đã lưu.
