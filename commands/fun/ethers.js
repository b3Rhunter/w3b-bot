// commands/ethers.js
const { ethers } = require('ethers');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ethers')
        .setDescription('Get the current block number and gas price from the Ethereum network'),
    async execute(interaction) {
        try {
            // Connect to the default provider (mainnet)
            const provider = new ethers.providers.InfuraProvider('mainnet');
            console.log(provider)
            // Get the current block number and gas price
            const [blockNumber, gasPrice] = await Promise.all([
                provider.getBlockNumber(),
                provider.getGasPrice()
            ]);

            // Convert gas price from wei to gwei for better readability
            const gasPriceGwei = ethers.utils.formatUnits(gasPrice, 'gwei');
            // Convert gas price to an integer to remove decimal places
            const gasPriceGweiInteger = parseInt(gasPriceGwei);
            console.log(gasPriceGweiInteger)
            // Reply with the information
            await interaction.reply(`Block Number: ${blockNumber}\nGas: ${gasPriceGweiInteger} gwei`);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    },
};
