const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5Sdm9aTmxsQ2ZqKzJrWFJVV1g5bTdmb0xXWkl4UzRVZUJjaytqMGlWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0RGdXRXU09HNGRnOWUwOHllT09TdTZ4TXJtL0c4M3RFVE5SZVdEcFJrQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRjAwajNyeGxxOE9lazd2czVrYU51NU4xMEIvMnEzbGdRemVIcHZGNVc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtWEZJNmRmYzRYQkJoeWY2RndoMFhwNm5BSlFFb09idTF3VGRIZk1KN2d3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGTVdpVjU2TFZEL1hHellsLzgwWTFyZndoZnV1MkJVMTlIVEtDTmxpbFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo4U1AreGxTdk0rMWEvRU5FRmhDRmVUQTVOejFPaWYwSGVkTTJKNmk1MnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ZaRzBmd2tTZXRSVzZKQ0lIejg1VnJXNDJPQ2FhTFNBdSs2UDl5MFpXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnlCTTNUcHZWSkVHT2tMU2hmbFk4ZVd5MGsxZm1ueUtIUVBkZUVyQWUzbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhwQU1ZZDdja3B6dnMwbzhTV0k1WUhJMEFvWWVBSU9PL0EwWFFVTzN5WWpCUlFYbXpqMnREOUdNdU4yUGJLY1RwNFhpUnNHMS9YeUpYeUpMYjhkWkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE4LCJhZHZTZWNyZXRLZXkiOiJFdERrMjV0Y25xUFFIaDM3Yk1Ma0dONkd3N1lIL0hITnd1ZDdESzdjSC9jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjEyMjY3OTQ1NzY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRDZGNzk1Mzk3OTFGN0REMDg3NTUzRkVGQTFFRDU5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Njc2OTAwMjN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjEyMjY3OTQ1NzY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDODA5MDlCQjE4MjlBRUYzRkQ5RjQwMjJFODMwNzAwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Njc2OTAwMjN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjEyMjY3OTQ1NzY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNTBGNDBGRjgzN0I4QzE5MkYwMDhDODdBMUU0MEI1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Njc2OTAwMjN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjEyMjY3OTQ1NzY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQTU3MDkwMTk3NDExRjQxMkM4N0Y1QzI2QUIxNDNGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Njc2OTAwMjN9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWVVQUkFERVYiLCJtZSI6eyJpZCI6IjEyMjY3OTQ1NzY3OjY2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTc0MjM0NTU5MDU3OTQyOjY2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkdXeUNjUW1KN3p5Z1lZRENBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNEhTamRoRS9TcW0vd2NLdHN1T1VKU3lpY1RWWlBuNUhWRVhpMlAwcDYzUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicG1EYk1pMHMxWUF6bXFvT0NkRnMwUXQ3NHNXN1Y4RHB4MkdDMi9nVThTekszazBzaExpdllOSkZQQm1URCttVTI2TncxM2IxY3Q1MXdYRm1vVmtrQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IkRzNkJaeEF6Q3puU0FhTlR1MWdEVGZPcy9hUFpkaUUwTmc3SE5CZVVsd01hemQ1M2dWcjR0VldwWnB6eFIrK0gvbXltMkhEdC9QTmVWQm4vbkRLbkF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTIyNjc5NDU3Njc6NjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUIwbzNZUlAwcXB2OEhDcmJMamxDVXNvbkUxV1Q1K1IxUkY0dGo5S2V0MCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRZ0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY3NjkwMDIyLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSy9OIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ANAYAT-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ",",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "358453274235",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Kungis*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Anayat-ai ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
