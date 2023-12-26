const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923361501800"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/Saeedx303/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923361501800' 
global.devs = '923361501800';
global.website = 'https://github.com/Saeedx303/XLICON-MD' //wa.me/+923361501800
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/48WIUas.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  " ",eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVBVklWUVF1SVNxMHA5UmQ3RmV4eFlGR2VsdkViTEFna2pSem05eEsycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1QwcTRZeEdkeEpEalRBMjNBN1lsWlBtY29GcjhrOTR0V1RtWjVFNFdCQT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TGQrY0N3ak53MkFsdzRDTmNRODFQR2NQNkhDRVhqNnEwZ2VqMTZKd1hNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTcDMxbmZRVFZmb21KVmxHajVaV1U0N3RRaGFYMmZQOW9BS0VQWDhPaUYwPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDVkpRSUd6dGpJWnVpZXdkYnpWSHVJVUxyMHN2eHI4L0JtUWJ3dGdpM1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVadXhFWUhsU0RyWnVUUk5xbTYyclZ6VUtJbk8wUjluOGtjN09rWExOaUU9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYWlNKQ1ArVE93STRJOW1ZYkVNSHo2aFZHaUJOOSsrSDhENHZScjhjaXRzTXRJVy9KcGlrejQ5NXFoTVF5d3pHcjN1ZVgzT01BWVFvblR0VHBBaVlCUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIxMiwiYWR2U2VjcmV0S2V5IjoiNHI4TUZLVVltMlpGRW1iZndGNFlCaUVrc0lXdlNVV1dnZG5IUHpncnhuQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiekFQaFV3a1NTenFFaTFmVjhHbUJ5ZyIsInBob25lSWQiOiI5ZWQzYWMyNC1jZGYzLTQxN2YtYTBjMC1jNDY3NWY4Y2YyNDUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVhJcHZ6ZEhGdSt3MHI5dlpjNVgvTldFV1pVPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6dzEzQmxyMFlULzZFUFdNbEFuU3Y2QUd1Yjg9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNTDBwTWdFRUxISHJLd0dHQUk9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNQRVRubVI2Q0FQR3RaM2pZdEFxSWMxSFl1ZG9wQ3RReVloWitwY3FuVFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdGZEd3eHRtRC9KVXU2SzU4VkUwTHJxN0h3c3piRW95cmtPSW9LWjhsamE3VHNkWE9wSUFpZlg0azVOZE4xTnNQL2xDelZVOW9CK0lwbGpiRXdCakJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtMXdSWkpqUGVSMHVIOERvZkNiTDZIeHhwVjBIazFrVFc4NUpUVkpTWDI3Ui85VDMrem1OcnRZNXZHaXUzcG9SRjJEME1sNnV3aTF1SThHREh4cDRDdz09In0sIm1lIjp7ImlkIjoiOTIzMzYxNTAxODAwOjMzQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM2MTUwMTgwMDozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiRHhFNTVrZWdnRHhyV2Q0MkxRS2lITlIyTG5hS1FyVU1tSVdmcVhLcDAxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAzNjE3NDYwfQ==, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "BABLI-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'BABLI' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 10 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'warn' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'i am dead' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
