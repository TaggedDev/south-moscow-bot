module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Недостаточно прав')
    
    let count = args[0] || 1
    await message.delete()
    await message.channel.bulkDelete(count)
}

module.exports.help = {
    name: 'clear'
}