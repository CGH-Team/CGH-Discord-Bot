const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'dice',
    description: "dice command",
    cooldown: 10000,

    run: async(client, interaction, args) => {
        const embed1 = new MessageEmbed()
            .setThumbnail('https://media.discordapp.net/attachments/876297461034025040/876357202477211658/unknown.png')
            .setTitle('Dice - 1 !')
            .setDescription('Wow...You Throwed to dice 1!')
            .setColor('RANDOM')

        const embed2 = new MessageEmbed()
            .setThumbnail('https://cdn.discordapp.com/attachments/876297461034025040/876357336300654632/unknown.png')
            .setTitle('Dice - 2 !!')
            .setDescription('Nice! You Throwed to Dice 2! <a:RainbowKirby:876360385341566986>')
            .setColor('RANDOM')

        const embed3 = new MessageEmbed()
            .setThumbnail('https://cdn.discordapp.com/attachments/876297461034025040/876357603767222282/unknown.png')
            .setTitle('Dice - 3 !!!')
            .setDescription('Wow wow wow! Dice 3! <a:RainbowKirby:876360385341566986>')
            .setColor('RANDOM')

        const embed4 = new MessageEmbed()
            .setThumbnail('https://cdn.discordapp.com/attachments/876297461034025040/876357727776039012/unknown.png')
            .setTitle('Dice - 4 !!!!')
            .setDescription('Super nice! Continue to throw the dice and you have more luck!')
            .setColor('RANDOM')

        const embed5 = new MessageEmbed()
            .setThumbnail('https://cdn.discordapp.com/attachments/876297461034025040/876357952401969172/unknown.png')
            .setTitle('Dice - 5 !!!!!')
            .setDescription('5??!! <a:pandaWowShake:872498407867052044>')
            .setColor('RANDOM')

        const embed6 = new MessageEmbed()
            .setThumbnail('https://cdn.discordapp.com/attachments/876297461034025040/876358078981869608/unknown.png')
            .setTitle('Dice - 6 !!!!!!')
            .setDescription('<a:giveaway:876361390737215519> You throwed the biggest number of dice!!!! OMG')
            .setColor('RANDOM')

        const embed7 = new MessageEmbed()
            .setThumbnail('https://cdn.discordapp.com/attachments/876297461034025040/876358078981869608/unknown.png')
            .setTitle('Dice - 6 !!!!!!')
            .setDescription('You throwed the biggest number of dice!!!! OMG\n||Sorry sir..This dice is fake...Not number 6.||')
            .setColor('RANDOM')

        const embed8 = new MessageEmbed()
            .setThumbnail('https://tvline.com/wp-content/uploads/2019/04/single-parents-renewed.jpg')
            .setTitle('Oh no....')
            .setDescription('Your parents helped you to throwed the dice!! \nSo this is not your luck..\nCanceled Your chance to throw dice! <a:BanKitty:859428401051992084>')
            .setColor('RANDOM')

        let replies = [
           'Oops...\nThe dice you already throwed so far\nIt already disappeared...Sad for you :(',
           embed1,
           embed2,
           embed3,
           embed6,
           embed4,
           embed5,
           embed7,
           embed8
        ]

        let result = Math.floor((Math.random() * replies.length));

        interaction.followUp({ content: '<a:dice_rolling:876355654430904331>', embeds: [replies[result]] })
    }
}