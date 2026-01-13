const prompt = require('prompt-sync')();

class PhanSo {
    constructor(tuSo, mauSo) {
        if (mauSo === 0) {
            throw new Error("Mẫu số phải khác 0");
        }
        this.tuSo = tuSo;
        this.mauSo = mauSo;
        this.rutGon(); 
    }

    
    #timUCLN(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // phuong thuc rut gon phan so
    rutGon() {
        const ucln = this.#timUCLN(this.tuSo, this.mauSo);
        this.tuSo /= ucln;
        this.mauSo /= ucln;
        
        
        if (this.mauSo < 0) {
            this.tuSo = -this.tuSo;
            this.mauSo = -this.mauSo;
        }
    }

    
    cong(ps2) {
        let tuMoi = this.tuSo * ps2.mauSo + ps2.tuSo * this.mauSo;
        let mauMoi = this.mauSo * ps2.mauSo;
        return new PhanSo(tuMoi, mauMoi);
    }

    
    tru(ps2) {
        let tuMoi = this.tuSo * ps2.mauSo - ps2.tuSo * this.mauSo;
        let mauMoi = this.mauSo * ps2.mauSo;
        return new PhanSo(tuMoi, mauMoi);
    }

  
    nhan(ps2) {
        let tuMoi = this.tuSo * ps2.tuSo;
        let mauMoi = this.mauSo * ps2.mauSo;
        return new PhanSo(tuMoi, mauMoi);
    }

   
    chia(ps2) {
        if (ps2.tuSo === 0) throw new Error("Không thể chia cho 0");
        let tuMoi = this.tuSo * ps2.mauSo;
        let mauMoi = this.mauSo * ps2.tuSo;
        return new PhanSo(tuMoi, mauMoi);
    }

    
    hienThi() {
        return `${this.tuSo}/${this.mauSo}`;
    }
}



const ps1 = new PhanSo(tuSo1, mauSo1); 
const ps2 = new PhanSo(tuSo2, mauSo2); 
const tuSo1 = parseInt(prompt('nhap tu so: '));
const mauSo1 = parseInt(prompt('nhap mau so: '));
const tuSo2= parseInt(prompt('nhap tu so: '));
const mauSo2= parseInt(prompt('nhap mau so: '));



console.log(`Phân số 1: ${ps1.hienThi()}`);
console.log(`Phân số 2: ${ps2.hienThi()}`);
console.log(`Tổng: ${ps1.cong(ps2).hienThi()}`);  
console.log(`Hiệu: ${ps1.tru(ps2).hienThi()}`);  
console.log(`Tích: ${ps1.nhan(ps2).hienThi()}`);  