const {
    Client,
    CommandInteraction,
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require("discord.js");

module.exports = {
    name: "text",
    description: "convert a normal text to a specific type of the text",
    cooldown: 10000,

    options: [
        {
            name: 'word',
            description: 'write some words',
            type: 'STRING',
            required: true
        },
        {
            name: 'type',
            description: 'choose the type of the text you want',
            type: 'STRING',
            choices: [
                {
                    name: 'flip',
                    value: 'flip'
                },
                {
                    name: 'reverse',
                    value: 'reverse'
                },
                {
                    name: 'ascii',
                    value: 'ascii'
                },
                {
                    name: 'emojify',
                    value: 'emojify'
                },
                {
                    name: 'cowsay',
                    value: 'cowsay'
                },
                {
                    name: 'zalgo',
                    value: 'zalgo'
                },
                {
                    name: 'vapor',
                    value: 'vapor'
                },
                {
                    name: 'poop',
                    value: 'poop'
                }
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
    run: async (client, interaction, args) => {

        let textChoices = interaction.options.getString('type');
        let word = interaction.options.getString('word');

        if (textChoices === 'flip') {
            const flip = require("flip-text");
            const flipemoji = '🔃';
            if(word.length > 35) return interaction.followUp('Please insert the character between 0-35!')
            return interaction.followUp(
                `__**Word:**__\n> ${word}\n\n__**Flipped Text:**__\n> ${flipemoji} ${flip(word)}`
            )
        }
        if (textChoices === 'reverse') {
            const text = word;
            let Rarray = text.split("");
            let reverseArray = Rarray.reverse();
            let result = reverseArray.join("");
            if(text.length > 35) return interaction.followUp('Please insert the character between 0-35!')

            return interaction.followUp(
                `__**Word:**__\n> ${word}\n\n__**Reversed Text:**__\n> 🔁 ${result}`
            )
        }
        if (textChoices === 'ascii') {
            const figlet = require('figlet');
            figlet.text(word, function (err, data) {
                if (err) {
                    console.log('Something went wrong');
                    console.dir(err);
                }
                if(word.length > 35) return interaction.followUp('Please insert the character between 0-35!')
                // if (args.length > 50) return message.channel.send('Please provide text shorter than 50 characters')

                return interaction.followUp({ content: `__**Word:**__\n> ${word}\n\n` + '__**Result:**__\n```fix\n' + data + '```' })
            })
        }
        if (textChoices === 'emojify') {
            const specialCodes = {
                '0': ':zero:',
                '1': ':one:',
                '2': ':two:',
                '3': ':three:',
                '4': ':four:',
                '5': ':five:',
                '6': ':six:',
                '7': ':seven:',
                '8': ':eight:',
                '9': ':nine:',
                '#': ':hash:',
                '*': ':asterisk:',
                '?': ':grey_question:',
                '!': ':grey_exclamation:',
                ' ': '   '
            }
            const emoji = word.toLowerCase().split('').map(letter => {
                if (/[a-z]/g.test(letter)) {
                    return `:regional_indicator_${letter}:`
                } else if (specialCodes[letter]) {
                    return `${specialCodes[letter]}`
                }
                return letter;
            }).join('');
            if(word.length > 35) return interaction.followUp('Please insert the character between 0-35!')

            return interaction.followUp(`__**Word:**__\n> ${word}\n\n**__Emojified Text:__**\n> ${emoji}`)
        }
        if (textChoices === 'cowsay') {
            if(word.length > 35) return interaction.followUp('Please insert the character between 0-35!')
            return interaction.followUp({
                content: `\`\`\`fix\n
              < ${word} >
            ----------------
            ^
            | \   ^__^
            |  \  (oo)\_______
                 (__)\       )~~ 
                    ||----w |
                    ||     ||\n\`\`\`` });
        }
        if (textChoices === 'zalgo') {
            const Zalgo = require('to-zalgo');
            let zlgtxt = Zalgo(word);
            if(word.length > 35) return interaction.followUp('Please insert the character between 0-35!')
            return interaction.followUp(`__**Word:**__\n> ${word}\n\n**__Zalgo Text:__**\n> ${zlgtxt}`)
        }
        if (textChoices === 'vapor') {
            let msg = "";
            if(word.length > 35) return interaction.followUp('Please insert the character between 0-35!')
            for (let i = 0; i < word.length; i++) {
            msg += word[i].split("").join(" ") + " ";
            }
            return interaction.followUp(`__**Word:**__\n> ${word}\n\n**__Vapor Text:__**\n> ${msg}`)
        }
        if (textChoices === 'poop') {
            let msgpoop = "";
            if(word.length > 35) return interaction.followUp('Please insert the character between 0-35!')
            for (let i = 0; i < word.length; i++) {
            msgpoop += word[i].split(/\s*,+\s*/) + " 💩 ";
            }
            return interaction.followUp(`${msgpoop}`)
        }
    },
};