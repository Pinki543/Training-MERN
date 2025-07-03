class BankAccount{
    constructor(name,amount,pin){
        this.name=name
        this.balance=amount
        this.pin=pin
        this.accountNumber=Math.floor(Math.random()*1000000+1000000)
    }
    deposit(amount){
        this.balance += amount
        console.log(`Deposit is ${amount} and balance is ${this.balance}`);
    }
    withDraw(amount){
        if(amount>0 && amount<=this.balance){
            this.balance-=amount;
            console.log(`withdraw amount: ${amount} and balance: ${this.balance}`);
        }
        else{
            console.log("Insufficient amount");
        }
    }
    getAllDetails(pin){
        if(this.pin==pin){
            console.log(`Name:${this.name} ,AccountNumber:${this.accountNumber} ,Balance:${this.balance}`);
        }
        else{
            console.log("Invalid Pin")
        }

    }
}
let c1=new BankAccount("priya",50000,3456);
c1.deposit(16789)
c1.getAllDetails(3456)


