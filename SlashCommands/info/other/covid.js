const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
  name: "covid",
  description: "track a country or worldwide COVID-19 CASES",
  cooldown: 5000,
  category: 'Search Command',

  options: [
    {
      type: 'STRING',
      description: 'insert the country name',
      name: 'country',
      required: true,
    },
  ],

  async run(client, interaction, args) {
    let countries = interaction.options.getString('country');
    let jsonData = await fetch("https://disease.sh/v3/covid-19/all")
    jsonData = await jsonData.json()

    let jsonDataCountries = await fetch(`https://disease.sh/v3/covid-19/countries/${countries}`)
    jsonDataCountries = await jsonDataCountries.json()

    if (countries === "world") {
      fetch('https://covid19.mathdro.id/api')
        .then(response => response.json())
        .then(data => {
          let confirmed = data.confirmed.value.toLocaleString()
          let recovered = jsonData.recovered.toLocaleString()
          let deaths = data.deaths.value.toLocaleString()

          const embed = new Discord.MessageEmbed()
            .setTitle(`🌎 Worldwide COVID-19 Stats`)
            .addField(`😷 Confirmed Cases`, '➽ ' + confirmed)
            .addField(`😷 Recovered`, '➽ ' + recovered)
            .addField(`😷 Deaths`, '➽ ' + deaths)
            .setColor('RANDOM')
            .setThumbnail('https://img.freepik.com/free-vector/earth-map-countries_1284-34068.jpg?size=626&ext=jpg')
            .setFooter('COVID-19')
            .setTimestamp()

          return interaction.followUp({ embeds: [embed] })
        })
    } else {
      fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
        .then(response => response.json())
        .then(data => {
          let confirmed = data.confirmed.value.toLocaleString()
          let recovered = jsonDataCountries.recovered.toLocaleString()
          let deaths = data.deaths.value.toLocaleString()

          const embed = new Discord.MessageEmbed()
            .setTitle(`COVID-19 Stats for **__${countries}__**`)
            .setThumbnail(jsonDataCountries.countryInfo.flag || "")
            .addField(`😷 Confirmed Cases`, '➽ ' + confirmed)
            .addField(`😷 Recovered`, '➽ ' + recovered)
            .addField(`😷 Deaths`, '➽ ' + deaths)
            .setColor('RANDOM')
            .setFooter('COVID-19')
            .setTimestamp()

          return interaction.followUp({ embeds: [embed] })
        }).catch(e => {
          return interaction.followUp({ content: 'Invalid Country provided', ephemeral: true })
        })
    }
  }
}