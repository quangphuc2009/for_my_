// Gắn sự kiện cho nút "Gửi"
document.getElementById('submit-btn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    
    // Kiểm tra xem đã nhập đủ thông tin chưa
    if (name.trim() !== '' && dob.trim() !== '') {
        // Ẩn khu vực nhập liệu
        document.getElementById('input-area').classList.add('hidden');
        
        // Hiển thị hộp quà
        const giftBox = document.getElementById('gift-box');
        giftBox.classList.remove('hidden');
        
        // Đặt opacity (độ trong suốt) ban đầu là 0 để nó rơi xuống sau khi được hiển thị
        giftBox.style.opacity = 0; 

        // Đảm bảo hộp quà rơi từ trên xuống bằng cách kích hoạt lại hiệu ứng sau khi hiển thị
        setTimeout(() => {
            giftBox.style.opacity = 1; // Làm cho nó hiện lên
        }, 10); // Chờ 10ms để trình duyệt kịp cập nhật
        
    } else {
        alert('Vui lòng nhập đầy đủ Họ và Tên cùng Ngày Tháng Năm Sinh!');
    }
});

// Hàm được gọi khi click vào hộp quà (được gắn trong index.html)
function openGift() {
    // Ẩn hộp quà
    document.getElementById('gift-box').classList.add('hidden');
    
    // Hiện tin nhắn trái tim
    document.getElementById('message-container').classList.remove('hidden');
}