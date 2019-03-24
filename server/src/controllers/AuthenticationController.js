
const { Users } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await Users.create(req.body)
      res.send(user.toJSON())
      res.redirect('/')
    } catch (err) {
      res.status(400).send({
        error: 'This email is alredy in use.'
      })
    }
  },
  async login (req, res) {
    try {
      console.log(req.body)
      const { email, password } = req.body
      const user = await Users.findOne({
        where: {
          email: email
        }
      })
      const isPasswordValid = password === user.password
      if (!user || !isPasswordValid) {
        return res.status(403).send({
          error: 'Invalid login information.'
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  },
  async search (req, res) {
    try {
      console.log(req.body)
      const email = req.body
      const user = await Users.findOne({
        where: {
          email: email.email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'This user does not exits.'
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson.email
      })
    } catch (err) {
      res.status(400).send({
        error: 'Something is wrong.'
      })
    }
  },
  delete () {
  }
}
