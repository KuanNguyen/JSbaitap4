

function tinhThue(){
    var hoTen = document.getElementById("ten").value;
    var thuNhap = document.getElementById("thuNhap").value;
    var soNguoi = document.getElementById("soNguoi").value;
    var tnChiuThue = 0;
    var thue = 0;

    tnChiuThue = Number(thuNhap) - 4e+6 - Number(soNguoi) * 1600000; 

    if(thuNhap <= 6e+7){
        thue = Number(tnChiuThue) * 0.05; 
    }else if(thuNhap > 6e+7 && thuNhap <= 12e+7){
        thue = Number(tnChiuThue) * 0.1; 
    }else if(thuNhap > 12e+7 && thuNhap <= 21e+7){
        thue = Number(tnChiuThue) * 0.15; 
    }else if(thuNhap > 12e+7 && thuNhap <=384e+6){
        thue = Number(tnChiuThue) * 0.2; 
    }else if(thuNhap > 384e+6 && thuNhap <=624e+6){
        thue = Number(tnChiuThue) * 0.25; 
    }else if(thuNhap > 624e+6 && thuNhap <= 96e+7){
        thue = Number(tnChiuThue) * 0.3; 
    }else if(thuNhap > 96e+7){
        thue = Number(tnChiuThue) * 0.35; 
    }

    document.getElementById("alert1").innerHTML = "Họ và tên: " + hoTen + " Thuế thu nhập cá nhân: " + Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(thue); 
}

document.getElementById("tinh").onclick = tinhThue;