const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "trivia",
    description: "trivia quiz",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const discord = require('discord.js')
        const fetch = require("node-fetch");
        const atob = require('atob');

        const member = 
        interaction.guild.members.cache.get(args[0]) || 
        interaction.member;

        class Game {
            constructor(client, message, args) { // Defining vars and running the game logic
                this.message = message
                this.player = interaction.user
                this.reactions = ['🇦', '🇧', '🇨', '🇩']
                this.question
                this.init()
            }
            async init() {
                if (!args.length) this.get_data()
                if (args[0] && !args[1]) this.get_data(args[0])
                if (args[0] && args[1]) this.get_data(args[0], args[1])// checks what fields have been filled in
            }
            async get_data(dif, cat) {
                if (!dif && !cat) {
                    let question
                    await fetch('https://opentdb.com/api.php?amount=1&encode=base64')
                        .then(response => response.json())
                        .then(data => question = data);
                    this.question = question
                    return this.show_question();
                }
                if (dif && !cat) {
                    let question
                    if (dif.toLowerCase() == 'any') return this.get_data()
                    if (dif.toLowerCase() != 'easy' && dif.toLowerCase() != 'medium' && dif.toLowerCase() != 'hard') return this.message.channel.send('Please enter a valid Difficulty\nUse .trivia categories to view a list of categories and difficulties');
                    await fetch('https://opentdb.com/api.php?amount=1&difficulty=' + dif.toLowerCase() + '&encode=base64')
                        .then(response => response.json())
                        .then(data => question = data);
                    this.question = question
                    return this.show_question();
                }
                if (dif && cat) {
                    let question
                    for (let i in id_list) {
                        if (id_list[i].name.toLowerCase().replace(' ', '').replace(' ', '').replace(' ', '').replace(' ', '') == cat.toLowerCase()) {
                            this.question_id = id_list[i].id
                        }
                    }
                    if (dif.toLowerCase() != 'easy' && dif.toLowerCase() != 'medium' && dif.toLowerCase() != 'hard' && dif.toLowerCase() != 'any') return this.message.channel.send('Please enter a valid Difficulty\nUse .trivia categories to view a list of categories and difficulties');
                    if (!this.question_id) return this.message.channel.send('Please enter a valid Category\nUse .trivia categories to view a list of categories and difficulties');
                    if (dif.toLowerCase() == 'any') {
                        await fetch('https://opentdb.com/api.php?amount=1&category=' + this.question_id + '&encode=base64')
                            .then(response => response.json())
                            .then(data => question = data);
                        this.question = question
                        return this.show_question();
                    }
                    await fetch('https://opentdb.com/api.php?amount=1&category=' + this.question_id + '&difficulty=' + dif.toLowerCase() + '&encode=base64')
                        .then(response => response.json())
                        .then(data => question = data);
                    this.question = question
                    return this.show_question();
                }
            }
            async show_question() {
                if (atob(this.question.results[0].type) == 'multiple') {
                    this.question_length = 3
                    this.correct_answer = Math.floor((Math.random() * 4) + 1)
                    if (this.correct_answer === 1) {
                        this.answer_array = [
                            '🇦 - ' + atob(this.question.results[0].correct_answer),
                            '\n🇧 - ' + atob(this.question.results[0].incorrect_answers[0]),
                            '\n🇨 - ' + atob(this.question.results[0].incorrect_answers[1]),
                            '\n🇩 - ' + atob(this.question.results[0].incorrect_answers[2])
                        ]
                    }
                    if (this.correct_answer === 2) {
                        this.answer_array = [
                            '🇦 - ' + atob(this.question.results[0].incorrect_answers[0]),
                            '\n🇧 - ' + atob(this.question.results[0].correct_answer),
                            '\n🇨 - ' + atob(this.question.results[0].incorrect_answers[1]),
                            '\n🇩 - ' + atob(this.question.results[0].incorrect_answers[2])
                        ]
                    }
                    if (this.correct_answer === 3) {
                        this.answer_array = [
                            '🇦 - ' + atob(this.question.results[0].incorrect_answers[0]),
                            '\n🇧 - ' + atob(this.question.results[0].incorrect_answers[1]),
                            '\n🇨 - ' + atob(this.question.results[0].correct_answer),
                            '\n🇩 - ' + atob(this.question.results[0].incorrect_answers[2])
                        ]
                    }
                    if (this.correct_answer === 4) {
                        this.answer_array = [
                            '🇦 - ' + atob(this.question.results[0].incorrect_answers[0]),
                            '\n🇧 - ' + atob(this.question.results[0].incorrect_answers[1]),
                            '\n🇨 - ' + atob(this.question.results[0].incorrect_answers[2]),
                            '\n🇩 - ' + atob(this.question.results[0].correct_answer)
                        ]
                    }
                    this.question_embed = new discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle(atob(this.question.results[0].question))
                        .setThumbnail('https://www.ignitesocialmedia.com/wp-content/uploads/2018/02/YpJilaXXT8qJR6HQVKFM_ISM_Trivia.gif')
                        .setDescription(`${this.answer_array}`)
                        .setFooter('Category - ' + atob(this.question.results[0].category) + ', Difficulty - ' + atob(this.question.results[0].difficulty))
                }
                if (atob(this.question.results[0].type) === 'boolean') {
                    this.question_length = 1
                    if (this.question.results[0].correct_answer === 'true') {
                        this.correct_answer = 1
                    }
                    else {
                        this.correct_answer = 2
                    }
                    this.answer_array = [ '🇦 - ' + 'True', '\n🇧 - ' + 'False' ]
                    this.question_embed = new discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle(atob(this.question.results[0].question))
                        .setThumbnail('https://www.ignitesocialmedia.com/wp-content/uploads/2018/02/YpJilaXXT8qJR6HQVKFM_ISM_Trivia.gif')
                        .setDescription(`${this.answer_array}`)
                        .setFooter('Category - ' + atob(this.question.results[0].category) + ', Difficulty - ' + atob(this.question.results[0].difficulty))
                }
                this.question_message = await interaction.followUp({ embeds: [this.question_embed] })
                let step = -1
                while (step < this.question_length) {
                    step++
                    await this.question_message.react(this.reactions[step])
                }
                return this.await_reactions()
            }
            async await_reactions() {
                this.question_message.awaitReactions({ 
                    filter: (reaction, user) => user.id == interaction.user.id && (reaction.emoji.name === '🇦' || reaction.emoji.name === '🇧' || reaction.emoji.name === '🇨' || reaction.emoji.name === '🇩'),
                max: 1, time: 30000 }).then( collected => {
                        this.reaction = collected.first().emoji.name;

                        if (this.reaction === '🇦') this.input_answer = 1
                        if (this.reaction === '🇧') this.input_answer = 2
                        if (this.reaction === '🇨') this.input_answer = 3
                        if (this.reaction === '🇩') this.input_answer = 4
                        if (this.input_answer === this.correct_answer) {
                            this.answer_array[this.input_answer - 1] = this.answer_array[this.input_answer - 1] + ' ✅'
                            this.question_embed = new discord.MessageEmbed()
                                .setColor('#0099ff')
                                .setTitle(`${atob(this.question.results[0].question)}`)
                                .setThumbnail('https://www.ignitesocialmedia.com/wp-content/uploads/2018/02/YpJilaXXT8qJR6HQVKFM_ISM_Trivia.gif')
                                .setDescription(`${this.answer_array}`)
                                .setFooter('Category - ' + `${atob(this.question.results[0].category)}` + ', Difficulty - ' + `${atob(this.question.results[0].difficulty)}`)
                                this.question_message.edit({ embeds: [this.question_embed], content: `<@${member.user.id}>, You got it correct! :smile:` });
                            this.end_game()
                        }
                        else {
                            this.answer_array[this.input_answer - 1] = this.answer_array[this.input_answer - 1] + ' ❌'
                            this.question_embed = new discord.MessageEmbed()
                                .setColor('#0099ff')
                                .setTitle(`${atob(this.question.results[0].question)}`)
                                .setThumbnail('https://www.ignitesocialmedia.com/wp-content/uploads/2018/02/YpJilaXXT8qJR6HQVKFM_ISM_Trivia.gif')
                                .setDescription(`${this.answer_array}`)
                                .setFooter('Category - ' + `${atob(this.question.results[0].category)}` + ', Difficulty - ' + `${atob(this.question.results[0].difficulty)}`)
                                this.question_message.edit({ embeds: [this.question_embed], content: `<@${member.user.id}>, You got it wrong. \nThe correct answer was ` + this.reactions[this.correct_answer - 1]  })
                            this.end_game()
                        }
                    }).catch(() => {
                        this.question_message.edit({ content: `<@${member.user.id}>, You took to long to answer! \nGame has timed out. The answer was ` + this.reactions[this.correct_answer - 1] })
                        this.end_game()
                    })
            }
            async end_game() {
                this.question_message.reactions.removeAll()
                game = null
            }
        }
        var game = new Game(interaction, args)
    },
};
