const Discord = require('discord.js') // подключение discord.js к файлу

module.exports.run = async (bot, message, args) => {


 	//Статусы
	let online = message.guild.members.filter(member => member.user.presence.status == 'online');
	let offline = message.guild.members.filter(member => member.user.presence.status == 'offline');
	let dnd = message.guild.members.filter(member => member.user.presence.status == 'dnd');
	let idle = message.guild.members.filter(member => member.user.presence.status == 'idle');

    //Создание сообщения
    let embed = new Discord.RichEmbed() 
        .addField(`Участники[${message.guild.memberCount}]`, ` :spy: Пользователей: ${message.guild.memberCount}\n<:robot:513732173715603456> Ботов: ${message.guild.members.filter(m => m.user.bot).size}\n<:comet:513732173401030676> В сети: ${online.size}\n<:zzz:513732173187252275> Не активен: ${idle.size}\n<:no_bell:513732173254098950> Не беспокоить: ${dnd.size}\n<:bust_in_silhouette:513732173191184464> Не в сети: ${offline.size}`, true)
        .setColor(0xC71585)
    await message.channel.send(embed)

    
}

module.exports.help = {
    name: 'online' // название команды
}