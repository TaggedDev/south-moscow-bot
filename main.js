const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();
const config = require('./config.json');
bot.commands = new Discord.Collection()

fs.readdir('./commands', (err, files) => {
    if(err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js')
    if (jsfile.length <= 0) return console.log('Команды не найдены')
    
    console.log(`Загружено ${jsfile.length} команд`)
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        bot.commands.set(props.help.name, props)
    })
})


bot.on('message',async message => {
    let prefix = config.prefix;
    let messageArray = message.content.split(' ')
    let command = messageArray[0]
    let args = messageArray.slice(1)

    let commands_file = bot.commands.get(command.slice(prefix.length))
    if (commands_file) commands_file.run(bot, message, args)
})

bot.login(config.token);
bot.on('ready', () => {
    console.log(`${bot.user.username} online`);
    bot.user.setPresence({status: 'online', game:{status: 'Бот тестируется', type: 3}});
})

client.login(process.env.BOT_TOKEN)
