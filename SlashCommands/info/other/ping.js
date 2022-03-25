const { Client, CommandInteraction, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "ping",
    description: "returns websocket ping",
    cooldown: 10000,
    ephemeral: true,

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const update = new MessageActionRow().addComponents(
            new MessageButton({
                label: 'update',
                customId: 'update',
                style: 'SUCCESS'
            })
        )
        let msg = await interaction.followUp({ content: `<:checkmark:858971233806712853> | ${client.ws.ping}ms!`, components: [update] })

        const collector = await msg.createMessageComponentCollector({ componentType: 'BUTTON' })
        collector.on('collect', button => {
            if (button.customId === 'update') {
                button.update({ content: `<:checkmark:858971233806712853> | ${client.ws.ping}ms!`, components: [update]})
            }
        })
    },
};
