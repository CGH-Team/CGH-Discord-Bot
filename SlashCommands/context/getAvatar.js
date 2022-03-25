const { Client, ContextMenuInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "getavatar",
    type: "USER",
    /**
     *
     * @param {Client} client
     * @param {ContextMenuInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const member = await client.users.fetch(interaction.targetId);
        const png = member.displayAvatarURL({ dynamic: false, format: 'png' });
        const jpg = member.displayAvatarURL({ dynamic: false, format: 'jpg' });
        const webp = member.displayAvatarURL({ dynamic: false, format: 'webp' });
        const gif = member.displayAvatarURL({ dynamic: true });

        const size128 = member.displayAvatarURL({ size: 128, dynamic: true, format: 'png' })
        const size256 = member.displayAvatarURL({ size: 256, dynamic: true, format: 'png' })
        const size1024 = member.displayAvatarURL({ size: 1024, dynamic: true, format: 'png' })

        const avtEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .addField(`Download Avatar Image:`, `**[png](${png}) | [jpg](${jpg}) | [gif](${gif}) | [webp](${webp})**` || `**[png](${png}) | [jpg](${jpg})**`)
            .addField(`Download Avatar Size Image:`, `**[128px](${size128}) | [256px](${size256}) | [1024px](${size1024})**`)
            .setImage(member.displayAvatarURL({ size: 4096, dynamic: true }))

        interaction.followUp({ content: 'Avatar ' + member.tag, embeds: [avtEmbed] })
    },
};
