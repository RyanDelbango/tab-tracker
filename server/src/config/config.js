require('dotenv').load()

module.exports = {
  port: 8081,
  db: {
    database: process.env.MYSQL_DB,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,

    insecureAuth: true,
    options: {
      dialect: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3307
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
