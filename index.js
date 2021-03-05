const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

let bold = '**'
let chance = 64
let text = bold + message.author.username + bold + ", выкидывает рандомное число: " + bold 

client.on('message', ( message, args ) => {


    if ( message.author == '306068533736112130' && message.content == '~roll' ) return message.channel.send( text + ", выкидывает рандомное число: " + bold + Math.floor( Math.random() * 55 ) + bold)

    if ( message.author == '772426085040259082' && message.content == '~roll' ) return message.channel.send( text + ", выкидывает рандомное число: " + bold + Math.floor( Math.random() * 70 ) + bold)
    if ( message.author == '640487078416875547' && message.content == '~roll' ) return message.channel.send( text + ", выкидывает рандомное число: " + bold + Math.floor( Math.random() * 70 ) + bold)
    if ( message.author == '373083784494448640' && message.content == '~roll' ) return message.channel.send( text + ", выкидывает рандомное число: " + bold + Math.floor( Math.random() * 70 ) + bold)

    if ( message.author == '312227284549632001' && message.content == '~roll' ) return message.channel.send( text + ", выкидывает рандомное число: " + bold + Math.floor( Math.random() * 125 ) + bold)
    
    if ( message.content == '~roll' ) return message.channel.send( bold + message.author.username + bold + ", выкидывает рандомное число: " + bold + Math.floor( Math.random() * chance ) + bold)

});

client.login(process.env.token);