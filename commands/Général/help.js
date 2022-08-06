const { MessageEmbed } = require('discord.js');
const config = require('../../config.json');

exports.help = {
    name:"help"
}

exports.run = async (bot, message, args) => {
    const HELP = new MessageEmbed()
        .setColor('BLACK')
        .setTitle('**Commandes**')
        .addFields(
            { name: 'Général', value: '`*help`, `*ping`, `*user-info`'},
            { name: 'Modération', value: '`*ban`, `*kick`, `*clear`'},
            { name: 'Outils', value: '`*config`'},
        )
        .setTimestamp()
        .setFooter({ text: config.client.name, iconURL: config.client.logo})

    message.delete({ timeout: 100})
    message.channel.send({ embeds: [HELP] });
}