import TelegramBot from 'node-telegram-bot-api';
import axios from 'axios';
import { getHero } from './heroapi.js';

const token = '6564338368:AAHUnEL1WkAi0UKm-pYUU5v6bscD7MAGURw';

const bot = new TelegramBot(token, { polling: true });

const heroArray = new Map();
const liked = new Map();

bot.on('message', msg => {
  if (msg.text[0] === '/') return;
  const data = msg.text.split(' ');
  const url = `https://source.unsplash.com/${data[1] || 1000}x${
    data[2] || 800
  }/?random=0&${data[0]}`;
  bot.sendPhoto(msg.from.id, url, {
    caption: 'обране фото',
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
});

bot.onText(/\/hero/, msg => {
  const data = msg.text.split(' ');
  getHero(data[1])
    .then(hero => {
      const image = hero.images.lg;
      bot.sendPhoto(msg.from.id, image, {
        caption: heroTemplate(hero),
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'liked',
                callback_data: `liked_${hero.id}`,
              },
            ],
            [
              {
                text: 'delete',
                callback_data: 'delete',
              },
            ],
          ],
        },
      });
      heroArray.set(hero.id, hero);
    })
    .catch(error => console.log(error));
});
function heroTemplate({
  id,
  name,
  biography: { fullName },
  appearance: { hairColor, eyeColor, weight, height },
  work: { base },
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
  switch (query.data.split('_')[0]) {
    case 'delete':
      bot.deleteMessage(query.from.id, query.message.message_id);
      break;
    case 'liked':
      onLike(query);
      break;
    case 'remoove':
      onDislike(query);
      break;
  }
});
function onDislike(query) {
  const id = +query.data.split('_')[1];
  liked.delete(id);
  console.log(id);

  bot.deleteMessage(query.from.id, query.message.message_id);
}

function onLike(query) {
  const id = +query.data.split('_')[1];
  const hero = heroArray.get(id);
  liked.set(id, hero);
}

bot.onText(/\/get history/, msg => {
  heroArray.forEach(hero => {
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
  });
});

bot.onText(/\/start/, msg => {
  bot.sendMessage(msg.from.id, 'hello', {
    reply_markup: {
      keyboard: [['/get random photo'], ['/get liked'], ['/get history']],
    },
  });
});
bot.onText(/\/get random photo/, msg => {
  const url = `https://source.unsplash.com/1000x900/?random=${Math.round(
    Math.random() * 10000,
  )}&tiger,moon,star,sun,sky,bear,bool,baby`;
  bot.sendPhoto(msg.from.id, url, {
    caption: 'рандомне фото',
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
});

bot.onText(/\/get liked/, msg => {
  liked.forEach(hero => {
    const image = hero.images.lg;
    bot.sendPhoto(msg.from.id, image, {
      caption: heroTemplate(hero),
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'remoove from liked',
              callback_data: `remoove_${hero.id}`,
            },
          ],
          [
            {
              text: 'delete',
              callback_data: 'delete',
            },
          ],
        ],
      },
    });
  });
});

// Superman
//   Batman
//   Wonder Woman
//   The Flash (Barry Allen, Wally West)
//   Green Lantern (Hal Jordan, John Stewart)
//   Aquaman
//   Cyborg
//   Martian Manhunter
//   Green Arrow
//   Batgirl
//   Supergirl
//   Nightwing
//   Shazam (Captain Marvel)
//   Swamp Thing
//   Zatanna
//   Hawkman
//   Hawkgirl
//   Black Canary
//   The Atom
//   Firestorm
//   Teen Titans (Robin, Starfire, Beast Boy, Raven, Cyborg)
//   Justice League (a team comprising various DC superheroes)
// Spider-Man
//   Iron Man
//   Captain America
//   Thor
//   Hulk
//   Black Widow
//   Doctor Strange
//   Black Panther
//   Wolverine
//   Deadpool
//   Hawkeye
//   Scarlet Witch
//   Ant-Man
//   Wasp
//   Vision
//   Daredevil
//   Jessica Jones
//   Luke Cage
//   Iron Fist
//   Captain Marvel (Carol Danvers)
//   Guardians of the Galaxy (Star-Lord, Gamora, Drax, Rocket, Groot)
//   X-Men (Professor X, Cyclops, Jean Grey, Storm, Beast, etc.)
