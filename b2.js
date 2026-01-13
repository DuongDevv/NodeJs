const prompt = require('prompt-sync')();

class TamGiac{
    constructor(c1,c2,c3){
        this.canh1=c1
        this.canh2=c2
        this.canh3=c3
    }

    nuaChuVi(){
        return (this.canh1+this.canh2+this.canh3)/2
    }

    dienTich(){
        let p = this.nuaChuVi();
        return Math.sqrt(p*(p-this.canh1)*(p-this.canh2)*(p-this.canh3))
    }

    chuVi(){
        return  this.canh1+this.canh2+this.canh3
    }

    laTamGiac() {
        return (this.canh1 + this.canh2 > this.canh3) &&
               (this.canh1 + this.canh3 > this.canh2) &&
               (this.canh2 + this.canh3 > this.canh1);
    }

    loaiTamGiac() {
        const a = this.canh1, b = this.canh2, c = this.canh3;
        
        if (!this.laTamGiac()) return "Không phải tam giác";
        
        if (a === b && b === c) return "Tam giác đều";
        
        if (a === b || b === c || a === c) {
            if (this.laTamGiacVuong()) return "Tam giác vuông cân";
            return "Tam giác cân";
        }
        
        if (this.laTamGiacVuong()) return "Tam giác vuông";
        
        return "Tam giác thường";
    }

    laTamGiacVuong() {
        let a2 = this.canh1 ** 2, b2 = this.canh2 ** 2, c2 = this.canh3 ** 2;
        return (Math.abs(a2 + b2 - c2) < 0.1) || 
               (Math.abs(a2 + c2 - b2) < 0.1) || 
               (Math.abs(b2 + c2 - a2) < 0.1);
    }

}

const c1 = parseFloat(prompt("Nhập cạnh thứ nhất:"));
const c2 = parseFloat(prompt("Nhập cạnh thứ hai:"));
const c3 = parseFloat(prompt("Nhập cạnh thứ ba:"));

const tg = new TamGiac(c1,c2,c3);

console.log(`chu vi la: ${tg.chuVi()}`)
console.log(`dien tich la: ${tg.dienTich()}`)