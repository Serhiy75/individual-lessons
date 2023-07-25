class Mailbox {
  constructor(userName) {
    this.userName = userName;
    this.sentMessages = [];
  }

  // Метод для отправки сообщения
  sendMessage(recipient, subject, body) {
    const message = {
      recipient,
      subject,
      body,
      date: new Date().toISOString(),
    };
    this.sentMessages.push(message);
    console.log(`Сообщение отправлено: "${subject}" для ${recipient}`);
  }

  // Метод для вывода всех отправленных сообщений
  displaySentMessages() {
    console.log(`Отправленные сообщения для пользователя ${this.userName}:`);
    this.sentMessages.forEach((message, index) => {
      console.log(`${index + 1}. Дата: ${message.date}`);
      console.log(`   Кому: ${message.recipient}`);
      console.log(`   Тема: ${message.subject}`);
      console.log(`   Текст: ${message.body}`);
      console.log('--------------');
    });
  }
}
const mailbox = new Mailbox();

const userForm = document.querySelector('.js-form');
userForm.addEventListener('submit', onUserformSubmit);
userForm.addEventListener('focus', onFocus);
userForm.addEventListener('blur', onBlur);

function onFocus(evt) {
  console.log(evt);
};

function onBlur(evt) {
console.log(evt);
};

function onUserformSubmit(evt) {
  evt.preventDefault();
  let textRecipient = userForm.elements.recipient.value;
  let textSubject = userForm.elements.subject.value;
  let textBody = userForm.elements.body.value;
  mailbox.sendMessage(textRecipient, textSubject, textBody);
  renderMasseges(mailbox.sentMessages);
  
}

function renderMasseges(arreyMassege) {

  const markup = arreyMassege.map(({ recipient, body, subject, date }) => {
    return `
     <li class="item">
          <h3>${recipient}</h3>
          <p>${body}</p>
          <div>${subject}<span></span> <span>${date}</span></div>
        </li>`
  }).join('');

  const ulLIst = document.querySelector('.list');
  ulLIst.innerHTML = markup;

};