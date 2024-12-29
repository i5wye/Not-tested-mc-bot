const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageButton, MessageActionRow } = require('discord-buttons');
const mcstatus = require('mcstatus');

require('discord-buttons')(client);

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', message => {
    if (message.content === '!help') {
        const helpMessage = new Discord.MessageEmbed()
            .setTitle('Available Commands')
            .setDescription('Click the buttons below to get information about Minecraft players and servers.');

        const playerButton = new MessageButton()
            .setStyle('blurple')
            .setLabel('Player Info')
            .setID('playerinfo');

        const serverButton = new MessageButton()
            .setStyle('green')
            .setLabel('Server Info')
            .setID('serverinfo');

        const actionRow = new MessageActionRow().addComponents(playerButton, serverButton);

        message.channel.send({ embed: helpMessage, components: [actionRow] });
    }
});

client.on('clickButton', async (button) => {
    if (button.id === 'playerinfo') {
        // Handle player info button click
        // Implement player info functionality here
        button.reply.send('Player Info button clicked!', true);
    } else if (button.id === 'serverinfo') {
        // Handle server info button click
        // Implement server info functionality here
        button.reply.send('Server Info button clicked!', true);
    }
});

client.login('YOUR_BOT_TOKEN');
