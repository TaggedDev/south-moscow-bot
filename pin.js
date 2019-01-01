module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('У вас нет прав на использование этой команды')

    let msgid = args[0]

    if(!msgid) return message.channel.send('Укажите ID сообщения')

    await message.channel.fetchMessage(msgid)
    .then(async msg => {
        if(!msg) return message.channel.send('Сообщение не найдено')
        await msg.pin()
    }).catch(console.error)
}

module.exports.help = {

}