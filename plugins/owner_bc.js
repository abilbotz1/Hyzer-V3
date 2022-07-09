let handler  = async (m, { conn, text }) => {
  let chats = Object.keys(await conn.chats)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  for (let id of chats) {
       let bcbg = 'https://telegra.ph/file/f043f8f370a99140b4ea8.jpg'
       await conn.send2ButtonImg(id, bcbg, text.trim(), wm, '𝗠𝗘𝗡𝗨🤖', '.menu', '𝗢𝗪𝗡𝗘𝗥🗿', '.owner', m)
     }
  m.reply('*Broadcast selesai*')
}
handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
