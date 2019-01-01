const {RichEmbed} = require('discord.js') // подключение discord.js к файлу
const strftime = require('strftime')

module.exports.run = async (bot, message, args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let argsUser
    if(member) argsUser = member.user
    else argsUser = message.author

    let statuses = {
        online: 'В сети',
        offline: 'Не в сети',
        dnd: 'Не беспокоить',
        idle: 'AFK',
    }

    let game
    if (!argsUser.presence.game) game = `Статус: **${statuses[argsUser.presence.status]}**`//если статуса игры нет, то будет отображен статус активности
    else if (argsUser.presence.game.type == 0) game = `Играет в: **${argsUser.presence.game.name}**` //если у человека статус Играет в 
    else if (argsUser.presence.game.type == 1) game = `Стримит: [**${argsUser.presence.game.name}**](${argsUser.precense.url})`//если у человека статус Стримит
    else if (argsUser.presence.game.type == 2) game = `Слушает: **${argsUser.presence.game.name}**`//если у человека статус Слушает
    else if (argsUser.presence.game.type == 3) game = `Смотрит: **${argsUser.presence.game.name}**` //если у человека статус Смотрит


    let day = 1000*60*60*24 //в одном дне 86.000.000 милисекунд
    let d1 = new Date(message.createdTimestamp)
    let d2 = new Date(argsUser.createdTimestamp)
    let d3 = new Date(message.guild.member(argsUser).joinedTimestamp)
    let diff1 = Math.round(Math.abs(d1.getTime() - d2.getTime() / day)) //с момента регистрации
    let diff2 = Math.round(Math.abs(d1.getTime() - d3.getTime() / day)) //с момента вступления на сервер

    let embed = new RichEmbed()
        .setTitle(argsUser.username)
        .setDescription(game)
        .addField('Дата регистрации в Discord', `${strftime('%d.%m.%Y в %H:%M', new Date(argsUser.createdTimestamp))}\n(${diff1})дней назад`, true)
        .addField('Дата вступления на сервер', `${strftime('%d.%m.%Y в %H:%M', new Date(message.guild.member(argsUser).joinedTimestamp))}\n(${diff2})дней назад`, true)
        .addField('Текущие роли:', message.guild.member(argsUser).roles.filter(r => r.id != message.guild.id).map (role => role.name).join(', ') || 'Отсутствуют')
        .setColor(message.guild.member(argsUser).displayHexColor)
        .setTimestamp()
        .setThumbnail(argsUser.avatarURL)
        .setFooter(`ID ${argsUser.id}`)
    await message.channel.send(embed)
}
module.exports.help = {
    name: 'user' // название команды
}