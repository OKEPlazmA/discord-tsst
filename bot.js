
const Discord = require("discord.js"); 
const client = new Discord.Client(); 
client.on('ready', () => { console.log(`Logged in as ${client.user.tag}!`); }); 
client.on('message', msg => { 
if (msg.content === 'ping') {
msg.reply('Pong!'); } }); 
client.login('Mzc3ODcyNzg0NzU3NjIwNzM2.DOTTmA._-N0VM21Tluci4fbl4pzMAU7Vdk');
