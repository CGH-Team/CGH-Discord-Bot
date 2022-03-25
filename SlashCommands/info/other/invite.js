const { CommandInteraction, Client, MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
  name: "invite",
  description: "To add/invite the bot to your server!",
  category: 'Moderation',
  cooldown: 5000,

  async run(client, interaction, args) {

    const inviteButton = new MessageActionRow().addComponents(
        new MessageButton({
            style: 'LINK',
            label: 'INVITE',
            emoji: '🔗',
            url: 'https://discord.com/api/oauth2/authorize?client_id=837564399833055272&permissions=4063559251&scope=bot%20applications.commands'
        }),

        new MessageButton({
            style: 'LINK',
            label: 'Support Server',
            emoji: '880699357161218080',
            url: 'https://discord.gg/hVBR4DVd'
        }),
    )

    const inviteButton2 = new MessageActionRow().addComponents(
      new MessageButton({
        style: 'LINK',
        label: 'UPVOTE',
        emoji: '📥',
        url: 'https://discord.ly/cgh'
    }),

    new MessageButton({
        style: 'LINK',
        label: 'TOP.GG VOTE',
        emoji: '862952568078598145',
        url: 'https://top.gg/bot/837564399833055272'
    }),
    )

    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;

    let invite = new MessageEmbed()
      .setTitle(`**Invite ${client.user.username}**`)

      .setDescription(`**『 Click the link below to invite !! 』**\n**『 And also you can help me to upvote my bot too !! 』**`)

      .setURL(`https://discord.com/api/oauth2/authorize?client_id=837564399833055272&permissions=4063559251&scope=bot%20applications.commands`)

      .setColor("RANDOM")

    return interaction.followUp({ embeds: [invite] , components: [inviteButton, inviteButton2] });
  },
};
