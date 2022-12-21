const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle  } = require('discord.js');

exports.newRequest = async (req, client) => {
    const channel = await client.channels.fetch('1055090035390693447');

    const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('primary')
                .setLabel('Click me!')
                .setStyle(ButtonStyle.Primary),
        );

    const exampleEmbed = new EmbedBuilder()
        .setColor(0x007CBA)
        .setTitle('Nouvelle demande de parteneriat complète !')
        .setURL('https://discord.js.org/')
        .setDescription('Description')
        .setTimestamp()

    channel.send({ embeds: [exampleEmbed], components: [row] });
}