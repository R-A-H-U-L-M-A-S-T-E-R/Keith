
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VUW5OiOBT+L3nFGgkgiFVdtYiiKCrdQqu9tQ8BAga5xAQQnfK/b2FPT8/D7mwvTyFJnfOd75LvoCgJx0t8BaPvgDLSoAp3y+pKMRiBcR3HmIEeiFCFwAgQQ99fXpoFn/e1LJ1OqMcZDmLx1Eo3PXh1DFe0knGg+PPTE7j3AK2DjIS/KZg1jThDyYQdTwmMfSXeSonkHVgk+H2fbqeCvQvk5KUPfeMJ3LuKiDBSJFN6xDlmKFviq4sI+xp8xbzWkHAank5uDEV4HbuOxj11RSdlliX2bMGLBLnBef/8NfiNZOPbej2Zwbn5LBu3hWcvrJux3Mv6qbH7Zu6Qm72NhWb8Az4nSYEjO8JFRarrl3nHmzpo8izp59P9LPUn+W1B5eDtzbkE7qvopFCD49MZDpVZ+TXgp/Sy21EOq2W6C95I6xSHBvt9bCvqfq05ajAkUUlVZZzwX4G77MMrp//Du7+RstNmKAlequvbyTFnG6XZBbu2T4J14FlpDKmJRDaQjK/BP4bC7Chtnlun1RXhutdyNNcvr0XuLaNg5RG8c5JbvM3T/PAJH1U1+x3KNnHIbDWXYY0vy+t0eLDUUFNtV6DF1h3O7Gyvpy2CwSXNps16f7AUzt7G6bmV11GNN1sF6jMng9O50sSR4MDx0h0fk6fHRCd8tSMwgvceYDghvGKoImXx2BvAHkBRs8Uhw9WDXqCarIxiuShTnAbXcfnKbTi1aJ7V7uvmWFjW82zVoN0rPIdPoAcoK0PMOY7mhFclu64w5yjBHIz+/KsHCtxW78J17WTYAzFhvPKLmmYlij5U/ThEYVjWRbW9FqHZLTADI/FzG1cVKRLe8VgXiIVH0mDziCoORjHKOP45IWY4AqOK1fhnas0y6ohXJcNdT/w16IH8IQiJwAjoUJcHqiaLkqyOoPQH/3bpyiJKvxW4Aj2QPa5JijKUVEWTNX2gqlJ3szu4/0TYFYxwhUjGwQiYi3hI6cmaOnhBQ2U2M5TEMBMDfE70YY136vvP5hBdch5uVp7U7ozQ3wnaizzXhq51vK78bX8rNbvlovaUp38oAkYg1fxzKA3OtqAcznS5EjVxcksGcttP0Mo9Seds/rL3Ql6b3Fuv2YuxePM25u3m22+eGA1ETO2FFcGWoI0guKnuSn5hdj7qgQg3JMS/NpOZFntkAdV6XC3T2uPqUspYu/S13fl8CJzn2h7fzgrbOMZAtLFM1Kp/abRFXfjWbX04i1Nlr9IDWTZH6AvFOEieS2K8m/YRmuzHY0Ueduq06n5jgh/ZL1Cn4H9r9w68s5h47/1S48dr8i+JHMei0cz4gs0n6VTnr8ncsppajFqhP2kPYWpNG7FikJDgJID7/a8eoBmq4pLlYARQEbGSRKAHWFl3nrWLuPxNM9PwbdNItt3kGeKV8ZkDj+SYVyinYAQ1TdH0oQgH77dcVtI54sdOijyD6bYz9dWgdFuh6iNWwOi+ZbAB978Bri/N93IHAAA=';
const dev = process.env.OWNER_NUMBER || '919356730236';

const autostatusAutoviewStatus = process.env.AUTOVIEW_STATUS || 'true';
const autostatusAutoLikeStatus = process.env.AUTOLIKE_STATUS || 'false';
const autostatusAutoReplyStatus = process.env.AUTOREPLY_STATUS || 'false';
const autostatusStatusReplyText = process.env.STATUS_REPLY_TEXT || '✅ Status Viewed By Keith Md';
const autostatusStatusLikeEmojis = process.env.STATUS_LIKE_EMOJIS || '💛,❤️,💜,🤍,💙';

const botPrefix = process.env.PREFIX || ".";
const botAuthor = process.env.AUTHOR || "𝚁𝙰𝙷𝚄𝙻-𝙰𝙸";
const botexpiration = process.env.BOT_EXPIRATION_DATE || "19/03/2027";
const botUrl = process.env.BOT_PIC || "https://files.catbox.moe/9zqj7g.jpg";
const botGurl = process.env.BOT_GURL || "https://github.com/rahulbotmaster1/𝚁𝙰𝙷𝚄𝙻-𝙰𝙸";
const botTimezone = process.env.BOT_TIMEZONE || "Africa/Nairobi";
const botBotname = process.env.BOTNAME || "𝚁𝙰𝙷𝚄𝙻-𝙰𝙸";
const botPackname = process.env.BOT_PACKNAME || "𝚁𝙰𝙷𝚄𝙻-𝙰𝙸";
const botMode = process.env.BOT_MODE || "public";
const botSessionName = process.env.BOT_SESSION_NAME || "keith-md";

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database = DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,
  dev,
  session, 
  autostatusAutoviewStatus,
  autostatusAutoLikeStatus,
  autostatusAutoReplyStatus,
  autostatusStatusReplyText,
  autostatusStatusLikeEmojis,
  botPrefix,
  botAuthor,
  botUrl,
  botGurl,
  botTimezone,
  botBotname,
  botexpiration,
  botPackname,
  botMode,
  botSessionName
};
