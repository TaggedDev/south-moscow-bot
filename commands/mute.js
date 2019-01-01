module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('Недостаточно прав для использования команды')

    let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0]))

    if (!member) return message.channel.send('Укажите пользователя')
    if (member.hasPermission("MANAGE_ROLES")) return message.channel.send('Я не могу заглушить этого юзера')
    
    let muterole = message.guild.roles.find(r => r.name == 'Muted')
    if (!muterole) muterole = await message.guild.createRole({
        name: `Muted`,
        color: 0x808080
    })
    
    let reason = args.slice(1).join(' ') || 'Не указана'
    if (member.roles.has(muterole.id)) return message.channel.send('Пользователь уже заглушен')

    await member.addRole(muterole.id)
    await member.channel.send(`<@${message.author.id}> выдал мут <@${member.id}>\n**Причина**: ${reason}`)
}

    module.exports.help = {
        name: 'mute'
    }