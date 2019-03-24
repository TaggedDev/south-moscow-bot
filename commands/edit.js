module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Нет прав для использования')

    let msgid = args[0]
    let content = args.slice(1).join (' ')

    if(!msgid || !content ) return message.channel.send('Нужно указать оба аргумента')

    await message.channel.fetchMessage(msgid)
    .then(async msg => {
        if(!msg) return message.channel.send('Сообщение не найдено')
        await msg.edit(content)
    }).catch(console.error)
}

module.exports.help = {
    name: 'edit'
}