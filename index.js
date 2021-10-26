console.log("index.js has been executed");

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("The bot is now online! Powered by Beginners");
});

client.on("message", (message) => {
  if (message.author.bot) return;
});

client.login(config.token);
