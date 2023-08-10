import TelegramBot from 'node-telegram-bot-api';
import axios from 'axios';
import { getHero } from './heroapi.js';

const token = '6564338368:AAHUnEL1WkAi0UKm-pYUU5v6bscD7MAGURw';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/image/, msg => {
  const data = msg.text.split(' ');
  // bot.sendMessage(msg.from.id, msg.text.toLocaleUpperCase())
  const url = `https://source.unsplash.com/${data[1] || 200}x${
    data[2] || 200
  }/?random=0&${data[0]}`;
  bot.sendPhoto(msg.from.id, url, { caption: 'обране фото' });
});

bot.onText(/hero/, msg => {
  const data = msg.text.split(' ');
  getHero(data[1])
    .then(hero => {
      console.log(hero);
      const image = hero.images.lg;
      bot.sendPhoto(msg.from.id, image, {
        caption: heroTemplate(hero),
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'delete',
                callback_data: 'delete',
              },
            ],
          ],
        },
      });
    })
    .catch(error => console.log(error));
});

function heroTemplate({
  id,
  name,
  biography: { fullName },
  appearance: { hairColor, eyeColor, weight, height },
  work: { occupation, base },
}) {
  return `
-----------------------------
|\t<b>${name} - ID: ${id}</b>
-----------------------------
| <i>fullName: ${fullName}</i>
| <u>hairColor: ${hairColor}</u>
| <u>eyeColor: ${eyeColor}</u>
| height: ${height[1]}     
| weight: ${weight[1]}
| work: ${base}
----------------------------
   `;
}

bot.on('callback_query', query => {
  console.log(query);
  bot.deleteMessage(query.from.id, query.message.message_id)
});

// |<i>WORK: ${occupation}</i>
// |<i>${base}</i>
