// openAI.js
const { SlashCommandBuilder } = require('discord.js');
const OpenAI = require('openai');
const { openAIKey } = require('../../config.json');

const openai = new OpenAI({ apiKey: openAIKey });

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('openai')
        .setDescription('Ask a question to OpenAI.')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('The question you want to ask OpenAI.')
                .setRequired(true)
        ),
    async execute(interaction) {
        const question = interaction.options.get('question').value;
        console.log(question);
        try {
            await interaction.deferReply();
            const response = await openai.chat.completions.create({
                model: 'gpt-4-0613',
                messages: [
                    {
                        role: 'user',
                        content: question
                    }
                ],
                temperature: 1,
                max_tokens: 300,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            const answer = response.choices[0].message.content.trim();
            await interaction.editReply(`**Question:** ${question}\n\n**Answer:** ${answer}`)
            console.log(response);
        } catch (error) {
            console.error(error);
            await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    },
};
