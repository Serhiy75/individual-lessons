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
