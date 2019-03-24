module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Недостаточно прав')
    else if (message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('У меня недостаточно прав на использования бана')

    let member = message.guild.member(message.mention.user.first() || message.guild.find(m => m.user.username == args [0] || m.id == args [0]))
    if (!member) return message.channel.send('Такого пользователя не существует')
    else if (member.hasPermission("BAN_MEMBERS")) return message.channel.send('Невозможно забанить администратора, что бы выгнать пользователя нужно снять с него роли Администратора')

    let reason = args.slice(1).join(` ` || `Бан по причине пидорас`)

    await member.ban(reason)
    await message.channel.send(`<@${message.author.id} забанил <@${member.id}>\n **Причина**: ${reason}`)
}

module.exports.help = {
    name: 'ban'
}
