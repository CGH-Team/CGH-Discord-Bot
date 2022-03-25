const client = require("../index");
const { Collection } = require('discord.js');
const Timeout = new Collection();
const ms = require('ms');
const axios = require('axios')
const votes = new Collection();

client.on("interactionCreate", async (interaction) => {
  // Slash Command Handling
  if (interaction.isCommand()) {
    if (interaction.commandName === 'modal') {
      await axios({
        method: 'POST',
        url: `https://discord.com/api/interactions/${interaction.id}/${interaction.token}/callback`,
        headers: {
          Authorization: `Bot ${client.config.token}`,
        },
        data: {
          type: 9,
          data: {
            title: 'CGH Modal Form',
            custom_id: 'cool_modal',
            components: [
              {
                type: 1,
                components: [
                  {
                    type: 4,
                    custom_id: 'bs2_like',
                    label: 'Give some feedbacks about this modal',
                    style: 1,
                    min_length: 1,
                    max_length: 400,
                    placeholder: 'I love this cool modal',
                    required: true,
                  }
                ],
              },
              {
                type: 1,
                components: [
                  {
                    type: 4,
                    custom_id: 'awa',
                    label: 'What is your name',
                    style: 1,
                    min_length: 1,
                    max_length: 10,
                    placeholder: 'My name is ChinGH',
                    required: false,
                  }
                ],
              }
            ],
          },
        },
      })
    }

    // const { Modal, TextInputComponent, showModal } = require('discord-modals') // Now we extract the showModal method

    // const modal = new Modal() // We create a Modal
    //   .setCustomId('modal-customid')
    //   .setTitle('Test of Discord-Modals!')
    //   .addComponents([
    //     new TextInputComponent() // We create a Text Input Component
    //       .setCustomId('textinput-customid')
    //       .setLabel('Some text Here')
    //       .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
    //       .setMinLength(4)
    //       .setMaxLength(10)
    //       .setPlaceholder('Write a text here')
    //       .setRequired(true) // If it's required or not
    //   ]);
    // // Let's say the interaction will be a Slash Command called 'ping'.
    // if (interaction.commandName === 'modal') {
    //   showModal(modal, {
    //     client: client, // Client to show the Modal through the Discord API.
    //     interaction: interaction // Show the modal with interaction data.
    //   })
    // }

    const { Formatters } = require('discord.js');

    client.on('modalSubmit', async (modal) => {
      if (modal.customId === 'modal-customid') {
        const firstResponse = modal.getTextInputValue('textinput-customid')
        await modal.deferReply({ ephemeral: true })
        modal.followUp({ content: 'Congrats! Powered by discord-modals.' + Formatters.codeBlock('markdown', firstResponse), ephemeral: true })
      }
    });

    const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd)
      return interaction.followUp({ content: "An error has occured " });

    await interaction.deferReply({ ephemeral: cmd.ephemeral ? cmd.ephemeral : false }).catch(() => { });

    const args = [];

    for (let option of interaction.options.data) {
      if (option.type === "SUB_COMMAND") {
        if (option.name) args.push(option.name);
        option.options?.forEach((x) => {
          if (x.value) args.push(x.value);
        });
      } else if (option.value) args.push(option.value);
    }

    if (cmd.cooldown) {
      if (Timeout.has(`${cmd.name}${interaction.user.id}`)) return interaction.followUp({
        content: `⏲️ | You are on a \`${ms(Timeout.get(`${cmd.name}${interaction.user.id}`) - Date.now(), { long: true })}\` cooldown.`,
        ephemeral: true
      });
      // cmd.run(client, interaction, args)
      Timeout.set(`${cmd.name}${interaction.user.id}`, Date.now() + cmd.cooldown)
      setTimeout(() => Timeout.delete(`${cmd.name}${interaction.user.id}`), 4500)
    }
    cmd.run(client, interaction, args);
  }
  // Context Menu Handling
  if (interaction.isContextMenu()) {
    await interaction.deferReply({ ephemeral: true });
    const command = client.slashCommands.get(interaction.commandName);
    if (command) command.run(client, interaction);
  }
});