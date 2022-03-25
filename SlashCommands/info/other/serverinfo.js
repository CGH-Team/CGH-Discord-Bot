const { CommandInteraction, Client, MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'serverinfo',
    description: 'serverinfo command',
    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async (client, interaction, args) => {
        const vanityCode = interaction.guild.vanityURLCode;
        let vanityInvite = `https://discord.gg/${vanityCode}`;
        if (vanityCode === null) vanityInvite = 'No custom URL';
        const member = interaction.guild.members.cache.get(args[0]) || interaction.member;
        const members = interaction.guild.members.cache;
        const roles = interaction.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const embed = new MessageEmbed()
            .setTimestamp()
            .setTitle("**Server Information**")
            .setColor('RANDOM')
            .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            .addField(`🎫 Name of server:`, interaction.guild.name, true)
            .addField(`🆔 ID of server:`, interaction.guild.id, true)
            .addField(`👥 Members:`, interaction.guild.members.cache.size.toString(), true)
            .addField(`🤖 Bots:`, `${interaction.guild.members.cache.filter(member => member.user.bot).size}`, true)
            .addField(`😗 Emojis:`, interaction.guild.emojis.cache.size.toString(), true)
            .addField(`<a:VG_56:863464406469050378> Animated Emoji\'s:`, interaction.guild.emojis.cache.filter(emoji => emoji.animated).size.toString(), true)
            .addField(`👔 Roles:`, interaction.guild.roles.cache.size.toString(), true)
            .addField(`📅 Server Created at:`, `${moment(interaction.guild.createdTimestamp).format('LL')} ${moment(interaction.guild.createdTimestamp).format('LTS')} ${moment(interaction.guild.createdTimestamp).fromNow()},`, true)
            .addField(`🔗 Vanity Link:`, `${vanityInvite}`)
            .addField(`Roles [${roles.length}]:`, roles.length < 15 ? roles.join(', ') : roles.length > 15 ? `${roles.slice(0, 15).join(', ')}\n+${roles.length - 15} roles...` : 'None')
            .setAuthor({ name: `${interaction.guild.name}`})

        interaction.followUp({ embeds: [embed] });
    }
}