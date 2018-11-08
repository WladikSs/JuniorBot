const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const antispam = require("discord-anti-spam");


const autoroleName = 'SURVIVOR'; // Name der Rolle z.B. "Aktiv"



const hook = new Discord.WebhookClient('509040088915902474', 'BYo1C5XaCuPilCLDzOSO3mL5gtUo5THUGXWGM3MLaU4e1OPtQGcCkERpG2x8uOhdeYer');
hook.send('**Bot** **ONLINE** :white_check_mark:');

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity("with Fidget Spinner");
});
client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity("with Fidget Spinner");
});
client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity("with Fidget Spinner");
});
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

   // if(command === "whitelist") {
   //   if(message.channel.id != "509036686626258947") return;
   // message.channel.sendMessage('Hi');

  ///  message.channel.sendMessage('**WHITELIST KEY** ' + message.author + '```d583dbfa-e02d-11e8-9f32-f2801f1b9fd1```');
 


  ///}








   
  message.reply('**Searching Scripts...**')
  .then(msg => {
  msg.delete(2000)


  if(command === `whitelist`) {
    if(message.channel.id != "509036686626258947") return;
    let embed = new Discord.RichEmbed()
    .setColor("#1bc643")
    .setTitle("**WHITELIST KEY**")
    .setDescription("```d583dbfa-e02d-11e8-9f32-f2801f1b9fd1```");
    message.channel.sendMessage(embed);
  
  
  };

})

//////////////////////////////////////////////////////////////////////////////////////////////////////



      
      

  //if(!message.member.roles.find("name", "[OWNER]"))
   //message.channel.sendMessage("G3T R3KT!");
    //return;

  //if(command === "purge") {
    //const deleteCount = parseInt(args[0], 10);
    //if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      //return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    //const fetched = await message.channel.fetchMessages({limit: deleteCount});
    //message.channel.bulkDelete(fetched)
      //.catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  
       
     
   
});





client.on('guildMemberAdd' , (member) => {
  var joinrole = member.guild.roles.find('name', '[SURVIVOR]');
  member.addRole (joinrole);

});

antispam(client, {
  warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned.
  maxBuffer: 200, // Maximum amount of messages allowed to send in the interval time before getting banned.
  interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.
  warningMessage: "**SHUT UP!**", // Warning message send to the user indicating they are going to fast.
  banMessage: "**BANNED KID!**", // Ban message, always tags the banned user in front of it.
  maxDuplicatesWarning: 7,// Maximum amount of duplicate messages a user can send in a timespan before getting warned
  maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned
  deleteMessagesAfterBanForPastDays: 7 // Delete the spammed messages after banning for the past x days.

});
 
client.on('guildMemberAdd', member => {
  member.guild.channels.get('509036677528944640').send('**' + member.user.username + '** **welcome to tschernobyl!**'); 
});


client.login(process.env.BOT_TOKEN);