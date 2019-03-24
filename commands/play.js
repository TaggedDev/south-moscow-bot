const ytdl = require('ytdl-core') //Подключаем библиотеку 
const queue = new Map() //Задаем массив "Очередь" 

module.exports.run = async (bot,message,args) => {
    let song = args[0], voice = message.member.voiceChannel //определяем песни

    if (!song) return message.channel.send('Укажите ссылку на трек') //Если это не ссылка, выводит
    if (!voice) return message.channel.send('Войдите в голосовой канал') //Если пользователь не в войс чате

    let valid = ytdl.validateURL(song) //Проверяем правильность ссылки
    if (!valid) return message.channel.send('Ссылка недействительна') //Если неправильная, то выводит

    let connection = await voice.join() //заходим в войс чат
    let guild_queue = queue.get(message.guild.id) //определяем, откуда очередь берет музыку
    if (!guild_queue) guild_queue = queue.set(message.guild.id, {songs: []}).get(message.guild.id) //Если её не было до этого, создаем

    guild_queue.songs.push(song) //Включаем микрофон
    message.channel.send('Трек был добавлен в очередь') //Пишем в чат
    if (guild_queue.songs.length < 2) play(connection, guild_queue.songs) //Если длинна списка песен меньше 2, играем
}

module.exports.help = {
    name:'play' //Название команды
}

async function play(connection, songs) { 
    let music = await ytdl(songs[0], {filter: 'audioonly'}) 

    connection.playStream(music, {volume: 0.5}) //Звук
    .on('end', () => {
        songs.shift() 
        if(songs.length > 0) play(connection, songs) //Если ещё есть песни, играем дальше
        else connection.disconnect() //Нет песен - ливаем
    })
}
