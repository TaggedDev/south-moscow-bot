module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('У вас нет прав на использование этой команды')

    let content = args.slice(0).join(' ')
    if (!content) return message.channel.send('Укажите текст сообщения')
    await message.delete()
    await message.channel.send(content)
}

module.exports.help = {
    name: 'send'
}