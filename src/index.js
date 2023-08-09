import TelegramBot from 'node-telegram-bot-api';
import axios from 'axios';

const token = '6564338368:AAHUnEL1WkAi0UKm-pYUU5v6bscD7MAGURw';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    console.log(msg.text);
    const data = msg.text.split(' ')
    // bot.sendMessage(msg.from.id, msg.text.toLocaleUpperCase())
    const url = `https://source.unsplash.com/${data[1] || 500}x${data[2] || 500}/?random=0&${data[0]}`
    bot.sendPhoto(msg.from.id, url, {caption: 'обране фото'})
});


