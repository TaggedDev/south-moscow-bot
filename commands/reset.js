module.exports.run = async (bot, message, args) => {  

    message.channel.send('Все рейтинговые роли были сброшены! everyone')
     message.member.removeRoles(['525758919566426142', '525758943570690058', '525758944094846984', '526350717259087892','526350717674323969','526350718580424714'])
   
}

module.exports.help = {
    name: 'reset' // название команды
}