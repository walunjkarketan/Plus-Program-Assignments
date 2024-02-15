// BankAccount class
class BankAccount {
    #accountNumber;
    _balance; // Make it protected
  
    #accountHolderName;
  
    constructor(accountNumber, balance, accountHolderName) {
      this.#accountNumber = accountNumber;
      this._balance = balance;
      this.#accountHolderName = accountHolderName;
    }
  
    // Getter for balance
    getBalance() {
      return this._balance;
    }
  }
  
  // CheckingAccount class extends BankAccount
  class CheckingAccount extends BankAccount {
    // Constructor invokes the base class constructor
    constructor(accountNumber, balance, accountHolderName) {
      super(accountNumber, balance, accountHolderName);
    }
  
    // Method to deposit money
    deposit(amount) {
      this._balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.getBalance()}`);
    }
  
    // Method to withdraw money
    withdraw(amount) {
      if (amount <= this._balance) {
        this._balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.getBalance()}`);
      } else {
        console.log("Insufficient funds for withdrawal.");
      }
    }
  }
  
  // SavingsAccount class extends BankAccount
  class SavingsAccount extends BankAccount {
    // Constructor invokes the base class constructor
    constructor(accountNumber, balance, accountHolderName) {
      super(accountNumber, balance, accountHolderName);
    }
  
    // Method to deposit money
    deposit(amount) {
      this._balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.getBalance()}`);
    }
  
    // Method to withdraw money with additional condition for SavingsAccount
    withdraw(amount) {
      if (amount <= this._balance) {
        this._balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.getBalance()}`);
      } else {
        console.log("Withdrawal failed. Insufficient funds in savings account.");
      }
    }
  }
  
  // Instances and method calls
  const checking = new CheckingAccount('123456', 1000, 'John Doe');
  const savings = new SavingsAccount('789012', 500, 'Jane Doe');
  
  checking.deposit(200);           // Deposited 200. New balance: 1200
  checking.withdraw(300);          // Withdrawn 300. New balance: 900
  console.log(checking.getBalance());// 900
  
  savings.deposit(100);            // Deposited 100. New balance: 600
  savings.withdraw(700);           // Withdrawal failed. Insufficient funds in savings account.
  console.log(savings.getBalance());// 600
  