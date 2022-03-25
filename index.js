const {
  Client,
  Collection,
  MessageEmbed,
  MessageActionRow,
  MessageButton,
  MessageAttachment,
  Intents
} = require("discord.js");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS
  ],
  // const client = new Client({
  //   intents: 32767,
  //   restTimeOffset: 0,
  // ws: {
  //   properties: {
  //     $browser: "Discord iOS"
  //   },
  // },
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
client.queue = new Map();

const prefix = client.config.prefix;

const discordModals = require('discord-modals') // Define the discord-modals package!
discordModals(client);

const axios = require('axios');

// Initializing the project
require("./handler")(client);

client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === (prefix + 'help-moderate')) {
    msg.channel.send({
      embeds: [
        new MessageEmbed()
          .setAuthor(`Moderations Commands`, client.user.avatarURL({ dynamic: true }))
          .setDescription('```json\n"createch" - Create a channel in your server!``````json\n"delete" - Delete the channel messages!``````json\n"deletech" - Delete a current channel!``````json\n"kick" - Kick a specified user from the server!``````json\n"createvc" - Create a vc channel in your server!``````json\n"addrole" - Add a role to a specified user!``````json\n"slowmode" - Slowmode the current channel!``````json\n"tempmute" - Set a time with mute a specified user!``````json\n"unmute" - Unmute a specified muted user!``````json\n"set-modlog" - Set a channel to become a modlog channel !```')
      ]
    }
    );
  }
});

client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === (prefix + 'help-soundboard')) {
    msg.channel.send({
      embeds: [
        new MessageEmbed()
          .setAuthor(`Sounsboard Commands`, client.user.avatarURL({ dynamic: true }))
          .setDescription('```json\n"chicken" - Chicken Dance soundboard!``````json\n"money" - money dance soundboard!``````json\n"scatman" - I am a scatman~``````json\n"rockyou" - Lets rock you!``````json\n"countdown" - countdown final!``````json\n"freakshow" - Freak Show~~``````json\n"bequiet" - Shhhh Keep Quiet..``````json\n"corona" - corona..corona..cococorona...```')
      ]
    }
    );
  }
});

client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === (prefix + 'help-learns')) {
    msg.channel.send({
      embeds: [
        new MessageEmbed()
          .setAuthor(`Learns Commands`, client.user.avatarURL({ dynamic: true }))
          .setDescription('```json\n"translate" - Translate any languages to English!``````json\n"wiki" - Search anything with use wiki!``````json\n"trivia" - RANDOM quiz with difficulty hard, easy!``````json\n"binary" - Type any text to convert to binary codes!``````json\n"fact" - Yea..fun facts.```')
      ]
    }
    );
  }
});

client.on('messageCreate', message => {
  if (
    message.content === `<@${client.user.id}>` ||
    message.content === `<@!${client.user.id}>`
  ) {
    message.reply({
      content: "<a:pandaWowShake:872498407867052044> **| Need Help? ||Or you just ping me :(||\n> My prefix is `gh `\n> Type `gh help` for looking all the commands!**"
    });
  };
})

client.on('channelCreate', async channel => {
  let webhook = await channel.guild.fetchWebhooks();
  let myWeb = webhook.find((myWeb) => myWeb.name === "CGH - BetaLog");
  let channel_type = [];

  if (channel.type === 'GUILD_TEXT') {
    channel_type.push('Text')
  }
  if (channel.type === 'GUILD_VOICE') {
    channel_type.push('Voice')
  }
  if (channel.type === 'GUILD_CATEGORY') {
    channel_type.push('Category')
  }
  if (channel.type === 'DM') {
    channel_type.push('DM (Direct Messages)')
  }
  if (channel.type === 'GROUP_DM') {
    channel_type.push('DM Group')
  }
  if (channel.type === 'GUILD_NEWS') {
    channel_type.push('Announcement')
  }
  if (channel.type === 'GUILD_STORE') {
    channel_type.push('Store')
  }
  if (channel.type === 'GUILD_STAGE_VOICE') {
    channel_type.push('Stage')
  }
  if (channel.type === 'UNKNOWN') {
    channel_type.push('Unknown')
  }

  if (myWeb) {
    myWeb.send({
      embeds: [
        new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(`**[ ${channel_type.join(' ')} ] - Channel Created**`)
          .addField(`Name:`, `**📌 ${channel.name}**`)
          .addField(`Channel ID:`, `**📌 ${channel.id}**`, true)
          .setTimestamp()
          .setThumbnail('https://library.kissclipart.com/20180904/krw/kissclipart-notepad-icon-clipart-computer-icons-notepad-978851ae809a87af.jpg')
          .setAuthor({ name: `Moderation Logs`, iconURL: `${client.user.avatarURL({ dynamic: true })}` })
      ],
      components: [
        new MessageActionRow().addComponents(
          new MessageButton({
            label: `Total server channels: ${channel.guild.channels.cache.size}`,
            style: 'SECONDARY',
            customId: 'test',
            disabled: true
          })
        )
      ]
    })
  }
})

client.on("threadCreate", t => {
  if (t.joinable) t.join()
})

// client.on('messageReactionAdd', async (reaction, user) => {
//   try {
//     let webhook = await reaction.message.guild.fetchWebhooks();
//     let myWeb = webhook.find((myWeb) => myWeb.name === "CGH FLUSHED-BOARD");
//     const msgs = await myWeb.messages.fetch({ limit: 100 });
//     const SentMessage = msgs.find(msg =>
//       msg.embeds.length === 1 ?
//         (msg.embeds[0].footer.text.startsWith(reaction.message.id) ? true : false) : false);
//     if (reaction.emoji.name === '⭐') {
//       const embed = new MessageEmbed()
//         .setAuthor(reaction.message.author.tag, reaction.message.author.displayAvatarURL())
//         .setDescription(`**[Jump to the message](${reaction.message.url})**\n\n${reaction.message.content}\n`)
//         .setColor('YELLOW')
//         .setFooter(reaction.message.id)
//         .setTimestamp();
//       if (myWeb.name === 'CGH FLUSHED-BOARD') {
//         myWeb.send({ content: '1 - ⭐', embeds: [embed] });
//           if (SentMessage) SentMessage.myWeb.editMessage(`${reaction.count} - ⭐`);
//       }
//     }
//   } catch (e) {
//     return;
//   }
// })

client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.emoji.name === '⭐') {
    let webhook = await reaction.message.guild.fetchWebhooks();
    const SBWebhook = webhook.find((myWeb) => myWeb.name === "CGH FLUSHED-BOARD");
    const msgs = await webhook.fetchMessage();
    const SentMessage = msgs.find(msg =>
      msg.embeds.length === 1 ?
        (msg.embeds[0].footer.text.startsWith(reaction.message.id) ? true : false) : false);
    if (SentMessage) SentMessage.SBWebhook.editMessage(`${reaction.count} - ⭐`);
    const embed = new MessageEmbed()
      .setAuthor(reaction.message.author.tag, reaction.message.author.displayAvatarURL())
      .setDescription(`**[Jump to the message](${reaction.message.url})**\n\n${reaction.message.content}\n`)
      .setColor('YELLOW')
      .setFooter(`${reaction.message.id}`)
      .setTimestamp();
    if (SBWebhook)
      SBWebhook.send({ content: '1 - ⭐', embeds: [embed] });
  }
});

// client.on('messageCreate', async (m) => {
//     if (m.author.bot) return;
//     // let channel1 = client.channels.cache.get('852463847398309898')
//     // let channel2 = client.channels.cache.get('905868443692199946')
//     let webhook = await m.guild.fetchWebhooks();
//     let myWeb = webhook.find((myWeb) => myWeb.name === "CGH WEBHOOK-CHAT");
//     if (m.channel.id === myWeb.guildId) return myWeb.send({
//         username: message.author.tag,
//         avatarURL: message.author.displayAvatarURL({ dynamic: true }),
//         content: `${message.content}`
//     });
//     // if (m.channel.id === channel2.id) return channel1.send(`**${m.author.tag}**: ` + `${m.content}`)
// // })

// client.on('messageCreate', async (m) => {
//     if(m.channel.id === '887690167740166215') {
//       return m.channel.send('<@917727195483480094>')
//     }
// })

client.on('messageCreate', message => {
  if (message.channel.id === '952927234694479902') {
    if (message.author.bot) return;
    message.delete()

    const attachments = message.attachments.size ? message.attachments.map(attachment => attachment.proxyURL) : null
    const embed = new MessageEmbed()
      .setColor('RANDOM')
      .setAuthor({ name: `${message.author.username + ' 的建议 '}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`})
      .setDescription(`${message.content}`)
      .setFooter({ text: `${message.author.id}` })
      .setImage(attachments[0])
      .setTimestamp()
    if(message.content === message.stickers.first().url) return embed.setImage(message.stickers.first().url[0])
    message.channel.send({ embeds: [embed] }).then(message => {
      message.react('860734220511346698')
      message.react('858183133495820328')
      message.react('858274375861796874')
    })
    // if(message.content === message.stickers.first()){
    //   message.channel.send('這頻道不支援貼圖')
    // }
  }
})

// const data = axios.get('https://discord.com/api/v7/guilds/851287403456626713/members', {
//         headers: {
//             Authorization: `Bot ${client.config.token}`
//         }
//     })
// console.log(data)

client.login(client.config.token);