const { Message, CommandInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "8ball",
    description: '8ball command',

    options: [
        {
            type: 'STRING',
            description: 'Ask bot a question',
            name: 'question',
            required: true,
        },
    ],

    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        const member = interaction.guild.members.cache.get(args[0]) || interaction.member;

            let replies = [
                'yup ~ yup',
                'nope...',
                'acctually it is..',
                'seem looks good!',
                "I don't think so..",
                'definitely',
                'no lmfao XD',
                "honestly I didn't care care it TwT",
                'Sure.',
                'yesh my dad...',
                'ma boi...gosh..',
                'Most likely'
            ]
    
            let result = Math.floor((Math.random() * replies.length));
    
            interaction.reply({ content: `🎱 ${member.user.username}'s question:\n> **${args.join('')}**\n\n🎱 My Answer:\n> **${replies[result]}**` });
    },
};
