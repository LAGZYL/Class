// // 5u79oopg-p58or7i65egfwadze785i69o7o     //encapsulation 
//  //access modifier - public, private - #

//  class BankAccount {
//     #balance; //private field 

//     constructor(holder, initialBalance){
//         this.holder = holder;
//         this.#balance = initialBalance;
//         this.mytax = initialBalance * 0.3;
//     }

//     getTax() {
//         console.log("my tax", this.mytax);
//     }

//     getBalance(){
//         console.log(+this.#balance);
//         return this.#balance;
//     }

//     deposit(amount){
//          if (amount > 1000) {
//             this.#balance += amount;
//             console.log("Deposited amount", amount);
//             console.log("your balance is now", Number(this.#balance));
//         } else {
//             console.log("deposit amount shound be more than 0r equal to 1000")
//         }
//     }

//     withdraw(amount){ 
//         if (amount < this.#balance){
//             this.#balance -= amount;
//             console.log("withdrew" + " " +amount)
//         } else {
//             console.log("Insufficient balance")
//         }
//     }

//     #doNothing(){
//         console.log("i am private")
//     }
//  }

// //  const user1 = new BankAccount("Femi", 500);
// //  console.log(user1.holder);
// //  console.log(user1.mytax);
// //  console.log(user1.#balance);
// //  user1.#doNothing();
// //  user1.getTax()
// //  user1.withdraw(1000);
// //  user1.deposit(5000);
// //  user1.withdraw(2000);
// //  user1.getBalance();


// //inheritance 
// class SavingsAccount extends BankAccount {
//     constructor(holder, initialBalance, interestRate){
//         super(holder, initialBalance);
//         this.interest = interestRate;
//     }

//     addInterest(){
//         const interest = (this.getBalance() * this.interest) / 100;
//         this.deposit(interest);
//         console.log(`interest of ${interest} added`)
//     }
// }

// class CurrentAccount extends BankAccount {
//     constructor(holder, initialBalance, overDraftLimit){
//         super(holder, initialBalance);
//         this.overDraftLimit = overDraftLimit;
//     }

//     withdraw(amount){
//         if(amount <= this.getBalance() + this.overDraftLimit){
//             const newBalance = this.getBalance - amount;
//             super.withdraw(amount)
//         } else {
//             console.log("overdraft limit exceeded")
//         }
//     }
// }

// // const savings = new SavingsAccount("ken", 200000, 5)
// // savings.addInterest();
// // savings.getBalance();

// // const currentAccount1 = new CurrentAccount("Lagzyl", 100, 200)
// // currentAccount1.withdraw(1000);


// // polymorphism - method overriding
// class SavingsAccount2 extends BankAccount {
//      withdraw(amount){
//         if (amount > this.getBalance() * 0.8){
//             console.log(`cannot withdraw more than 80% ofnyour saving balance`)
//         } else {
//             super.withdraw(amount)
//         }
//     }
   
// }

// class CurrentAccount2 extends BankAccount {
//     constructor(holder, initialBalance, overDraftLimit){
//         super(holder, initialBalance);
//         this.overDraftLimit = overDraftLimit;
//     }

//     withdraw(amount){
//         if(amount <= this.getBalance() + this.overDraftLimit){
//             const newBalance = this.getBalance - amount;
//             super.withdraw(amount)
//         } else {
//             console.log("overdraft limit exceeded")
//         }
//     }
// }

// //abstraction

// //getter and setter
// class Payment{
//     #amount
//     #currency
//     constructor(amount, currency){
//         this.#amount = amount;
//         this.#currency = currency;
//     }
    
//     //getter
//     get amount(){
//         return this.#amount;
//     }

//     //setter
//     set amount(value){
//         if(value <= 0){
//             console.log("your amount must be greater than 0")
//         } else{
//             this.#amount = value;
//         }
//     }

//     get currency(){
//         return this.#currency;
//     }
    
//     set currency(newCurrency){
//         const allowedCurrencies = ["USD", "EUR", "NGN"];

//         if(allowedCurrencies.includes(newCurrency)){
//             this.#currency = newCurrency;
//         }else{
//             console.log("the currency you passed is not allowed")
//         }
//     }

//     processPayment(){
//         console.log(`process payment of ${this.#amount}`)
//     }
// }


// const myAccount = new Payment(200, "pounds");
// // myAccount.processPayment()
// console.log(myAccount.amount)
// myAccount.amount = 0;

// console.log(myAccount.currency);
// myAccount.currency = "NGN";



class AccountDetils{
    #accountBalance
    constructor(accountBalance, name, DOB, BVN){
    this.#accountBalance = accountBalance
    this.name = name
    this.DOB = DOB
    this.BVN = BVN
    }

    processPayment1(){
        if(this.name+this.DOB == this.BVN){
            if(this.#accountBalance > 1000){
                console.log(`the payment of amount ${this.#accountBalance}, has been process succesfully`)
            } else{
                console.log("payment decline")
             }
        } else {
            console.log("bvn error");
        }
    }   
}

class SavingsAccount3 extends AccountDetils{
   constructor(accountBalance, name, DOB, BVN, depositAmount, cardtype, withdrawerAmount){
    super(accountBalance, name, DOB, BVN);
    this.depositAmount = depositAmount;
    this.cardtype = cardtype;
    this.withdrawerAmount = withdrawerAmount;
    }

  cardwithdrawer(){
    if(this.cardtype == "master"){
        console.log("withdrawer succesful")
    }else{
        console.log("card type not accepted in this machone")
    }
  }

  cashwithdrawer(){
    if(this.withdrawerAmount < this.accountBalance){
        this.accountBalance -= withdrawerAmount
        console.log("insufficient fund")
    }else{
        console.log("withdrawer succesful")
    }




  }    

}

const AccountDetils1 = new SavingsAccount3(70000, " Ajalekoko", 54685485748, 30000,"Visa", 50000);
AccountDetils1.processPayment1();
AccountDetils1.processPayment1();
// AccountDetils1.cardwithdrawer("visa");
AccountDetils1.cashwithdrawer();