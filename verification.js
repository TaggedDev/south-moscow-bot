module.exports.run = async (bot, message, args) => {

    let member = message.guild.member

    let bronze = message.guild.roles.find(r => r.name == 'Бронзовая лига')
    let silver = message.guild.roles.find(r => r.name == 'Серебряная лига')
    let gold = message.guild.roles.find(r => r.name == 'Золотая лига')
    let high = message.guild.roles.find(r => r.name == 'Высокая лига')
    let elite = message.guild.roles.find(r => r.name == 'Элитная лига')
    let great = message.guild.roles.find(r => r.name == 'Лига высоких пилотов')
    
    let mess = await message.channel.send('Канал для использования рейтинговых ролей. \n\n Что бы получить роль Бронзовая лига :bronze: - нажмите на :third_place: \n Что бы получить роль Серебряная лига :silver: - нажмите на :second_place: \n Что бы получить роль Золотая лига :gold: - нажмите на :first_place: \n Что бы получить роль Высокая лига :high: - нажмите на :meda: \n Что бы получить роль Элитная лига :elite: - нажмите на :trophy: \n Что бы получить роль Лига высоких пилотов - нажмите на :video_game: \n\n Если вы ошиблись или апнули новый тир - нажмите на :x: ')
    // 🥉🥈🥇🏅🏆👾
    await mess.react('🥉')
    await mess.react('🥈')
    await mess.react('🥇') 
    await mess.react('🏅')
    await mess.react('🏆')
    await mess.react('🎮')
    await mess.react('❌')
    const collector = mess.createReactionCollector((reaction, member) => reaction.emoji.name === '🥉' || reaction.emoji.name === '🥈' || reaction.emoji.name === '🥇' || reaction.emoji.name === '🏅' || reaction.emoji.name === '🏆' || reaction.emoji.name === '🎮' || reaction.emoji.name === '❌' )

    collector.on('collect', async r =>{
        switch(r.emoji.name) {
            case '🥉': 
                 message.member.addRole(bronze.id)
            break

            case '🥈':
                message.member.addRole(silver.id)
            break
            
            case '🥇':
                message.member.addRole(gold.id)
            break
            
            case '🏅':
                message.member.addRole(high.id)
            break
            
            case '🏆':
                message.member.addRole(elite.id)
            break
            
            case '🎮':
                message.member.addRole(great.id)
            break
            
            case '❌':
                message.member.removeRoles(['525758919566426142', '525758943570690058', '525758944094846984', '526350717259087892','526350717674323969','526350718580424714'])
            break
            }
    })
    
}

module.exports.help = {
    name: 'rating' // название команды
}
