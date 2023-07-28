let slideIndex = [0, 11]; // Chỉ số bắt đầu và kết thúc của các phần tử <tr> được hiển thị

function plusSlides(n) {
    let list = document.getElementsByTagName("tr");
    // chuyển sang trang sau
    if (n > 0) {
        // Nếu chưa đến trang cuối cùng
        if (slideIndex[1] < list.length - 1) {
            // Tăng cả hai phần tử của mảng lên 10
            slideIndex[0] += 10;
            slideIndex[1] += 10;
        } else {
            // Nếu đã đến trang cuối cùng, quay lại trang đầu tiên
            slideIndex[0] = 0;
            slideIndex[1] = 11;
        }
    } else {
        // chuyển sang trang trước
        // Nếu chưa về trang đầu tiên
        if (slideIndex[0] > 0) {
            // Giảm cả hai phần tử của mảng xuống 10
            slideIndex[0] -= 10;
            slideIndex[1] -= 10;
        } else {
            // Nếu đã về trang đầu tiên, chuyển sang trang cuối cùng
            slideIndex[1] = list.length - 1;
            slideIndex[0] = slideIndex[1] - 11;
        }
    }
    // Gọi hàm showSlides với mảng slideIndex làm tham số
    showSlides(slideIndex);
}

function currentSlide(n) {
    // Gán cho phần tử thứ nhất của mảng là (n - 1) nhân với 10
    slideIndex[0] = (n - 1) * 10;
    // Gán cho phần tử thứ hai là phần tử thứ nhất cộng với 11
    slideIndex[1] = slideIndex[0] + 11;
    // Gọi hàm showSlides với mảng slideIndex làm tham số
    showSlides(slideIndex);
}

function showSlides(n) {
    let list = document.getElementsByTagName("tr");
    let dots = document.getElementsByClassName("dot");
    // Ẩn tất cả các phần tử <tr>
    for (let i = 0; i < list.length; i++) {
        list[i].style.display = "none";
    }
    // Bỏ class "active" cho tất cả các nút "dot"
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Hiển thị các phần tử <tr> từ phần tử thứ slideIndex[0] đến phần tử thứ slideIndex[1]
    for (let i = n[0]; i <= n[1]; i++) {
        list[i].style.display = "block";
    }

    
}
window.onload = function() {
    showSlides(slideIndex); // Hiển thị trang đầu tiên
    };