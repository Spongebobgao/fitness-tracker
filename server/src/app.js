const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync({ force: false })
  .then(() => {
    app.listen(config.port)
    console.log(`server started on port ${config.port}`)
  })

/* app.get('/Users', (req, res) => {
  sequelize.query(`SELECT * FROM Users`).then((err, rows, fields) => {
    if (!err) {
      res.send(rows)
    } else {
      console.log(err)
    }
  })
})

app.get('/Users/:id', (req, res) => {
  sequelize.query('SELECT * FROM Users WHERE id = ?',
    { replacements: [req.params.id], type: sequelize.QueryTypes.SELECT }
  ).then(user => {
    console.log(user)
  })
})
app.get('/search', (req, res) => {
  sequelize.query('SELECT * FROM Users WHERE email = ?',
    { replacements: [req.params.email], type: sequelize.QueryTypes.SELECT }
  ).then(user => {
    console.log(user)
  })
})
app.get('/posts', (req, res) => {
  sequelize.query(`SELECT * FROM Posts`).then((err, rows, fields) => {
    if (!err) {
      res.send(rows)
    } else {
      console.log(err)
    }
  })
})
app.post('/create/:id', (req, res) => {
  sequelize.query('INSERT INTO `Profiles` SET userId = :id ',
    { replacements: [req.params.id], type: sequelize.QueryTypes.SELECT })
    .then((err, rows, fields) => {
      if (!err) {
        res.send(rows)
      } else {
        console.log(err)
      }
    })
})
app.get('/profile/:id', (req, res) => {
  sequelize.query(`SELECT * FROM Users where id=?`,
    { replacements: [req.params.id], type: sequelize.QueryTypes.SELECT })
    .then((err, rows, fields) => {
      if (!err) {
        res.send(rows)
      } else {
        console.log(err)
      }
    })
})
app.put('/profile/:id/edit', (req, res) => {
  sequelize.query(`UPDATE Profiles where userId=?`,
    { replacements: [req.params.id], type: sequelize.QueryTypes.SELECT })
    .then((err, rows, fields) => {
      if (!err) {
        res.send(rows)
      } else {
        console.log(err)
      }
    })
})

/* app.delete('/Users/:id', (req, res) => {
  sequelize.query('DELETE FROM Users WHERE id = ?',
    { replacements: [req.params.id], type: sequelize.QueryTypes.DELETE }
  ).then(user => {
    console.log(user)
  })
})

app.post('/Users/:id', (req, res) => {
  sequelize.query('UPDATE Users SET password = 123456789 WHERE id = ?',
    { replacements: [req.params.id], type: sequelize.QueryTypes.UPDATE }
  ).then((results, metadata) => {
    console.log(results)
  })
}) */
