// message.js
const { SlashCommandBuilder } = require('discord.js');
const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('message')
		.setDescription('Opens a modal to send a message'),
	async execute(interaction) {
		const modal = new ModalBuilder()
			.setCustomId('messageModal')
			.setTitle('Message Modal');

		const messageInput = new TextInputBuilder()
			.setCustomId('messageInput')
			.setLabel("Send Message")
			.setStyle(TextInputStyle.Paragraph);

		const firstActionRow = new ActionRowBuilder().addComponents(messageInput);

		modal.addComponents(firstActionRow);

		await interaction.showModal(modal);
	},
};
