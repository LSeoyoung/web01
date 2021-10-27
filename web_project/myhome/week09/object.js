const product = {
    designer : "홍길동",
    price : 1500, 
    name : "액자",
    print : function(){
        console.log(this.designer + "," + this.price + "," + this.name);
    }
}
console.log(product.price+","+product["name"]);
product.print();