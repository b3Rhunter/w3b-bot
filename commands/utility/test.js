// test.js
const { SlashCommandBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Displays a button for testing'),
	async execute(interaction) {
		const button = new ButtonBuilder()
			.setCustomId('test-button')
			.setLabel('Test')
			.setStyle(ButtonStyle.Primary);

		const row = new ActionRowBuilder()
			.addComponents(button);

		await interaction.reply({
			content: 'Click the button to test:',
			components: [row],
		});
	},
};
