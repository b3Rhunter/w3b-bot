const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong and latency!'),
    async execute(interaction) {
        const sendTimestamp = Date.now();
        await interaction.reply('Pong!');
        const replyTimestamp = interaction.repliedTimestamp || Date.now();
        const latency = replyTimestamp - sendTimestamp;
        await interaction.editReply(`Pong! Message latency is ${latency}ms.`);
    },
};
