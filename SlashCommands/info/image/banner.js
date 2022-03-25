const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios")

module.exports = {
  name: "banner",
  description: "Get the banner of the specified member",
  options: [
    {
      name: "member",
      description: "Input member to get banner",
      type: "USER",
      required: true,
    },
  ],
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const { user } = interaction.options.get("member");

    axios.get(`https://discord.com/api/users/${user.id}`, {
      headers: {
        Authorization: `Bot ${client.config.token}`
      },
    })
    .then((res) => {
      const { banner, accent_color } = res.data;

      if (banner) {
        const extension = banner.startsWith("a_") ? '.gif?size=1024' : '.png?size=1024';
        const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}`;

        const embed = new MessageEmbed()
        .setTitle(`${user.username}'s Banner`)
        .setImage(url)
        .setColor(accent_color || "BLUE");
        
        interaction.followUp({ embeds: [embed] })
      } else {
        if (accent_color) {
          const embed = new MessageEmbed()
          .setDescription(`**${user.tag}** does not have a banner but they have an accent color`)
          .setColor(accent_color)

        interaction.followUp({ embeds: [embed] })
        } else {
          interaction.followUp({ content: `**${user.username}** does not have a banner nor do they have an accent color.`})
        }
      }
    });
  },
};
