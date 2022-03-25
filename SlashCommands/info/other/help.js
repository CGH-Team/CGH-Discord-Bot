const { 
    Client, 
    CommandInteraction, 
    MessageEmbed, 
    MessageActionRow, 
    MessageButton 
} = require("discord.js");

module.exports = {
    name: "help",
    description: "[HELP] Slash Commands (all)",
    cooldown: 10000,

    options: [
        {
            name: 'category',
            description: 'Write the first option of the survey',
            type: 'STRING',
            choices: [
                {
                    name: 'images',
                    value: 'img'
                },
                {
                    name: 'fungames',
                    value: 'fun'
                },
                {
                    name: 'others',
                    value: 'oth'
                },
                {
                    name: 'context',
                    value: 'context'
                },
            ],
            required: false
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

        let helpChoices = interaction.options.getString('category');

        if (helpChoices === 'img') return interaction.followUp({ embeds: [
            new MessageEmbed()
                .setTitle('__Image - Slash Commands__')
                .setColor('RANDOM')
                .addField('`/avatar`', `↳ Shows User's Avatar`)
                .addField('`/wale`', `↳ Random Whale Images`)
                .addField('`/trigger`', `↳ Make a user become trigger!`)
                .addField('`/user-banner`', `↳ Shows User's [Profile Banner](https://support.discord.com/hc/user_images/00WE8m_EWfBvPuQd4QDnDg.png) or [Profile Color](https://cdn.discordapp.com/attachments/877918144264556544/909471963322404955/unknown.png)`)
        ]});
        if (helpChoices === 'fun') return interaction.followUp({ embeds: [
            new MessageEmbed()
                .setTitle('__Fun | Games - Slash Commands__')
                .setColor('RANDOM')
                .addField('`/8ball`', `↳ You may ask the bot some questions..`)
                .addField('`/clever-rate`', `↳ Shows User's Clever Rate`)
                .addField('`/color`', `↳ Shows a color by typing hexcode`)
                .addField('`/dice`', `↳ Random dice numbers!`)
                .addField('`/hack`', `↳ Hack a user! (It is fake)`)
                .addField('`/meme`', `↳ Shows A random meme image!`)
                .addField('`/rps`', `↳ Play with the bot with rock, paper and scissors!`)
                .addField('`/trivia`', `↳ Testing your knowledges about trivia!`)
        ]});
        if (helpChoices === 'oth') return interaction.followUp({ embeds: [
            new MessageEmbed()
                .setTitle('__Others - Slash Commands__')
                .setColor('RANDOM')
                .addField('`/ping`', `↳ Shows The bot's ping!`)
                .addField('`/help`', `↳ Shows All The SLash-Help commands with the bot`)
                .addField('`/yt-together`', `↳ Plays youtube-together activity with friends in voice channel!`)
                .addField('`/user-info`', `↳ Shows The user's personal info!`)
                .addField('`/server-info`', `↳ Shows The server's personal info!`)
        ]});

        if (helpChoices === 'context') return interaction.followUp({ embeds: [
            new MessageEmbed()
                .setTitle('__Context Commands__')
                .setURL('https://cdn.discordapp.com/attachments/877918144264556544/909474293786742884/unknown.png')
                .setColor('RANDOM')
                .addField('`Translate`', `↳ Translate the Message to english language!`)
                .addField('`info`', `↳ Shows The user's personal info!`)
                .addField('`Avatar`', `↳ Shows User's Avatar`)
        ]});

        const slashEmbed = new MessageEmbed()
            .setTitle('Here are all my commands:')
            .addField('Image :', '`/avatar` · `/wale` · `/foxi` · `/trigger` · `/user-banner`')
            .addField('Fun :', '`/8ball` · `/clever-rate` · `/color` · `/dice` · `/hack` · `/meme`')
            .addField('Other :', '`/ping` · `/help` · `/yt-together` · `/user-info` · `/server-info`')
            .addField('Context :', '`Translate` · `info` · `Avatar`')
            .setFooter(member.user.username, member.user.displayAvatarURL({ dynamic: true }))
            .setColor('RANDOM')
            .setTimestamp()
        interaction.followUp({ embeds: [slashEmbed] });
    },
};