const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "tictactoe",
    description: "play tictactoe with your friends!",

    options: [
        {
            type: 'USER',
            description: 'User that you want to be battle',
            name: 'player',
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
        const user = interaction.options.getUser('player');

        if (user.bot) {
            interaction.followUp({
                content: `You can't play with bots! :(`
            });
            setTimeout(() => {
                interaction.deleteReply()
            }, 4000)
        }

        let fighters = [interaction.member.id, user.id].sort(() => (Math.random() > .5) ? 1 : -1)
        let Args = {
            user: 0,
            a1: {
                style: "PRIMARY",
                label: "-",
                disabled: false
            },
            a2: {
                style: "PRIMARY",
                label: "-",
                disabled: false
            },
            a3: {
                style: "PRIMARY",
                label: "-",
                disabled: false
            },
            b1: {
                style: "PRIMARY",
                label: "️️-",
                disabled: false
            },
            b2: {
                style: "PRIMARY",
                label: "-",
                disabled: false
            },
            b3: {
                style: "PRIMARY",
                label: "-",
                disabled: false
            },
            c1: {
                style: "PRIMARY",
                label: "-",
                disabled: false
            },
            c2: {
                style: "PRIMARY",
                label: "-",
                disabled: false
            },
            c3: {
                style: "PRIMARY",
                label: "-",
                disabled: false
            }
        }
        let { MessageButton, MessageActionRow } = require('discord.js')
        if (!user.bot) {
            let msg = await interaction.followUp({ content: `**TicTacToe** | <@!${Args.userid}>'s turn (⭕)` })
            tictactoe(msg)
            async function tictactoe(m) {
                Args.userid = fighters[Args.user]
                let won = {
                    "⭕": false,
                    "❌": false
                }
                if (Args.a1.label == "⭕" && Args.b1.label == "⭕" && Args.c1.label == "⭕") won["⭕"] = true
                if (Args.a2.label == "⭕" && Args.b2.label == "⭕" && Args.c2.label == "⭕") won["⭕"] = true
                if (Args.a3.label == "⭕" && Args.b3.label == "⭕" && Args.c3.label == "⭕") won["⭕"] = true
                if (Args.a1.label == "⭕" && Args.b2.label == "⭕" && Args.c3.label == "⭕") won["⭕"] = true
                if (Args.a3.label == "⭕" && Args.b2.label == "⭕" && Args.c1.label == "⭕") won["⭕"] = true
                if (Args.a1.label == "⭕" && Args.a2.label == "⭕" && Args.a3.label == "⭕") won["⭕"] = true
                if (Args.b1.label == "⭕" && Args.b2.label == "⭕" && Args.b3.label == "⭕") won["⭕"] = true
                if (Args.c1.label == "⭕" && Args.c2.label == "⭕" && Args.c3.label == "⭕") won["⭕"] = true
                if (won["⭕"] != false) return msg.edit({ content: 'Congrates! 🎉 \n(⭕) won!' })

                if (Args.a1.label == "❌" && Args.b1.label == "❌" && Args.c1.label == "❌") won["❌"] = true
                if (Args.a2.label == "❌" && Args.b2.label == "❌" && Args.c2.label == "❌") won["❌"] = true
                if (Args.a3.label == "❌" && Args.b3.label == "❌" && Args.c3.label == "❌") won["❌"] = true
                if (Args.a1.label == "❌" && Args.b2.label == "❌" && Args.c3.label == "❌") won["❌"] = true
                if (Args.a3.label == "❌" && Args.b2.label == "❌" && Args.c1.label == "❌") won["❌"] = true
                if (Args.a1.label == "❌" && Args.a2.label == "❌" && Args.a3.label == "❌") won["❌"] = true
                if (Args.b1.label == "❌" && Args.b2.label == "❌" && Args.b3.label == "❌") won["❌"] = true
                if (Args.c1.label == "❌" && Args.c2.label == "❌" && Args.c3.label == "❌") won["❌"] = true
                if (won["❌"] != false) return msg.edit({ content: 'Congrates! 🎉 \n(❌) won!' })

                const a = new MessageActionRow().addComponents(
                    new MessageButton({
                        style: Args.a1.style,
                        label: Args.a1.label,
                        customId: 'a1',
                        disabled: Args.a1.disabled
                    }),
                    new MessageButton({
                        style: Args.a2.style,
                        label: Args.a2.label,
                        customId: 'a2',
                        disabled: Args.a2.disabled
                    }),
                    new MessageButton({
                        style: Args.a3.style,
                        label: Args.a3.label,
                        customId: 'a3',
                        disabled: Args.a3.disabled
                    }),
                );

                const b = new MessageActionRow().addComponents(
                    new MessageButton({
                        style: Args.b1.style,
                        label: Args.b1.label,
                        customId: 'b1',
                        disabled: Args.b1.disabled
                    }),
                    new MessageButton({
                        style: Args.b2.style,
                        label: Args.b2.label,
                        customId: 'b2',
                        disabled: Args.b2.disabled
                    }),
                    new MessageButton({
                        style: Args.b3.style,
                        label: Args.b3.label,
                        customId: 'b3',
                        disabled: Args.b3.disabled
                    }),
                );

                const c = new MessageActionRow().addComponents(
                    new MessageButton({
                        style: Args.c1.style,
                        label: Args.c1.label,
                        customId: 'c1',
                        disabled: Args.c1.disabled
                    }),
                    new MessageButton({
                        style: Args.c2.style,
                        label: Args.c2.label,
                        customId: 'c2',
                        disabled: Args.c2.disabled
                    }),
                    new MessageButton({
                        style: Args.c3.style,
                        label: Args.c3.label,
                        customId: 'c3',
                        disabled: Args.c3.disabled
                    }),
                );

                const afta = new MessageActionRow().addComponents(
                    new MessageButton({
                        style: Args.a1.style,
                        label: Args.a1.label,
                        customId: 'a1',
                        disabled: true
                    }),
                    new MessageButton({
                        style: Args.a2.style,
                        label: Args.a2.label,
                        customId: 'a2',
                        disabled: true
                    }),
                    new MessageButton({
                        style: Args.a3.style,
                        label: Args.a3.label,
                        customId: 'a3',
                        disabled: true
                    }),
                );

                const aftb = new MessageActionRow().addComponents(
                    new MessageButton({
                        style: Args.b1.style,
                        label: Args.b1.label,
                        customId: 'b1',
                        disabled: true
                    }),
                    new MessageButton({
                        style: Args.b2.style,
                        label: Args.b2.label,
                        customId: 'b2',
                        disabled: true
                    }),
                    new MessageButton({
                        style: Args.b3.style,
                        label: Args.b3.label,
                        customId: 'b3',
                        disabled: true
                    }),
                );

                const aftc = new MessageActionRow().addComponents(
                    new MessageButton({
                        style: Args.c1.style,
                        label: Args.c1.label,
                        customId: 'c1',
                        disabled: true
                    }),
                    new MessageButton({
                        style: Args.c2.style,
                        label: Args.c2.label,
                        customId: 'c2',
                        disabled: true
                    }),
                    new MessageButton({
                        style: Args.c3.style,
                        label: Args.c3.label,
                        customId: 'c3',
                        disabled: true
                    }),
                );

                m.edit({ content: `**TicTacToe** | <@!${Args.userid}>'s turn (${Args.user == 0 ? "⭕" : "❌"})`, components: [a, b, c] })
                const filter = (button) => button.user.id === Args.userid;
                const collector = m.createMessageComponentCollector({ filter, max: 1, time: 60000 });

                collector.on('collect', b => {
                    if (Args.user == 0) {
                        Args.user = 1
                        Args[b.customId] = {
                            style: "SUCCESS",
                            label: "⭕",
                            disabled: true
                        }
                    } else {
                        Args.user = 0
                        Args[b.customId] = {
                            style: "DANGER",
                            label: "❌",
                            disabled: true
                        }
                    }
                    b.deferUpdate()
                    const map = (obj, fun) =>
                        Object.entries(obj).reduce(
                            (prev, [key, value]) => ({
                                ...prev,
                                [key]: fun(key, value)
                            }),
                            {}
                        );
                    const objectFilter = (obj, predicate) =>
                        Object.keys(obj)
                            .filter(key => predicate(obj[key]))
                            .reduce((res, key) => (res[key] = obj[key], res), {});
                    let Brgs = objectFilter(map(Args, (_, fruit) => fruit.label == "-"), num => num == true);
                    if (Object.keys(Brgs).length == 0) return msg.edit({ content: '✨**It\'s a tie!**' })
                    tictactoe(m)
                });
                collector.on('end', collected => {
                    if (collected.size == 0) m.edit({ content: `**😥<@!${Args.userid}> didn\'t react in time! (60s)**`, components: [afta, aftb, aftc] })
                });
            }
        }
    },
};
