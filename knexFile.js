require('dotenv').config()
module.exports = {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: process.env.PASSWORD,
      database: 'IPL'
    }
  };