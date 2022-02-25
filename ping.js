const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log('Bot online');
});
 
client.on(`message`, message => {
  if (message.content === `ping`) {
    message.channel.send(`<:pointpurple:910511446440431647> Latency is **${Date.now() - message.createdTimestamp}ms. **\<:emoji_100:910159455113588766> nAPI Latency is **${Math.round(message.client.ws.ping)}ms**`);
  }
});
 
client.login('BOT_TOKEN')