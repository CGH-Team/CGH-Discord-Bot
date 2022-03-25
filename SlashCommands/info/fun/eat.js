const { Client, CommandInteraction, MessageEmbed, Message } = require("discord.js");

module.exports = {
    name: "eat",
    description: "🥘 lets eat the food and taste it out!",
    ephemeral: true,

    options: [
        {
          type: 'STRING',
          description: '🍔 food name',
          name: 'food',
          required: true,
        },
      ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const member = interaction.guild.members.cache.get(args[0]) || interaction.member;

        const ramdomResult = [
            'Good Job. This Food is Tasty!',
            'eRm. Why the food put too much salt :(',
            'This food didnt put more [MSG 😠](https://en.wikipedia.org/wiki/Monosodium_glutamate)',
            '🛐 Pro Master of making the food.\nSuggest you go to [BBC FOOD](https://www.bbc.co.uk/food) to learn more!',
            'AMM, This is the "BEST" food ever :/\n[Go To Learn It Pls ;(](https://www.youtube.com/watch?v=53me-ICi_f8)',
            'EwW Why the Rice too vet >;[',
            'Tasty Tasty :)',
            '50/100'
        ]

        let yesandno = Math.floor((Math.random() * ramdomResult.length));

        const embedTaste = new MessageEmbed()
            .setTitle('Eating..Hmm..')
            .setDescription(`> **${args.join(" ")}**\n\n${ramdomResult[yesandno]}`)
            .setColor('RANDOM')

        let userTaste = await interaction.followUp({ embeds: [
            new MessageEmbed()
                .setDescription(`> **${member.user.username}** started to eat ${args.join(" ")}..`)
                .setColor('#51e0a5')
        ]});
        setTimeout(() => {
            userTaste.edit({ embeds: [embedTaste] })
         }, 3500);
    },
};
