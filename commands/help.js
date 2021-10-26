const Discord = require('discord.js')
require('dotenv').config();
const bot = new Discord.Client();
const token = 'config.token';

bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(bot, Discord);
})

bot.on('ready', () => {

    bot.user.setActivity('${prefix}help', { type: "Beginners" }).catch(console.error);
    this.bot.user.setStatus('online');
})

bot.login(process.env.YOUR_TOKENS);
