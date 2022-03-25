const { CommandInteraction, Client } = require('discord.js');
const ms = require('ms')

module.exports = {
    name: 'dino',
    description: '🦖 dino fun command',

    /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

    run: async(client, interaction, args) => {
        let msg = await interaction.followUp(`-----------------🦖`)
        let time = 1 * 1000

        setTimeout(function () {
            interaction.editReply(`-----------🦖-----`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`----------🦖-------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`--------🦖---------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`------🦖-----------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`-------🦖-----------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`---🌵-----🦖---------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`---🌵-🦖--------------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`ㅤ🦖\n\n ---🌵--------------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`🦖\n ---🌵--------------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`------🦖---🌵--------------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`----🦖-----🌵----------------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`-🌵🌵-----🦖-------🌵--------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`----🌵🌵-🦖----------🌵------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`ㅤ🦖\n\n ---🌵🌵-------------🌵---`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`🦖\n ---🌵🌵-------------🌵---`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`-----🦖---🌵🌵-------------🌵--`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`🎂----🦖--------🌵🌵-----------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`---🎂--🦖----------🌵🌵---------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            interaction.editReply(`<a:793364759101571072:862859342919368766> 𝗠𝗶𝘀𝘀𝗶𝗼𝗻 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱! <a:793364759101571072:862859342919368766>\n ---🎂🦖----------🌵🌵-------------`)
        }, time)
    },
}