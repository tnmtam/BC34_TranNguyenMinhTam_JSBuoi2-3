// Ex1
/**
 * Input: Số ngày làm, lương 1 ngày
 * Process:
 * -Tìm cách lấy được input
 * -Tính lương: Số ngày làm * lương 1 ngày
 * -In lương tính được ra màn hình
 * 
 * Output: Tính tổng lương
 */
document.getElementById("btnTinhLuong").onclick = function () {
    //Input:
    const luongNgay = 100000;
    var day = document.getElementById("day").value;
    //Process:
    var total = day * luongNgay;
    //VND
    var formart = new Intl.NumberFormat("vn-VN");
    var totalVnd = formart.format(total) + ' VND';
    //Output:
    document.getElementById("allLuong").innerHTML = 'Tổng lương của ' + day + ' ngày là: ' + totalVnd;

}
/**
 * document.getElementById("btnSubmit").onclick = function () {
    //Input:
    var tenPhim = document.getElementById("tenPhim").value;
    var giaVeNL = document.getElementById("giaVeNL").value * 1;
    var sLVeNL = document.getElementById("sLVeNL").value * 1;
    var giaVeTE = document.getElementById("giaVeTE").value * 1;
    var sLVeTE = document.getElementById("sLVeTE").value * 1;
    var phanTram = document.getElementById("phanTram").value;
    //Process:
    var soVeDB = sLVeNL + sLVeTE;
    var doanhThu = sLVeNL * giaVeNL + sLVeTE * giaVeTE;
    var allTuThien = doanhThu * phanTram / 100;
    var loiNhuan = doanhThu - allTuThien;
    //formart VND
    var formart = new Intl.NumberFormat("vn-VN");
    // Output:
    var showInfo = "";
    showInfo += "<div class='bg-success'>";
    showInfo += "<p>Tên phim:......... " + tenPhim + "</p>";
    showInfo += "<p>Số vé đã bán:......... " + soVeDB + "</p>";
    showInfo += "<p>Doanh thu:......... " + formart.format(doanhThu) + " Vnd</p>";
    showInfo += "<p>Tổng % từ thiện:......... " + phanTram + " %</p>";
    showInfo += "<p>Tổng tiền trích từ thiện:......... " + formart.format(allTuThien) + " Vnd</p>";
    showInfo += "<p>Lợi nhuận:......... " + formart.format(loiNhuan) + " Vnd</p>";
    showInfo += "</div>";
    document.getElementById("thongBaoMovie").innerHTML = showInfo;
}
 */

// Ex2
/**
 * Input: 5 giá trị số thực
 * Process:
 * -Tìm cách lấy được input là 5 số thực
 * -Tính trung bình: tổng giá trị 5 số thực / 5
 * -In giá trị trung bình tính được ra màn hình
 * 
 * Output: Tính trung bình của 5 giá trị số thực 
 */
document.getElementById('btnTinhTB').onclick = function () {
    //Input:
    var nB1 = document.getElementById('nB1').value * 1;
    var nB2 = document.getElementById('nB2').value * 1;
    var nB3 = document.getElementById('nB3').value * 1;
    var nB4 = document.getElementById('nB4').value * 1;
    var nB5 = document.getElementById('nB5').value * 1;
    //Process
    var average = (nB1 + nB2 + nB3 + nB4 + nB5) / 5;
    //Output
    document.getElementById('giaTriTB').innerHTML = 'Giá trị trung bình của 5 số thực là: ' + average;
}


// Ex3
/**
 * Input: Số tiền usd, giá trị quy đổi 1usd = 23.500vnd
 * Process:
 * -Tìm cách lấy được input
 * -Tính giá trị quy đổi: Số tiền usd * Giá trị quy đổi
 * -In ra số tiền sau khi quy đổi ra màn hình
 * 
 * Output: Tính số tiền sau khi quy đổi
 */
document.getElementById('btnTinhTien').onclick = function () {
    //Input:
    const dollar = 23500;
    var money = document.getElementById('money').value * 1;
    //Process:
    var change = money * dollar;
    //VND
    var formart = new Intl.NumberFormat("vn-VN");
    var totalVnd = formart.format(change) + ' VND';
    //Output:
    document.getElementById('total').innerHTML = 'Quy đổi ' + money + ' USD được ' + totalVnd;
}

//Ex4
/**
 * Input: giá trị chiều dài và chiều rộng
 * Process: 
 * -Tìm cách lấy được input
 * -Tính diện tích: chiều dài * chiều rộng
 * -Tính chu vi: (dài + rông) * 2
 * -In ra giá trị diện tích và chu vi tính được ra màn hình
 * 
 * Output: Tính diện tích và chu vi hình chữ nhật
 */
document.getElementById('btnTinhHCN').onclick = function () {
    //Input:
    var height = document.getElementById('height').value * 1;
    var width = document.getElementById('width').value * 1;
    //Process:
    var cv = (height + width) / 2; 
    var dt = height* width;
    //Output:
    var showInfo = "";
    showInfo += "<p>Chu vi Hình Chữ Nhật là: "+ cv + "</p>";
    showInfo += "<p>Diện tích Hình Chữ Nhật là: "+ dt + "</p>";
    document.getElementById('result').innerHTML = showInfo;
}

//Ex5
/**
 * Input: Giá trị có 2 chữ số
 * Process:
 * -Tìm cách lấy được input
 * -Lấy giá trị ở hàng đơn vị: so % 10
 * -Lấy giá trị ở hàng chuc: Math.floor(sp / 10)
 * -Tính tổng: dv + chuc
 * -In tổng của 2 ký số vừa nhập ra màn hình
 * 
 * Output: Tính tổng 2 ký số vừa nhập
 */
document.getElementById('btnTinhTong').onclick = function () {
    //Input:
    var number = document.getElementById('number').value * 1;
    //Process:
    total = (number % 10) + (Math.floor(number / 10));
    //Output:
    document.getElementById('sum').innerHTML= 'Tổng 2 ký số đã nhập là: ' + total;

}

