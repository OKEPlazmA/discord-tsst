const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = (config.prefix);

//const modlog = message.guild.channels.find("name" , "modlogs");
//c => c.name === "modlogs"
//modlog.send(`${kickMember.user.tag} has been kicked by ${message.author} and has been recorded as case 1.`);
// const kick = new Discord.RichEmbed()
//   .setAuthor(`${client.user.username} Kick Log`)
//   .setColor(0x00AE86)
//   .setTimestamp()
//   .addField(`${kickMember} has been kicked by ${message.author.username} .`);
// message.channel.send({embed: kick});


//const o = message.guild.owner
//const attach = new Discord.Attachment("anthing","https://pbs.twimg.com/profile_images/804251407582892032/04QaIESj_400x400.jpg");

client.on("ready", () => {
  console.log("I'm Online\nI'm Online");
   client.user.setGame("On 3000 servers || Use --help to get started.");
  // client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE', 'ADMINISTRATOR' , 'CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS'])
  //   .then(link => {
  //     console.log(`Generated bot invite link: ${link}`);
  //
  //client.user.setPresence({ game: { name: "Use--help to get started || Playing on 44 servers" } });
});
client.on("ready", () => {

  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  //client.user.setGame("test");

});
//

//client.on("presenceUpdate", (oldMember, newMember) => {
//let guild = newMember.guild;
// let playRole = guild.roles.find("name", "Guild");
//   if (!playRole) return;

//if (newMember.user.presence.game && newMember.user.presence.game.name === ("Use --help to get started || Playing on 44 servers")) {
//  newMember.addRole(playRole);
//} else if (!newMemeber.user.presence.game && newMember.roles.has(playRole.id)) {
//    newMember.removeRole(playRole);
//  }
//});

client.on("guildCreate", guild => {
  //This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members! and ${guild.roles}`);
  //client.user.setGame(`on ${client.guilds.size} servers`);

});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id}) and this guild has ${guild.memberCount} members and ${guild.roles} and an invite for that guild is `);

  //client.user.setGame(`on ${client.guilds.size} servers`);

});

client.on("guildMemberAdd" , member => {
  let guild = member.guild;
  guild.defaultChannel.send(`Welcome ${member.user} to ${guild.name} we hope you have a great time here. Please don't forget to read ${guild.channel.find("name" , "rules")} and ${guild.channel.find("name" , "rules")} . Thank you very much. :smile:`);
});

client.on("messageDelete" , message => {
  const logchannel = message.guild.channels.find("name", "modlogs");
  logchannel.send(message.channel.messageDelete);
  logchannel.send(`Deleted message !! containing ${message.content.slice(" ").split(0)}.`);
  logchannel.send("These messages were successfully deleted!");
  console.log(`message deleted ${message.content.slice(" ")[0]}.`);
});

// client.on("messageDeleteBulk" , message => {
//   message.channel.send(message.channel.messageDeleteBulk);
//   message.channel.send(`Deleted message bulk !! containing ${message.content.slice(" ").split(0)}.`);
//   console.log("msg bulk");
// });
//Kick this member from the guild.

///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////



client.on("message",  message => {
  if (message.author === client.user) return;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1); //with slice is like this [ '324920582665928727' ] slice ==== With brackets and quotations.
                                    //Wihtout is like 324920582665928727 no slice ====  Without brackets and quotations.

  console.log(messageArray);
  console.log(command);
  console.log(args);



  //let args = message.content.split(" ").slice(1);
  if (message.content === (prefix + "ping")) {
    message.channel.send("Ping? 🏓 ").then(m => m.edit(`🏓 Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API latency is ${Math.trunc(client.ping)}ms!`));
  }
  if (message.content === (prefix + "cinvite")) {
    client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE', 'ADMINISTRATOR' , 'CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS'])
      .then(link => {
        message.channel.send(`Generated bot invite link: ${link}`)
        console.log(`Generated bot invite link: ${link}`);
      });
  }
  // if(message.content.startsWith(prefix + "ginvite")) {
  //   client.guild.channel.createInvite(options = {options.maxUses = 0}, "tesitng");
  // }
  if (message.content === (prefix + "on")) {
    message.channel.send("i");

  //  message.channel.send(`${message.createdAt}`)
  }
  if (message.content.startswith(prefix + "botavatar")) {
      message.channel.send(`${client.user.avatar}`);
      message.channel.send("This is the bot's avatar");
  }
//   if(message.content.startswith(prefix + "sregion")) {
//     let args = message.content.split(" ");
//     let args2 = args[1];
//     message.guild.setRegion(`${args2}`)
//     message.channel.send(`The guild's region has been set to ${args2} by ${message.author.username}.`);
//   }
  if(message.content.startsWith(prefix + "gid")) {
    message.channel.send(`This is the guild's ID **${message.guild.id}**`);
  }
  if(message.content.startsWith(prefix + "cid")) {
    message.channel.send(`This is the channel's ID **${message.channel.id}**`);
    message.channel.send.reactionEmoji.name(":white_check_mark:");
  }
  if(message.content.startsWith(prefix + "cname")) {
    message.channel.send(`This is the channel's name **${message.channel.name}**`);
  }
  if(message.content.startsWith(prefix + "rid")) {
    // let messageArray = message.content.split(" ");
    let role = message.guild.roles.find("name", "Management Of CA");
    // let pickRole = messageArray[0];
    message.user.member.addRole(role);
    message.channel.send(`This is the role's ID **${role.id}** of the role ${role.name}.`);

  }
  if (message.content === (prefix + "invite")) {
    message.channel.send({
      embed: {
        title: "Invite The Bot",
        color: 3446233,
        description: "https://discordapp.com/oauth2/authorize/?permissions= 2146958591 & scope = bot & client_id = 356753178295009281 ",
      }
    });
  }
  if (message.content === (prefix + "cmd")) {
    message.channel.send({
      embed: {
        title: "help",
        color: 3447003,
        description: "**usage:** __--help__" + " **description:** __Sends a help message__",
      }
    });
  }
  if (message.content === (prefix + "botid")) {
    message.channel.send(client.user.id);
    message.channel.send("Bot ID"); // bot id
    console.log("works");
  }
  if(message.content === (prefix + "setgame")) {
    //let messageArray = message.content.split(" ");
    //let command = messageArray[0];
    let args = message.content.slice(" ");
    let args2 = args.split(1);
    client.user.setGame(args2);

  }
  if (message.content === (prefix + "funny")) {
    message.channel.send(randomAnswer);
    let answers = [
      "Hey",
      ":smile: Hey I once saw a man that had an axe and he dropped it on his foot because he thought his foot was the wood. :smile:",
      "Howdy",
      "Hello There",
      "Wotcha",
      "Alright gov'nor"
    ];

    let randomAnswer = answers[Math.floor(Math.random() * answers.length)];

    console.log(randomAnswer);
  }
  if(message.content === (prefix + "help")) {
    const embed = new Discord.RichEmbed()
      .setTitle("Help Commands")
      .setAuthor(`${client.user.username} Bot`, "http://static1.squarespace.com/static/589f821ae6f2e1990ab8c96d/t/58a0d31aebbd1a557d0468b1/1486934813383/My+Son+Joy+Insta.png?format=1000w")
      .setColor("#16A7D5")
      .setFooter(`Requested by: ${message.author.tag}`, `${message.author.avatarURL}`)
      .setImage("http://freedomhillcommunitychurch.org/wp-content/uploads/2017/06/Joy-Feater-Image-600x400.png")
      .setThumbnail("https://t3.ftcdn.net/jpg/00/97/06/96/240_F_97069684_nTh5P4Y5JgRrPaJiGhPtOn63ebSJaYrD.jpg")
      .setTimestamp()
      .addField("**Usage :: ** --funny",
        "**Description :: ** Cracks a joke!")
      .addField("**Usage :: ** --help" ,
        "**Description :: ** Shows this message.")
      .addField("**Usage :: ** --gname" ,
        "**Description :: ** Shows the name of the guild the command is run in.")
      .addField("**Usage :: ** --owner" ,
        "**Description :: ** Sends the owner of the guild.")
      .addField("**Usage :: ** --gid" ,
        "**Description :: ** Sends the ID of the guild.")
      .addField("**Usage :: ** --cid" ,
        "**Description :: ** Sends the ID of the channel.")
      .addField("**Usage :: ** --botavatar" ,
        "**Description :: ** Sends the avatar of the bot.")
      .addField("**Usage :: ** --invite" ,
        "**Description :: ** Gives you an invite link to the bot.");


    const embed2 = new Discord.RichEmbed()
      .setTitle("Administrative Commands")
      .setDescription("Commands that can be used by Co-Director and above.")
      .setAuthor(`${client.user.username} Bot`, "http://static1.squarespace.com/static/589f821ae6f2e1990ab8c96d/t/58a0d31aebbd1a557d0468b1/1486934813383/My+Son+Joy+Insta.png?format=1000w")
      .setColor("#16A7D5")
      .setFooter(`Requested by: ${message.author.tag}`, `${message.author.avatarURL}`)
      .setImage("http://freedomhillcommunitychurch.org/wp-content/uploads/2017/06/Joy-Feater-Image-600x400.png")
      .setThumbnail("https://t3.ftcdn.net/jpg/00/97/06/96/240_F_97069684_nTh5P4Y5JgRrPaJiGhPtOn63ebSJaYrD.jpg")
      .setTimestamp()
      .addField("**Usage :: ** --sreigon" ,
        "**Description :: ** Sets a New reigon for the guild.")
      .addField("**Usage :: ** --mute @user",
        "**Description :: ** Mutes a user or bot by their mention.")
      .addField("**Usage :: ** --kick @user" ,
        "**Description :: ** Kicks a user or bot by their mention.")
      .addField("**Usage :: ** --ban @user" ,
        "**Description :: ** Bans a user or bot by their mention.")
      .addField("**Usage :: ** --softban" ,
        "**Description :: ** Bans and unbans (a) user(s) to delete their messages.");



    message.channel.send({embed});
    message.channel.send({embed: embed2});




    const kickembed = new Discord.RichEmbed()
      .setAuthor(`${client.user.username} Kick Log`)
      .setColor("#16A7D5")
      .setTimestamp();
      //.addField(`${message.author.username} has been kicked by ${message.author}.`);
    //  modlog.send({embed: kickembed});
    message.channel.send({embed: kickembed});


  }

  if(message.content === (prefix + "region")) {
    message.channel.send("the guilds reigon is " + (message.guild.region)) ;
  }
  if(message.content === (prefix + "kicklog")) {
    const logchannel = message.guild.channels.find("name", "modlogs");
    const kickembed = new Discord.RichEmbed()
      .setAuthor(`${client.user.username} Kick Log`)
      .setColor(0x00AE86)
      .setTimestamp()
      .addField(`${message.author} has been kicked by moderator ${message.author.username} .`);
    message.channel.send({embed: kickembed});
    logchannel.send({embed: kickembed});
  }
  if(message.content === (prefix + "unban")) {
  //  const args = message.content.slice(prefix.length).trim().split(/ +/g);
    //let delunban = message.content.slice(args(0));
    //let id = args.slice(0).join(" let reason = args.slice(1).join(" ");
  //  let id = args.slice(1).join(" ");
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    message.guild.unban(`${args} ${command} ${messageArray}`)
      .then(user => console.log(`Unbanned ${user.username} from ${message.guild.name}`))
      .catch(console.error);
  }
  if(message.content.startsWith(prefix + "say")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    let text = args.slice(1).join(" ");
    message.delete();
    message.channel.send(text);
  }
  if(message.content.startsWith(prefix + "userinfo")) {
    const uinfoembed = new Discord.RichEmbed()
      .setAuthor(`${message.author.tag}` , `${message.author.avatar}`)
      .addField(`${message.author.id}`);
      //    .addField
    message.channel.send({embed: uinfoembed});
  }
  // if(message.content === (prefix + "mute")) {
  //
  //   let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  //if(!toMute) return message.channel.send("You didn't specify a user mention or ID!.");
  //
  //   let role = message.guild.roles.find("name" , "Muted");
  //   if(!role) {
  //     try {
  //       role = message.guild.createRole({
  //         name: "Muted",
  //         color: "#000000",
  //         permissions: []
  //       }
  //   );
  //
  //       message.guild.channels.find("name" , "bots"); {
  //         message.channel.overwritePermissions(role, {
  //               SEND_MESSAGES: false,
  //               ADD_REACTIONS: false,
  //         });
  //
  //
  // {
  //   console.log(('Done!'))
  //     .catch(console.error);
  // }
  //
  //       if(toMute.roles.has(role.id)) return message.channel.send("This user is already muted!.");
  //
  //     return;
  // }


  if(message.content === (prefix + "oid")) {
    message.author.send(message.guild.ownerID);
    message.author.send("this is owner id");
  }
  if(message.content === (prefix + "oner")) {
    message.channel.send(`The owner of ${message.guild.name} is ${message.guild.owner.user.username} `);
  }
  if (message.content === (prefix + "shutdown")) {
    message.channel.send("shutdown by <@" + message.author.id + ">");
    message.channel.send({
      embed: {
        color: 3447003,
        description: "shutting down good bye 👋"
      }
    })
      .then(client.user.destroy)
      .then(process.exit)
      .catch(process.exit);
  }
  if (message.content === (prefix + "restart")) {
    message.channel.send("restart by <@" + message.author.id + ">");
    message.channel.send({
      embed: {
        color: 3447003,
        description: "restarting 👋"
      }
    })
      .then(process.exit)
      .catch(process.exit);
  }
  if (message.content === (prefix + "id")) {
    message.author.send(`Your ID **${message.author.id}**`);
    message.channel.send("`Your ID has been sent to you via Dm's`");
  }
  if(message.content === (prefix + "time")) {
    message.channel.send("time u join");
  }
  if(message.content === (prefix + "ga")) {
    message.channel.send(`__Wether the Guild is available or not__ **${message.guild.available}**`);
  }
  if(message.content === (prefix + "gn")) {
    message.channel.send(`Name of the guild **${message.guild.name}**`);
  }
  if(message.content === (prefix + "owner")) {
    message.channel.send(`The owner of **${message.guild.name}** is **${message.guild.owner.user.username}**`);
  }
  if(message.content === (prefix + "warn")) {
    const args = message.content.slice(prefix.length).trim().split(/ + /g);
    const b = message.guild.member(message.mentions.users.first());
    const f = args.join(2); //gives the command warn only
    message.channel.send(`${b}  ${f} has been warned by ${message.author}`);
  }
  if (message.content.startsWith(prefix + "kick")) {
    const modRole = message.guild.roles.find("name", "Creator");
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    let reason = args.slice(2).join(" ");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("u dont have perms to use");
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Plz mention");
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if (!kickMember) {
      return message.reply("not valid user");
    }
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
      return message.reply("dont have perms kick members");
    }

    kickMember.kick().then(message.channel.send(`:no_entry: **${kickMember.user.tag}** has been __kicked__ by Moderator **${message.author.username}** for **${reason}**`).catch(console.error));
  }

  if (message.content.startsWith(prefix + "ban")) {
    const modRole = message.guild.roles.find("name", "Creator");
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    let reason = args.slice(2).join(" ");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("u dont have perms to use");
    }
    if (message.mentions.users.size === 0 || message.member.user.id) {
      return message.reply("Plz mention");
    }
    let BanMember = message.guild.member(message.mentions.users.first() || message.member.id);
    if (!BanMember) {
      return message.reply("not valid user");
    }
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
      return message.reply("dont have perms kick members");
    }

    BanMember.ban().then(() => message.channel.send(`:no_entry: **${BanMember.user.tag}** has been **banned** by Administrator **${message.author.username}** for **${reason}**`).catch(console.error));
  }




  ///////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  if (message.content === (prefix + "ownerid")) {
    const owner = message.guild.ownerID; //owner.user.id
    if (message.author.id === (owner)) { //message.author.username or tag
      console.log(`Owner id has been sent to ${message.author.username} via direct messages`);
      message.author.send(`This is the owner's ID in **${message.guild.name}**`);
      message.author.send(`**${message.author.id}**`);
      message.reply("Check my direct messages. You will find the ID of the owner of this guild!!"); // stuff
    } else {
      message.channel.send(owner);
    }
  }
});




///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

//other stuff



///////////////////////////////////


// if(message.content.startsWith(prefix + "ge")) {
//  message.channel.send(owner.user.id); //member id
//  }

client.on("message" , message => {
  if(!message.content.startsWith(config.ownerID)) return;
  if(message.content.startsWith(prefix + "count")) {
    message.content.send(`There is ${client.guilds.size} members on the server`);
  }});
//
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

client.login(process.env.BOT_TOKEN);
