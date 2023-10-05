// commands/ethers.js
const { ethers } = require('ethers');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('ethers')
        .setDescription('Get the current block number and gas price from the Ethereum network'),
    async execute(interaction) {
        try {
            const provider = new ethers.providers.InfuraProvider('mainnet');
            console.log(provider)
            const [gasPrice] = await Promise.all([
                provider.getGasPrice()
            ]);

            const gasPriceGwei = ethers.utils.formatUnits(gasPrice, 'gwei');
            const gasPriceGweiInteger = parseInt(gasPriceGwei);
            console.log(gasPriceGweiInteger)

            const embed = new EmbedBuilder()
                .setColor('#d56701')
                .setTitle('⛽')
                .addFields(
                    { name: '\u200B', value: `Gas: **${gasPriceGweiInteger} gwei**` },
                )
                .setThumbnail('https://cdn.discordapp.com/attachments/894185735077363713/992315314442358834/ethBurn.gif');
            await interaction.reply({
                content: '',
                tts: false,
                embeds: [embed]
            });

        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    },
};
