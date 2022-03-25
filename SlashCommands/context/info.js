const { Client, ContextMenuInteraction, MessageEmbed } = require("discord.js");
const moment = require('moment');

module.exports = {
    name: "info",
    type: "USER",
    /**
     *
     * @param {Client} client
     * @param {ContextMenuInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        var acknowledgements = 'None';

        const member = await client.users.fetch(interaction.targetId);
    
        const embed = new MessageEmbed()
            .setAuthor(`${member.tag}`, member.displayAvatarURL())
            .setColor('#2F3136')
            .setFooter(`User Info`, interaction.client.user.avatarURL({ dynamic: true }))
            .setThumbnail(member.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .addField('__User:__ ', `${member.tag}`, true)
            .addField('__User ID:__ ', `${member.id}`, true)
            .addField('__Created On:__', `${member.createdAt.toLocaleString()}`, true)

        interaction.followUp({ embeds: [ embed ] });
    },
};