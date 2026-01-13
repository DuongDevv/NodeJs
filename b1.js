class HinhChuNhat{
    constructor(r,c){
        this.chieuRong =r
        this.chieuCao=c
    }
    tinhDienTich(){
    return this.chieuCao*this.chieuRong;
}
    tinhChuVi(){
    return (this.chieuCao+this.chieuRong)*2
}
}

const hcn = new HinhChuNhat(2,3);


console.log(`dien tich la: ${hcn.tinhDienTich()}`)
console.log(`chu vi la: ${hcn.tinhChuVi()}`)
