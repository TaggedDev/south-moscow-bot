const Discord = require('discord.js')
module.exports.run = async (bot, message, args =>{
  
    let sicon = message.guild.iconURL;
    
    let embed = new Discord.RichEmbed() 
        .setAuthor(`Информация о командах на "${message.guild.name}"`)
        .setThumbnail(sicon)
        .addField(`Как использовать команды бота? - Ставите *, после чего пишите команду`)
        .addField(`*online - показыват количество пользователей онлайн, оффлайн, днд и нет на месте`)
        .addField(`*serverinfo - показывает информацию о сервере`)
        .addField(`*user - Информация о пользователе`)
        .addField(`*kick - Кикает пользователя (если есть права управления ролями)`)
        .addField(`*ban - Банит игрока по IP (если есть права управления ролями)`)
        .addField(`*mute - Мутит текстовый чат (если есть права управления ролями)`)
        .addField(`*send - Отправляет сообщение от имени бота (если есть права управления сообщениями)`)        
        .addField(`*edit - Редактирует сообщение бота (если есть права управления сообщениями)`)
        .addField(`*clear - удаляет сообщения в канале(если есть права управления сообщениями)`)
        .addField(`*pin - закрепляет сообщение в канале(если есть права управления сообщениями)`)
        .setColor(0xFFFFFF)
    await message.channel.send(embed)

})

module.exports.help = {
    name: 'help'
}
