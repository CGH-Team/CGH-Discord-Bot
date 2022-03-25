const discord = require("discord.js");
// const webhook = new discord.WebhookClient({ id: '890849208935022653', token: 'gv4lQB0c47gOSdeivyWfig9qfTLF7piFvUeQuKv31IbuPOMiQXtWiITreETdSl3qTT5F' })
const webhook = new discord.WebhookClient({ id: '935179846399701004', token: 'dScSAP8z6QdxcoE5EJ57eUKLjk6b6Vr-CO1spTfzrxom-HqaHLoZdsi0UMNqIkFAhibx' })
const ms = require('ms');

module.exports = () => {
    setInterval(function autoMeme() {
        webhook.send({
            content: '<@917727195483480094>'
        })
    })
}, ms('0.5s')