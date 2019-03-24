const Discord = require('discord.js') // подключение discord.js к файлу

module.exports.run = async (bot, message, args) => {


 	//Статусы
	let online = message.guild.members.filter(member => member.user.presence.status == 'online');
	let offline = message.guild.members.filter(member => member.user.presence.status == 'offline');
	let dnd = message.guild.members.filter(member => member.user.presence.status == 'dnd');
	let idle = message.guild.members.filter(member => member.user.presence.status == 'idle');

	//Инфа о создании ги
	let day = message.guild.createdAt.getDate()
  	let month = 1 + message.guild.createdAt.getMonth()
  	let year = message.guild.createdAt.getFullYear()
  	
  	//ID, ava,проверка
  	let id = message.guild.id;
	  let sicon = message.guild.iconURL;
    let verifilv = ['Отсутствует', 'Низкий', 'Средний', 'Высокий', 'Очень высокий']

    //Создание сообщения
    let embed = new Discord.RichEmbed() 
        .setAuthor(`Информация о "${message.guild.name}"`)
        .setThumbnail(sicon)
        .addField(`Участники[${message.guild.memberCount}]`, ` :spy: Пользователей: ${message.guild.memberCount}\n<:robot:513732173715603456> Ботов: ${message.guild.members.filter(m => m.user.bot).size}\n<:comet:513732173401030676> В сети: ${online.size}\n<:zzz:513732173187252275> Не активен: ${idle.size}\n<:no_bell:513732173254098950> Не беспокоить: ${dnd.size}\n<:bust_in_silhouette:513732173191184464> Не в сети: ${offline.size}`, true)
        .addField(`Каналы[${message.guild.channels.size}]`, ` :keyboard: Текстовых ${message.guild.channels.filter(c => c.type == 'text').size}\n:sound: Голосовых ${message.guild.channels.filter(c => c.type == 'voice').size}`, true)
        .addField('Уровень проверки', verifilv[message.guild.verificationLevel], true)
        .addField('Регион', `:flag_ru: Россия`, true)
        .addField('Владелец', message.guild.owner)
        .addField("Сервер создан", `${day}.${month}.${year}`)
        .setFooter(`ID: ${id}`)
        .setColor(0x32d160)
    await message.channel.send(embed)

    
}

module.exports.help = {
    name: 'serverinfo' // название команды
}