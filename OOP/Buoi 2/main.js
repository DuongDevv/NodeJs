const prompt  = require('prompt-sync')();
// `npm install prompt-sync` de tai o Terminal
class ThuVien{
    constructor(maSach, donGia, soLuong, nhaXuatBan){
        this.maSach = maSach;
        this.donGia = Number(donGia) || 0;
        this.soLuong = Number(soLuong) || 0;
        this.nhaXuatBan = nhaXuatBan;
    }
}

class SachGiaoKhoa extends ThuVien{
    constructor(maSach, donGia, soLuong, nhaXuatBan, tinhTrang){
        super(maSach, donGia, soLuong, nhaXuatBan);
        this.tinhTrang = Number(tinhTrang);
    }

    tinhThanhTien(){
        return this.tinhTrang == 1 ? this.soLuong * this.donGia : this.soLuong * this.donGia * 0.5
    }
}

class SachThamKhao extends ThuVien{
    constructor(maSach, donGia, soLuong, nhaXuatBan, thue){
        super(maSach, donGia, soLuong, nhaXuatBan);
        this.thue = Number(thue) || 0;
    }

    tinhThanhTien(){
        return this.soLuong * this.donGia + this.thue;
    }
}

class QuanLyThuVien{
    constructor(){
        this.danhSachSach = [];
    }

    themSach(sach){
        this.danhSachSach.push(sach);
    }

    tinhTongThanhTien(loai){
        return this.danhSachSach
            .filter(sach => sach instanceof loai )
            .reduce((sum, sach) => sum + sach.tinhThanhTien(), 0);
    }

    tinhTrungBinhDonGia(loai){
        const danhSachLoai = this.danhSachSach.filter(sach => sach instanceof loai);
        if (danhSachLoai.length === 0 ) return 0;

        const tongDonGia = danhSachLoai.reduce((sum, sach) => sum + sach.donGia, 0) ;
        return tongDonGia / danhSachLoai.length;
    }

    hienThiDanhSach(){
        console.table(this.danhSachSach);
    }
}

const qltv = new QuanLyThuVien();


const ql = new QuanLyThuVien();

while (true) {
    console.log("\n--- MENU QUẢN LÝ THƯ VIỆN ---");
    console.log("1. Nhập Sách Giáo Khoa");
    console.log("2. Nhập Sách Tham Khảo");
    console.log("3. Xuất danh sách & Thống kê");
    console.log("0. Thoát");
    
    const choice = prompt("Lựa chọn của bạn: ");

    if (choice === "0") break;

    if (choice === "1" || choice === "2") {
        const ma = prompt("Mã sách: ");
        const gia = prompt("Đơn giá: ");
        const sl = prompt("Số lượng: ");
        const nxb = prompt("NXB: ");

        if (choice === "1") {
            const tt = prompt("Tình trạng (1: mới, 0: cũ): ");
            ql.themSach(new SachGiaoKhoa(ma, gia, sl, nxb, tt));
        } else {
            const thue = prompt("Thuế: ");
            ql.themSach(new SachThamKhao(ma, gia, sl, nxb, thue));
        }
    } else if (choice === "3") {
        console.table(ql.danhSachSach);
        console.log(`- Tổng tiền SGK: ${ql.tinhTongThanhTien(SachGiaoKhoa)}`);
        console.log(`- Tổng tiền STK: ${ql.tinhTongThanhTien(SachThamKhao)}`);
        console.log(`- TBC Đơn giá SGK: ${ql.tinhTrungBinhDonGia(SachGiaoKhoa)}`);
        console.log(`- TBC Đơn giá STK: ${ql.tinhTrungBinhDonGia(SachThamKhao)}`);
    }
}