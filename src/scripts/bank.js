class BankAccount {
  constructor() {
    this.transactions = []; // Массив для хранения транзакций
    this.balance = 0; // Баланс счета
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error('Сумма должна быть положительным числом');
    }

    this.transactions.push({ type: 'deposit', amount });
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error('Сумма должна быть положительным числом');
    }

    if (amount > this.balance) {
      throw new Error('Недостаточно средств на счете');
    }

    this.transactions.push({ type: 'withdraw', amount });
    this.balance -= amount;
  }
}
