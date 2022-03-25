const { Client, CommandInteraction, MessageButton, MessageActionRow } = require("discord.js");
const discordTogether = require("../../../Client/DiscordTogether");

module.exports = {
    name: "activities",
    description: 'Playing Voice channel activities with your friends!',

    options: [
        {
            name: 'channel',
            description: 'channel you want to activite this activity!',
            type: 'CHANNEL',
            channelTypes: ['GUILD_VOICE'],
            required: true,
        },
        {
            name: 'activity',
            description: 'Which Activity you want to play',
            type: 'STRING',
            choices: [
                {
                    name: 'watch together',
                    value: 'wt'
                },
                {
                    name: 'wordsnacks',
                    value: 'ws'
                },
                {
                    name: 'doodlecrew',
                    value: 'ddc'
                },
                {
                    name: 'spellcast',
                    value: 'sc'
                },
                {
                    name: 'chess',
                    value: 'chess'
                },
                {
                    name: 'checker',
                    value: 'checker'
                },
                {
                    name: 'lettertile',
                    value: 'lt'
                },
                {
                    name: 'awkword',
                    value: 'aw'
                },
            ],
            required: true
        },
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async(client, interaction, args) => {
        const [ channelID ] = args;

        let vcActivities = interaction.options.getString('activity');

        if (vcActivities === 'wt') {
            client.discordTogether
            .createTogetherCode(channelID, 'youtube')
            .then((x) => {
                const row = new MessageActionRow().addComponents(
                    new MessageButton({
                        style: 'LINK',
                        label: 'Click Me To Get In!',
                        url: `${x.code}`,
                        emoji: '855362502229753896',
                    }),
                )
                return interaction.followUp({ content: `Here You Go!`, components: [row] })
            })
        }

        if (vcActivities === 'ws') {
            client.discordTogether
            .createTogetherCode(channelID, 'wordsnack')
            .then((x) => {
                const row = new MessageActionRow().addComponents(
                    new MessageButton({
                        style: 'LINK',
                        label: 'Click Me To Get In!',
                        url: `${x.code}`,
                        emoji: '🔡',
                    }),
                )
                return interaction.followUp({ content: `Here You Go!`, components: [row] })
            });
        }

        if (vcActivities === 'ddc') {
            client.discordTogether
            .createTogetherCode(channelID, 'doodlecrew')
            .then((x) => {
                const row = new MessageActionRow().addComponents(
                    new MessageButton({
                        style: 'LINK',
                        label: 'Click Me To Get In!',
                        url: `${x.code}`,
                        emoji: '🎨',
                    }),
                )
                return interaction.followUp({ content: `Here You Go!`, components: [row] })
            });
        }

        if (vcActivities === 'sc') {
            client.discordTogether
            .createTogetherCode(channelID, 'spellcast')
            .then((x) => {
                const row = new MessageActionRow().addComponents(
                    new MessageButton({
                        style: 'LINK',
                        label: 'Click Me To Get In!',
                        url: `${x.code}`,
                        emoji: '🔤',
                    }),
                )
                return interaction.followUp({ content: `Here You Go!`, components: [row] })
            });
        }

        if (vcActivities === 'chess') {
            client.discordTogether
            .createTogetherCode(channelID, 'chess')
            .then((x) => {
                const row = new MessageActionRow().addComponents(
                    new MessageButton({
                        style: 'LINK',
                        label: 'Click Me To Get In!',
                        url: `${x.code}`,
                    }),
                )
                return interaction.followUp({ content: `Here You Go!`, components: [row] })
            });
        }

        if (vcActivities === 'checker') {
            client.discordTogether
            .createTogetherCode(channelID, 'checkers')
            .then((x) => {
                const row = new MessageActionRow().addComponents(
                    new MessageButton({
                        style: 'LINK',
                        label: 'Click Me To Get In!',
                        url: `${x.code}`,
                    }),
                )
                return interaction.followUp({ content: `Here You Go!`, components: [row] })
            });
        }

        if (vcActivities === 'lt') {
            client.discordTogether
            .createTogetherCode(channelID, 'lettertile')
            .then((x) => {
                const row = new MessageActionRow().addComponents(
                    new MessageButton({
                        style: 'LINK',
                        label: 'Click Me To Get In!',
                        url: `${x.code}`,
                    }),
                )
                return interaction.followUp({ content: `Here You Go!`, components: [row] })
            });
        }

        if (vcActivities === 'aw') {
            client.discordTogether
            .createTogetherCode(channelID, 'awkword')
            .then((x) => {
                const row = new MessageActionRow().addComponents(
                    new MessageButton({
                        style: 'LINK',
                        label: 'Click Me To Get In!',
                        url: `${x.code}`,
                    }),
                )
                return interaction.followUp({ content: `Here You Go!`, components: [row] })
            });
        }
    }
};