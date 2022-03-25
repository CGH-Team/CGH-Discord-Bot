const {
  Client,
  CommandInteraction,
  MessageEmbed,
  MessageActionRow,
  MessageButton
} = require("discord.js");

module.exports = {
  name: "avatar",
  description: "🖼️ Avatar User",
  cooldown: 10000,

  options: [
    {
      type: 'USER',
      description: 'The user',
      name: 'user',
      required: false,
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
    const png = member.user.displayAvatarURL({ dynamic: false, format: 'png' });
    const jpg = member.user.displayAvatarURL({ dynamic: false, format: 'jpg' });
    const webp = member.user.displayAvatarURL({ dynamic: false, format: 'webp' });
    const gif = member.user.displayAvatarURL({ dynamic: true });

    const avtEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setDescription(`Download Avatar Image At:\n**[png](${png}) | [jpg](${jpg}) | [gif](${gif}) | [webp](${webp})**` || `**[png](${png}) | [jpg](${jpg})**`)
      .setImage(member.user.displayAvatarURL({ size: 1024, dynamic: true }))

    const avtButton = new MessageActionRow().addComponents(
      new MessageButton({
        label: '128px',
        customId: '128px',
        style: 'SECONDARY'
      }),
      new MessageButton({
        label: '256px',
        customId: '256px',
        style: 'SECONDARY'
      }),
      new MessageButton({
        label: '1024px',
        customId: '1024px',
        style: 'SECONDARY',
        disabled: true
      }),
    );

    const avtButton128 = new MessageActionRow().addComponents(
      new MessageButton({
        label: '128px',
        customId: '128px',
        style: 'SECONDARY',
        disabled: true
      }),
      new MessageButton({
        label: '256px',
        customId: '256px',
        style: 'SECONDARY',
        disabled: false
      }),
      new MessageButton({
        label: '1024px',
        customId: '1024px',
        style: 'SECONDARY',
        disabled: false
      }),
    );

    const avtButton256 = new MessageActionRow().addComponents(
      new MessageButton({
        label: '128px',
        customId: '128px',
        style: 'SECONDARY',
        disabled: false
      }),
      new MessageButton({
        label: '256px',
        customId: '256px',
        style: 'SECONDARY',
        disabled: true
      }),
      new MessageButton({
        label: '1024px',
        customId: '1024px',
        style: 'SECONDARY',
        disabled: false
      }),
    );

    let avt = await interaction.followUp({
      content: 'Avatar ' + member.user.tag,
      embeds: [avtEmbed],
      components: [avtButton]
    });

    const filter = async (button) => {

      if (button.user.id !== interaction.user.id) {
        button.reply({
          content: "<:AAcross_box:864690410232610836> Don't help other people to press the button",
          ephemeral: true
        });
        return false;
      };
      return true;
    }

    const collector = avt.createMessageComponentCollector({
      filter,
      componentType: 'BUTTON',
      time: 40000,
    })

    collector.on('collect', async (button) => {
      if (button.customId === '128px') {
        button.update({
          embeds: [
            avtEmbed.setTitle('Size : 128px')
              .setImage(member.user.displayAvatarURL({ size: 128, dynamic: true, format: 'png' }))
          ],
          components: [
            avtButton128
          ]
        })
      } else if (button.customId === '256px') {
        button.update({
          embeds: [
            avtEmbed.setTitle('Size : 256px')
              .setImage(member.user.displayAvatarURL({ size: 256, dynamic: true, format: 'png' }))
          ],
          components: [
            avtButton256
          ]
        })
      } else if (button.customId === '1024px') {
        button.update({
          embeds: [
            avtEmbed.setTitle('Size : 1024px')
              .setImage(member.user.displayAvatarURL({ size: 1024, dynamic: true, format: 'png' }))
          ],
          components: [
            avtButton
          ]
        })
      }
    })

    collector.on('end', async (endButton) => {
      avt.edit({
        components: [
          new MessageActionRow().addComponents(
            new MessageButton({
              label: 'Expired After 40 seconds',
              style: 'SECONDARY',
              customId: 'expire',
              disabled: true,
              emoji: '😳'
            })
          )
        ]
      })
    });
  }
}