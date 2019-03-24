
const fs = require('fs')
const path = require('path')//eslint-disable-line
const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('fitness', 'root', 'gaolin', {
  host: 'localhost',
  dialect: 'mysql',
  multipleStatements: true,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

/* sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  }) */

module.exports = db
