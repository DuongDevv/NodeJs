class Product {
    #id
    #name
    #price
    constructor(id, name, price){
        this.#id = id
        this.#name = name
        this.price = price
    }
    get id(){
        return this.#id;
    }
    set id(newId){
        this.#id = newId
    }
    get name(){
        return this.#name;
    }
    set name(newName){
        this.#name = newName
    }
    get price(){
        return this.#price;
    }
    set price(newPrice){
        if (newPrice<0)return `Gia khong the < 0`
        else this.#price = newPrice
    }

    toString(){
        return `${this.#id} | ${this.#name} | ${this.#price}`
    }
}
const ds=[]
const sp1 = new Product("SP01", "Chuot Logitec", 350000)
const sp2 = new Product("SP02", "Man hinh", 350000000)
const sp3 = new Product("SP03", "Ban phim", 3500000)
ds.push(sp1,sp2,sp3);
console.log("=".repeat(30))
console.log(`Danh sach san pham hien co:`)
ds.forEach(item=>{
    console.log(item.toString())
});

//Bai 02
class OrderItem{
    constructor(product, quantity){
        this.product = product
        this.quantity = quantity
    }

    calculation(){
        return this.quantity * this.product.price
    }
}
console.log("=".repeat(30))
console.log("Gia tien x so luong cua 1 san pham la: ")
const item = new OrderItem(sp2,2)
console.log(`${item.product.name} x ${item.quantity} = ${item.calculation()} `)


//Bai 03
class Order {
constructor(orderId) {
    this.orderId = orderId;
    this.items = []; 
}

addItem(product, quantity) {
    const newItem = new OrderItem(product, quantity);
    this.items.push(newItem);
}

getTotalAmount() {
    return this.items.reduce((total, item) => {
        return total + item.calculation();
    }, 0);
}

printOrder() {
    console.log(`MÃ ĐƠN HÀNG: ${this.orderId}`);
    this.items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.product.name}`);
        console.log(`   ${item.quantity} x ${item.product.price} = ${item.calculation()} VND`);
    });

    console.log(`Tong tien: ${this.getTotalAmount()} VND`);
}
}
console.log("=".repeat(30))
const myOrder = new Order("BILL-2024-001");
myOrder.addItem(ds[0], 2); 
myOrder.addItem(ds[2], 1); 
myOrder.printOrder();
