const dotenv = require('dotenv').config()
const Knex = require('knex')
const { existsSync } = require('fs')

module.exports = {
  client: 'mysql2',
  connection: {
    host:     process.env.DB_HOST,
    port:     process.env.DB_PORT || 3306,
    database: process.env.DB_NAME,
    user:     process.env.DB_USER,
    password: process.env.DB_PASS
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './src/migrations'
  }
}
