class Ngay {
    constructor(ngay, thang, nam) {
        this.ngay = ngay;
        this.thang = thang;
        this.nam = nam;
    }


    laNamNhuan() {
        return (this.nam % 400 === 0) || (this.nam % 4 === 0 && this.nam % 100 !== 0);
    }

    tinhSoNgayTrongThang() {
        switch (this.thang) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                return 31;
            case 4: case 6: case 9: case 11:
                return 30;
            case 2:
                return this.laNamNhuan() ? 29 : 28;
            default:
                return 0; 
        }
    }

    tinhTuanTrongNam() {
 
        let tongNgay = this.ngay;
        for (let i = 1; i < this.thang; i++) {
            const tamNgay = new Ngay(1, i, this.nam);
            tongNgay += tamNgay.tinhSoNgayTrongThang();
        }
        return Math.ceil(tongNgay / 7);
    }

    hienThiFull() {
        return `${this.ngay}/${this.thang}/${this.nam}`;
    }
}

const myDate = new Ngay(15, 8, 2025 );

console.log(`Ngay: ${myDate.hienThiFull()}`);
console.log(`Nam ${myDate.nam} co nhuan khong ${myDate.laNamNhuan() ? "Co" : "Khong"}`);
console.log(`Thang ${myDate.thang} nam ${myDate.nam} co: ${myDate.tinhSoNgayTrongThang()} ngay`);
console.log(`Ngay nay thuoc tuan thu: ${myDate.tinhTuanTrongNam()} trong nam`);