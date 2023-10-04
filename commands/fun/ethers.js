// commands/ethers.js
const { ethers } = require('ethers');
const { SlashCommandBuilder } = require('discord.js');

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
            await interaction.reply(`Block Number: ${blockNumber}\nGas: ${gasPriceGweiInteger} gwei`);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    },
};
