const { CommandInteraction, Client } = require('discord.js');
const ms = require('ms')

module.exports = {
    name: 'dino',
    description: '???? dino fun command',

    /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

    run: async(client, interaction, args) => {
        let msg = await interaction.followUp(`-----------------????`)
        let time = 1 * 1000

        setTimeout(function () {
            interaction.editReply(`-----------????-----`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`----------????-------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`--------????---------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`------????-----------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`-------????-----------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`---????-----????---------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`---????-????--------------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`??毋???\n\n ---????--------------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`????\n ---????--------------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`------????---????--------------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`----????-----????----------------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`-???蛤???-----????-------????--------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`----???蛤???-????----------????------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`??毋???\n\n ---???蛤???-------------????---`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`????\n ---???蛤???-------------????---`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`-----????---???蛤???-------------????--`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`????----????--------???蛤???-----------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`---????--????----------???蛤???---------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`<a:793364759101571072:862859342919368766> ???????塔??????????塔??滕??? ???????滕??綾??踢??屢??莞??????莞???! <a:793364759101571072:862859342919368766>\n ---????????----------???蛤???-------------`)
        }, time)
    },
}