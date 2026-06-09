//access modifier

class BankAccount {
    readonly userId: number;
    private balance: number;

    constructor(userId: number, balance: number) {
        this.userId = userId;
        this.balance = balance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount: number) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
        } else {
            console.log("Withdrawal amount must be positive and less than or equal to the current balance.");
        }
    }
}

const account1 = new BankAccount(1, 1000);
console.log(account1.getBalance()); // Output: 1000
account1.deposit(500); // Output: Deposited 500. New balance is 1500.
account1.withdraw(200); // Output: Withdrew 200. New balance is 1300.
// account1.balance = 5000; // Error: Property 'balance' is private and only accessible within class 'BankAccount'.