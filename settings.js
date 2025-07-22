require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || CYPHER-X:~UEsDBBQAAAgIAAFI9lrWfPDNVgQAAHQHAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nVWrkoqFVdtQHlqmirILo1DxECRLlJgohb*vct2umZedid6uUpJKlzvvNd8jfIC0KxjVsw*RuUFbkhhrsla0sMpkCpowhXoA9CxBCYAhcu167nHy24v6Qak1telGzTfJw9PVsajlRPFrbu2dFcjN*Asw*K+pSS4DcFa*ey4I6NcS1R79xc0voSBBcjUPzR0eopi5vyvjxw8nBm7uAbeHYVEalIHs*LBGe4QqmN2zUi1dfgj7Viv0a2nRdbUjj6faWeTt7dZ9ymUeUeLIONc2je75TL51+D3*KtMJwYtIkaTTStfETdbHHVhTiyM3*tY8OCyTz1H0c+eMGnJM5xaIY4Z4S1X+ZdWgixft8vrmY9GS2ThWCdy82WBK6WSBJ*uwYbf5fsOJpyX+TdusZBYmWimaSoFBRzuELaKDic*ejYDqjnwvcbP1crj2ybX4Gvq0+vXP4P77VdO9aMQvsBteShyfPhbXyDJF8W7nI2mu1aP14J5nVwzIKvwZ+dd*nVPa8utMrPC1nB4+Ru1MfEmV8tebGab3OV1l4d1mT+Ez5idfU7lKRsi8f40IuGzUPr1dg3K5ji67Z8nG0hLm5pvFuI2Hc80+xt0KNM1dSVhpHcoNUsVntODd8VcbIaOyte2ZwgwuuKU+Hbx0QX3JohmPLPPqhwTCirECNF3u0JvNAHKLxtcVBh9kEvWK6OF86zyHInG8Y+ldqFlmqOlKlylO2jQ0qVXqZDbSid5m+gD8qqCDClODQIZUXVLjGlKMYUTP*61gc5vrOXcF07ke+DiFSUuXldpgUKP1X9PERBUNQ527Z5oHYLXIEp93MbM0bymHY81jmqgoTcsJogRsE0QinFPybEFQ7BlFU1*pFatQg74q3DzIDiBoI+yD4EISGYAkEcTnhB4CfSkB9N5dGf9I+mq4vK8o8cM9AH6esex484keOGQ5kXRam72R08f0DsKoaYIZJSMAXqUkyvUazNzTobBEtdh2YM1bhr*jnSpzde3G8mTSEJ*Mr1OOgcUe6bhh1VqncYkPVgsLkfMb8LBs0yhYe3fykCpqBZ48gVtoZhButWcE+6*mhmmm9ai9yylEHkGPg48eSLHWW3x0XmHNraWI3cUVJz+gGTmTJa3nXxprRSro03MyGjQyV+67qF+EYC*GszeNIM5T6Dxtjn4UpSJJWW7btKi81hLTqiYVlXDw0g1otFvMlS9bS1Z+P85I3kiVdQ1fY17N3Z+KA*iLPSlvfHIRmrzcu1H6lJv79W5MNPnVjdb0TwR*hz1En4BfFeyDuTcc*+L0W+vyf*kUnFjQJ7xdgu1UI42+9LvlXaXGrS*Xp4Hgy4YO8zV1yPZ9a7Dp7Pb31QpohFRZWBKUB5WBUkBH1QFXXnWjOPit80UxXThPFr9BRRBn8mYUcyTBnKSjDl5ZHIy0N5MnndWldFaSCadCys+UMSdbZuYVluGWKfwQKw++biBDz*AVBLAQIUAxQAAAgIAAFI9lrWfPDNVgQAAHQHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAH4EAAAAAA==,
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2349122196415',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || animehaven01,
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
