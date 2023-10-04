# w3b-bot

Welcome to the W3B  Builder Bot! This bot is designed to provide a series of interactive and useful commands to enhance your Discord server experience. Below are the details of the features and how to set up your bot.

## Features

- **Ping Pong**: A simple command to check the bot's responsiveness.
- **Message Modal**: Open a modal to send a message (Please note: Modal functionality requires a third-party library or plugin).
- **Ethereum Blockchain Info**: Retrieve the current block number and gas price from the Ethereum network using the Ethers.js library.
- **OpenAI Integration**: Ask a question to OpenAI and get a response.

## Setup

1. Clone this repository to your local machine.
2. Install the required npm packages using the following command:
    ```bash
    npm install
    ```
3. Create a `config.json` file in the root directory and provide the necessary credentials:
    ```json
    {
        "token": "your-discord-bot-token",
        "openAIKey": "your-openai-api-key"
    }
    ```
4. Run the bot using the following command:
    ```bash
    node index.js
    ```

## Commands

### Ping

- **Usage**: `/ping`
- **Description**: Replies with "Pong!" to check if the bot is responsive.

### Message

- **Usage**: `/message`
- **Description**: Opens a modal to send a message (Modal functionality requires a third-party library or plugin).

### Ethers

- **Usage**: `/ethers`
- **Description**: Retrieves the current block number and gas price from the Ethereum network.

### OpenAI

- **Usage**: `/openai <question>`
- **Description**: Ask a question to OpenAI and get a response.
- **Options**:
    - `question`: The question you want to ask OpenAI.

## Code Structure

- `index.js`: The main entry point for the bot.
- `commands/`: Directory containing command files.
    - `ethers.js`: Implements the `/ethers` command.
    - `openAI.js`: Implements the `/openai` command.
    - `ping.js`: Implements the `/ping` command.
    - `message.js`: Implements the `/message` command.

## Dependencies

- [Discord.js](https://discord.js.org/): A powerful library for interacting with the Discord API.
- [Ethers.js](https://docs.ethers.io/v5/): Complete Ethereum wallet implementation and utilities in JavaScript and TypeScript.
- [OpenAI](https://beta.openai.com/): API for interacting with the OpenAI GPT-3.5 and GPT-4 models.

## Support

For any issues or enhancements, feel free to open an issue or pull request on the GitHub repository.

## License

[MIT License](LICENSE)

---

Hope you enjoy using your awesome Discord bot and find it a useful addition to your server!
