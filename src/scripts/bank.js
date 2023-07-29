const balanceElem = document.querySelector('#balanceDisplay');
const transactionsElem = document.querySelector('.js-history-transaction');

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

  renderBalance() {
    balanceElem.innerHTML = this.balance;
  }


  renderTransactions() {
    transactionsElem.innerHTML = this.transactions.map(({type, amount}) => {
      return `
      <li class="transaction-item ${type}">
            <div>Type: <span>${type}</span></div>
            <div>Amount: <span>${amount}</span></div>
          </li> `
    }).join('');
  }
}
const bankAccount = new BankAccount();

const btnDeposit = document.querySelector('[data-type="deposit"]');
const btnWithdraw = document.querySelector('[data-type="withdraw"]');
const formElem = document.querySelector('.js-form');
formElem.addEventListener('submit', onFormSubmit);
btnDeposit.addEventListener('click', onDepositClick);
btnWithdraw.addEventListener('click', onWithdrawClick);

function onDepositClick(evt) {
  const userValue = +formElem.elements.depositAmount.value;
  bankAccount.deposit(userValue);
   bankAccount.renderBalance()
  bankAccount.renderTransactions()
}

function onWithdrawClick(evt) {
  const userValue = +formElem.elements.withdrawAmount.value;
  bankAccount.withdraw(userValue);
  bankAccount.renderBalance()
  bankAccount.renderTransactions()
}


function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset()
  localStorage.removeItem('USER_BANK');
  localStorage.setItem('bankAccount', JSON.stringify(bankAccount.transactions));
  localStorage.setItem('USER_BALANCE', JSON.stringify(bankAccount.balance));
}

transactionsElem.addEventListener('click', onTransactionHistoryClick);

function onTransactionHistoryClick(evt) {
  
  if (evt.currentTarget === evt.target) {
  return
  }
  evt.target.closest('li').remove();
};

formElem.addEventListener('input', onFormInput);

function onFormInput(evt) {
  
  let userBank = {
    depositAmount: formElem.elements.depositAmount.value,
    withdrawAmount: formElem.elements.withdrawAmount.value,
  }
  localStorage.setItem('USER_BANK', JSON.stringify(userBank));
  
};

function onLoad() {
  
  let userBank = JSON.parse(localStorage.getItem('USER_BANK'));
  formElem.elements.depositAmount.value = userBank?.depositAmount || '';
  formElem.elements.withdrawAmount.value = userBank?.withdrawAmount || ''; 

  let userHistory = JSON.parse(localStorage.getItem('bankAccount'));
  let userBalans = JSON.parse(localStorage.getItem('USER_BALANCE'));
  
  bankAccount.balance = userBalans|| 0;
  bankAccount.transactions = userHistory || [];
  bankAccount.renderBalance();
  bankAccount.renderTransactions();

};
onLoad();





















// Додати слухачі на кнопки щоб виконувалася відовідна транзакція

// виводити поточне значення балансу на сторінкі

// Рендер

// - створити функцію рендеру історії транзакції
// - рендерити транзакції під час кожного натискання