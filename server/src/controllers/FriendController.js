const { Friend, Profile, sequelize } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = {
  async getAll (req, res) {
    try {
      const friend = await Friend.findAll({
        attributes: ['friendId'],
        where: {
          userId: req.params.id
        }
      })
      let id = friend.map(person => person.friendId)
      id.forEach(idd => console.log(idd))
      const profile = await Profile.findAll({
        attributes: ['userId', 'firstName', 'lastName'],
        where: {
          userId: {
            [Op.in]: id
          }
        }
      })
      console.log('??????????????????????')
      res.send(profile)
    } catch (err) {
      console.log(err.message)
      res.status(500).send({
        error: 'An error occured trying to fetch the data'
      })
    }
  },
  async create (req, res) {
    try {
      const friend = await Friend.create(req.body)
      res.send(friend)
    } catch (err) {
      console.log(err.message)
      res.status(500).send({
        error: 'An error has occured trying to create the profile'
      })
    }
  },
  async delete (req, res) {
    try {
      await sequelize.query(`delete
      from Friends where (userId=? and friendId=?)`, { replacements: [req.body.userId, req.body.friendId], type: sequelize.QueryTypes.DELETE }, { model: Friend })
      await sequelize.query(`delete
      from Friends where (userId=? and friendId=?)`, { replacements: [req.body.friendId, req.body.userId], type: sequelize.QueryTypes.DELETE }, { model: Friend })
      res.send('Deleted.')
    } catch (err) {
      console.log(err.message)
      res.status(500).send({
        error: 'An error has occured trying to delete your friend.'
      })
    }
  }
}
