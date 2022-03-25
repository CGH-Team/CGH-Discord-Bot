const { CommandInteraction, Client, MessageEmbed } = require('discord.js');
const moment = require('moment');

const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline/Invisible",
    cooldown: 5000,
};

module.exports = {
    name: 'userinfo',
    description: 'userinfo command',

    options: [
        {
            type: 'USER',
            description: 'The user',
            name: 'user',
            required: false,
        },
    ],

    /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

    run: async(client, interaction, args) => {
        var permissions = [];
        var acknowledgements = 'None';

        const member = interaction.guild.members.cache.get(args[0]) || interaction.member;

        const user = interaction.user || interaction.mentions.user.first();

        const flags = {
            DISCORD_STAFF: '<:DiscordStaff:865600341718466570>',
	        DISCORD_EMPLOYEE: 'Discord Employee',
	        DISCORD_PARTNER: '<:Partner:865598375251410984>',
	        BUGHUNTER_LEVEL_1: '<:BugHunter1:865597855505711194>',
	        BUGHUNTER_LEVEL_2: '<:BugHunter2:865598109177348146>',
	        HYPESQUAD_EVENTS: '<:HypeSquad:865596357125341204>',
	        HOUSE_BRAVERY: '<:Bravery:865597545741156372>',
	        HOUSE_BRILLIANCE: '<:Brilliance:865597355003871252>',
	        HOUSE_BALANCE: '<:Balance:865597097016557619>',
	        EARLY_SUPPORTER: '<:EarlySupporter:865598696513863700>',
	        TEAM_USER: 'Team User',
	        SYSTEM: 'System',
	        VERIFIED_DEVELOPER: '<:early_developer_badge:865598697189539880>'
        };

        const userFlags = user.flags.toArray();

        if(member.permissions.has("KICK_MEMBERS")){
            permissions.push("Kick Members");
        }
        
        if(member.permissions.has("BAN_MEMBERS")){
            permissions.push("Ban Members");
        }
        
        if(member.permissions.has("ADMINISTRATOR")){
            permissions.push("Administrator");
        }
    
        if(member.permissions.has("MANAGE_MESSAGES")){
            permissions.push("Manage Messages");
        }
        
        if(member.permissions.has("MANAGE_CHANNELS")){
            permissions.push("Manage Channels");
        }
        
        if(member.permissions.has("MENTION_EVERYONE")){
            permissions.push("Mention Everyone");
        }
    
        if(member.permissions.has("MANAGE_NICKNAMES")){
            permissions.push("Manage Nicknames");
        }
    
        if(member.permissions.has("MANAGE_ROLES")){
            permissions.push("Manage Roles");
        }
    
        if(member.permissions.has("MANAGE_WEBHOOKS")){
            permissions.push("Manage Webhooks");
        }
    
        if(member.permissions.has("MANAGE_EMOJIS_AND_STICKERS")){
            permissions.push("Manage Emojis");
        }
    
        if(permissions.length == 0){
            permissions.push("No Key Permissions Found");
        }
    
        if(member.user.id == interaction.guild.fetchOwner().id){
            acknowledgements = 'Server Owner';
        }
    
        const embed = new MessageEmbed()
            .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
            .setColor('#2F3136')
            .setFooter(`User Info`, interaction.client.user.avatarURL({ dynamic: true }))
            .setThumbnail(member.user.displayAvatarURL())
            .setTimestamp()
            .addField('__User:__ ', `<@${member.user.id}>`, true)
            .addField('__User ID:__ ', `${member.user.id}`, true)
            .addField('__Joined at:__ ',`${moment(member.joinedTimestamp).format("DD/MM/YYYY")}`)
            .addField('__Created On:__', member.user.createdAt.toLocaleString(), true)
            .addField('__Badges:__', `${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`, true)
            .addField(`\n__Roles [${member.roles.cache.filter(r => r.id !== interaction.guild.id).map(roles => `\`${roles.name}\``).length}]__`,`${member.roles.cache.filter(r => r.id !== interaction.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "No Roles"}`)
            .addField("\n__Acknowledgements:__ ", `${acknowledgements}`)
            .addField("\n__Permissions:__ ", `${permissions.join(` **|** `)}`, true);

        interaction.followUp({ embeds: [ embed ] });
    },
}