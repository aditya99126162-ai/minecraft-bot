const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'adityatGamingYT123.aternos.me',
  username: 'hlo'
});

bot.on('spawn', () => {
  console.log('Bot joined!');
});
