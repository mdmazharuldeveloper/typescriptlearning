class BankAccount{
    name: string;
    private _balance: number;

    constructor(name: string, balance: number) {
        this.name = name;
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount: number) {
        if (amount >= 0) {
            this._balance = amount;
            console.log(`Balance updated to ${this._balance}.`);
        } else {
            console.log("Balance cannot be negative.");
        }
    }               
}

const account1 = new BankAccount("Alice", 1000);

account1.balance = 1500; // Output: Balance updated to 1500.
console.log(account1.balance); // Output: 1500