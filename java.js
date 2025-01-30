
    document.getElementById("commentForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn tải lại trang

        // Lấy giá trị nhập vào
        var name = document.getElementById("name").value;
        var comment = document.getElementById("comment").value;

        if (name.trim() === "" || comment.trim() === "") {
            alert("Vui lòng nhập đầy đủ tên và bình luận!");
            return;
        }

        // Tạo phần tử bình luận mới
        var commentList = document.getElementById("commentList");
        var newComment = document.createElement("div");
        newComment.classList.add("comment-item");
        newComment.innerHTML = `<strong>${name}</strong>: ${comment}`;

        // Thêm bình luận vào danh sách với hiệu ứng
        commentList.appendChild(newComment);

        // Xóa nội dung input sau khi gửi
        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
    });



    // Lấy các phần tử
    const openBtn = document.getElementById("qnga-btn");  // Nút mở hộp thoại
    const dialog = document.getElementById("qnga");      // Hộp thoại
    const closeBtn = document.getElementById("close-btn");  // Nút đóng hộp thoại

    // Mở hộp thoại khi nhấn vào "QNga"
    openBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Ngừng hành động mặc định (chuyển hướng)
        dialog.style.display = "flex"; // Hiển thị hộp thoại
    });

    // Đóng hộp thoại khi nhấn vào nút đóng
    closeBtn.addEventListener("click", function(event) {
        event.preventDefault();
        dialog.style.display = "none"; // Ẩn hộp thoại
    });

    // Đóng hộp thoại khi nhấn ra ngoài (nền tối)
    dialog.addEventListener("click", function(event) {
        if (event.target === dialog) {
            dialog.style.display = "none"; // Ẩn hộp thoại khi nhấn ra ngoài
        }
    });