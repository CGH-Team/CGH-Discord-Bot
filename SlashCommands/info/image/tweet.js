const { MessageEmbed, CommandInteraction } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: "tweet",
    description: "tweet something on twitter!",
    category: "fun",
    usage: "tweet <txt>",

    options: [
        {
          type: 'STRING',
          description: 'message tweeter',
          name: 'message',
          required: true,
        },
      ],
    run: async(client, interaction, args) => {

        fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${interaction.user.username}&text=${args.join(' ')}`)
        .then((res) => res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setTitle("<:twitter:890252878780977243> Tweeted!")
            .setImage(`${data.message}`)
            .setColor('BLUE')
            .setTimestamp()
            interaction.followUp({ embeds: [embed] })
        })
    }
}