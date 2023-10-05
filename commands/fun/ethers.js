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
            await interaction.reply(  
  "content": "",
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 1,
          "label": `Reset info`,
          "custom_id": `reset_gas`,
          "disabled": false,
          "emoji": {
            "id": null,
            "name": `🔄`
          },
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `⛽ Current Gas Price ⛽`,
      "description": "",
      "color": 0xd56701,
      "fields": [
        {
          "name": "Ethereum",
          "value": `**Block: ${blocknumber} Gas(Gwei): ${gasPriceGweiInteger}**`
        }
      ],
      "thumbnail": {
        "url": `https://cdn.discordapp.com/attachments/894185735077363713/992315314442358834/ethBurn.gif`,
        "height": 0,
        "width": 0
      }
    }
  ]
});
        );
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    },
};
