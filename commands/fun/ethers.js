// commands/ethers.js
const { ethers } = require('ethers');
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ethers')
        .setDescription('Get the current block number and gas price from the Ethereum network'),
    async execute(interaction) {
        try {
            const provider = new ethers.providers.InfuraProvider('mainnet');
            console.log(provider)
            const [blockNumber, gasPrice] = await Promise.all([
                provider.getBlockNumber(),
                provider.getGasPrice()
            ]);

            const gasPriceGwei = ethers.utils.formatUnits(gasPrice, 'gwei');
            const gasPriceGweiInteger = parseInt(gasPriceGwei);
            console.log(gasPriceGweiInteger)
            
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('reset_gas')
                        .setLabel('Reset info')
                        .setStyle('Primary')
                        .setEmoji('🔄')
                );

            const embed = new EmbedBuilder()
                .setColor('#d56701')
                .setTitle('⛽ Current Gas Price ⛽')
                .addFields(
                    { name: 'Ethereum', value: `**Block: ${blockNumber} Gas(Gwei): ${gasPriceGweiInteger}**` },
                )
                .setThumbnail('https://cdn.discordapp.com/attachments/894185735077363713/992315314442358834/ethBurn.gif');

            await interaction.reply({ 
                content: '', 
                tts: false, 
                components: [row], 
                embeds: [embed]
            });

        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    },
};
