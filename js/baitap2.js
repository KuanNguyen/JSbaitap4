// Cho nhà dân
const ND_HOADON = 4.5;
const ND_DICHVU = 20.5;
const ND_THUEKENH = 7.5;

// Cho doanh nghiệp
const DN_HOADON = 15;
const DN_DICHVU = 75;
const DN_DICHVU_PLUS = 5;
const DN_THUEKENH = 50;

function tienCap() {
    // Ma Khach Hang
    var maKH = document.getElementById('maKH').value;

    // So kenh
    var soKenh = Number(document.getElementById('soKenh').value);

    // Tuy chon
    var loaiKhach = document.querySelector('#loaiKhach');
    var khachHang = loaiKhach.options[loaiKhach.selectedIndex].value;

    var thanhTien = 0;
    if (khachHang == '') {
        document.querySelector('#alert2').innerHTML = 'Mã khách hàng: ' + maKH + '; Tiền cáp:' + thanhTien;
        alert('Mã khách hàng không hợp lệ');

    } else if (khachHang == 'nD') {
        thanhTien = (ND_THUEKENH * soKenh) + ND_HOADON + ND_DICHVU;
    } else if (khachHang == 'dN') {
        // Số kết nối cho DN
        var soKetNoi = Number(document.getElementById('soKetNoi').value);
        if (soKetNoi == 0) {
            document.querySelector('#alert2').innerHTML = 'số kết nối phải lớn hơn 0';
            return;
        }else if (soKetNoi > 0 && soKetNoi <= 10) {
            thanhTien = (DN_THUEKENH * soKenh) + DN_HOADON + DN_DICHVU;
        } else if (soKetNoi > 10) {
            thanhTien = (DN_THUEKENH * soKenh) + DN_HOADON + DN_DICHVU + (soKetNoi - 10) * DN_DICHVU_PLUS;
        } 
    }

    document.querySelector('#alert2').innerHTML = 'Mã khách hàng: ' + maKH + '; Tiền cáp: $' + thanhTien.toLocaleString();
}
document.querySelector('#tinhTien').onclick = tienCap;