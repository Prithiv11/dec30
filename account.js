class Account{
    constructor(name,accno,balance){
        this.name=name
        this.accno=accno
        this.balance=balance
    }
  
    deposit(amount){
        this.balance=this.balance+amount;
        return `Dear Customer, your account no ********7822 is credited with INR ${amount} on 30-12-2021. Current Balance is INR ${this.balance}`
    }
  withdraw(amount){
    if(amount<=this.balance){
    this.balance=this.balance-amount
    return `Dear Customer, Your account no ********7822 is debited with INR ${amount} on 30-12-2021. Current Balance is INR ${this.balance}`;
    }
    else
  {
    return `Your acc balance is insufficient to make this transaction`
  }
  }
  
  }
  const prithiv = new Account("PRITHIVIRAJ",156,5000);
  
  console.log(prithiv.deposit(1600));
  console.log(prithiv.withdraw(1000));
  