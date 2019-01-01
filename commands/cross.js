module.exports.run = async (bot, message, args) => {

    let member = message.guild.member
    let mess = await message.channel.send('Some text')
    await mess.react('❌')

    const collector = mess.createReactionCollector((reaction, member) => reaction.emoji.name === '❌') 
    
    collector.on('collect', async r =>{
        switch(r.emoji.name) {
            case '❌':
                message.member.removeRoles(['525758919566426142', '525758943570690058', '525758944094846984', '526350717259087892','526350717674323969','526350718580424714'])
            break
        }
    })

}
module.exports.help = {
    name: 'cross' // название команды
}
