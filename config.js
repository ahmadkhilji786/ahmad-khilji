const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "~E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFBsblpWSFAydEpFSkVTNlpxcVZkeEFpc3ZndjFjUW0vdU5DWTJ3T0IzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3BQNVR6U0xDSnlXa2kyNUgyUFErREFmTzFwNktTTmw2NnMvSFQwTU4wbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRUhnMkhxcDh0c1NEbnZ4SU4rMmZ0T3EyazVPazhHaVNUWkJjYWRRNG1BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3eWNYL3Y3NGRqWDRqVnNKcWVhVm9ySk9Sd3ZKRlBIY3FWVHVBejlITFVVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9HOGw5YVB0UjlqTmxCbVF1R2hVVG1ESHBHdHprWkRpa3JTak1aVTB1bnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpWV1NicFVJTFYrUU9ybVVpV3ZYSUhaMGt4cnJyeDBDWUZKTTVkR3RtRHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0Z3ei9qMEgySDJxdFM2M3RVaHQ5a29oVEdock83Tld0aTRqSFBqTjMyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ZNWjdpK2wwZWphYW8xK3E2RTcwWSs4NS9KMmN1NHJIK0tkZ3dsVDhWQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImYxQkdRUmNqYVZSMEtHRktuL0tjWlNOMjZTQ2xlZW1OTTc4SlZqTElPODNqb2treEZibUFkdU14SDdDRThIU09pUVB1aktZQkgyS1hCaFhBMVY2WEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiNGVZbFc5VStmYXgyRUhSVlBPY2tYNDFzczhTdlRlZWhMWFpYNTNZQUhpcz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyOTAzMzg4NzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUE1RTZFMTQ0NDk4NUZBREJDNjQyMkUwQkNENzNGOEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjAyMzkxN30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjkwMzM4ODcyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM2RTZGOEMwRjA1QzA2RkMzQjNCODlCQUUwQ0JBQjY5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwMjM5MTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkJKTDVHVDNXIiwibWUiOnsiaWQiOiI5MjMyOTAzMzg4NzI6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBaG1hZCIsImxpZCI6IjEwNjQ3NzEzODI3MjMxOToyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWpjaTRZSEVPYVlxOFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSkJtWG9CVE92RU9qMlN3YXRrb1UraGtCM1hsRW16TURqZFliMWF3ZWgxQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWG9RWVpZbDNhbWdxYzBQdlpJR2RKQTZpclRpeTEwRXJwS3hOR3NDTXdqOXcvQXlvR0wyOFJtMEk2TlVUUFZzNkhIMnFYRXZHQVdiWlZvL0F6VXFzRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Im9LaGpyS2MwUDEyV2RidUtqeXZpUUpFVjRRZ0czeWpPMEtibWxHeCtGb1htYkNoeW1CejU2YWNaRkZvK1FjV2lqbERTL0swTnpIbzNZR1ZoZ3doUkF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjkwMzM4ODcyOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU1FabDZBVXpyeERvOWtzR3JaS0ZQb1pBZDE1UkpzekE0M1dHOVdzSG9kUSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MDIzOTEyLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFIeiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Ahmad-khilji ♥️☺️*",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Ahmad-khilji",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Ahmad-khilji",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923290338872",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Ahmad-khilji Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Ahmad-khilji Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
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
DEV: process.env.DEV || "923290338872",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
