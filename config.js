
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "deltacore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0VwdVQrSWFMR3lKYzhnT2dZUXJxL1MzenRUejI1UjBoZUNpWEhiNWdrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXRBUHI0Qy9XcjBMTCtjdHd2T2xSUmVEK0hYODFwQ1ZjNDdralk4czczdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLUDBEUnBTb21IeWlHWHcxYTF5ZmEzRDhuUlhvWHVxMXR6Ry8rRWtQTFZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2bVJwNjJ2T3ROUWhVNnI3NjBvRXd4ZVlueXhpZWNaU2lPRlFtNFdpN1IwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlPd1pqSk1mQjZvY2dJL3pqMmlWS3JoRVlFdlZCbEpzdzFCVy85QnZSa0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjEwZDgvQXZsUWh3RUdkUGV3ZFVwWGNEaHhTc0wwMk9OKytaRXFqU3Y5UmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib01BU3hJbm1SMW1rbzNwRDlQWTJVazZadFFISzZnZWtvZG9nNFVDWXMyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazBDS0tLSll6Tm1XUXB0aXRteEtVSm1NamRxNGNGdmlqcmc5dTI4dzFEcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZPVTA3WmlRVDJwWllBdklhTWpzL1UrOEs5NTh3ellJOVkzUk9YcEFhbmdhS1JLWUJ1QndQZy8wVlNtblkxWWk0Tk5VUkc5aVVXWHErbjJkclY0VWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiIyMkxzZFZrYkJpSFZsU3lYcUlSMG1HYy9BcUN6SzcwN09veTV2dnBneTdvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTA0NjU3OTcxOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyMjgzRDM3MTNGRkYzQkRFMTI2MzQ2QTkwQ0M0NzE1MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1MDU2MTUxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFUkU0TFBXTSIsIm1lIjp7ImlkIjoiOTE5MDQ2NTc5NzE4OjQwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNTM0MzgzMzU0NzE3MzI6NDBAbGlkIiwibmFtZSI6IvCfh7figIrwn4em4oCK8J+HryJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTjJCa1F3UWg1RHd4QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWXJPendTQ01sd2xjRjRvWnVCNGFXWXNEaSsxcm1Ed2hTREwzNThNYlVHOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWkRvU3A0dGtVS0Z2aXF2RUhFc1BBNFBPMGZLR1FWbmZjZkdlQmFLSEQyZklQOXUyVENyUW1mc2RkeVRNdWRUMjFDcVRGeElPWU5URG41bUFpQzBtQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IjNWSjRJVU1qc2t6MlA5UDFMMU16VkR2aXZmSGpqVVI2TEVBUmtRb2hNUlIyL2tmOXNWSG9lblBOQjBtL3hZNFM2c2M3VFlMZXY3aC9QdjFEbGtxcGhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5MDQ2NTc5NzE4OjQwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldLenM4RWdqSmNKWEJlS0diZ2VHbG1MQTR2dGE1ZzhJVWd5OStmREcxQnYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTA1NjE0OCwibGFzdFByb3BIYXNoIjoiMk1GS1BRIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKRkIifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY DELTA-MD-V1*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "DELTA-MD-V1",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "DELTA-MD-V1",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "263788521064",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "FRONTIER SIR",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ delta ᴛᴇᴄʜ  ",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/493ur5.jpg",
// add img for alive msg
MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/0go0uy.jpg",
// menu image 
WELCOME_ENABLED: process.env.WELCOME_ENABLED || "true",
    // welcome group members 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
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
DEV: process.env.DEV || "263788521064",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
