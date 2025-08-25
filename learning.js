class customerRequest{
constructor(customerName, phoneNumber, email, items, status, orderDate, orderId,){
    this.customerName = customerName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.items = items;
    this.status = status;
    this.orderDate = orderDate;
    this.orderId = orderId;

}

totalItem(){
    let totalItem = 0
    for(let i =0; i < this.items.length; i++){
    totalItem+= this.items[i].quantity;
    }
    return totalItem;
}
totalPrice(){
    let totalPrice = 0
    for(let i = 0; i< this.items.length;i++){
        totalPrice += this.items[i].price * this.items[i].quantity
    }
    return totalPrice;
    
}
}

const newcustomerRequest = new customerRequest (`Ayobami Pilli`, `08069168457`, `alagbidi@gmail.com`,
 [{name: "Sandwiches", price: 30, quantity: 30}, 
     {name: `bread`, price: 70, quantity: 89}, 
     {name: `jame`, price: 300, quantity: 90}],
      `pending`, `25 Aug 2025`, 8976865  )
console.log(newcustomerRequest.totalItem());
console.log(newcustomerRequest.totalPrice());