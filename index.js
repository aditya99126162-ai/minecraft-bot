const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'adityatGamingYT123.aternos.me',
  port: 48824,
  username: 'hlo',
  auth: 'offline'
});

bot.on('spawn', () => {
  console.log('Bot joined the server!');
});

bot.on('error', (err) => {
  console.log('Error:', err);
});

bot.on('end', () => {
  console.log('Bot disconnected');
});
