const { Users, sequelize, Profile } = require('../models')

const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
  async showAll (req, res) {
    try {
      let profiles = null
      const search = req.query.search
      if (search) {
        profiles = await Profile.findAll({
          attributes: ['userId', 'firstName', 'lastName'],
          where: {
            [Op.or]: [
              'firstName'
            ].map(key => ({
              [key]: {
                [Op.like]: `${search}%`
              }
            }))
          }
        })
      } else {
        profiles = await Profile.findAll({
          limit: 0
        })
      }
      res.send(profiles)
    } catch (err) {
      console.log(err.message)
      res.status(500).send({
        error: 'An error occured tring to fetch the data'
      })
    }
  },
  async getUserName (req, res) {
    try {
      const profile = await Profile.findAll({
        attributes: ['userId', 'firstName', 'lastName']
      })
      res.send(profile)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured trying to fetch the profile'
      })
    }
  },
  async getProfile (req, res) {
    try {
      console.log(req.params)
      const profile = await sequelize.query(`select *
      from Profiles where UserId=?`, { replacements: [req.params.id], type: sequelize.QueryTypes.SELECT }, { model: Profile })
      res.send(profile[0])
    } catch (err) {
      res.status(500).send({
        error: 'An error occured trying to fetch the profile'
      })
    }
  },
  async create (req, res) {
    try {
      const profile = await Profile.create(req.body)
      res.send(profile)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the profile'
      })
    }
  },
  async post (req, res) {
    try {
      const user = await Users.create(req.body)
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update the profile'
      })
    }
  },
  async put (req, res) {
    try {
      await Profile.update(req.body, {
        where: {
          userId: req.body.userId
        }
      })
      res.send('Update successfully!')
    } catch (err) {
      console.log(err.message)
      res.status(500).send({
        error: 'An error has occured trying to update your profile.'
      })
    }
  },
  async search (req, res) {
    try {
      let profile = req.body
      let firstName = profile.firstName
      if (firstName) {
        profile = await Profile.findAll({
          attributes: ['firstName', 'lastName'],
          where: {
            [Op.or]: [
              'firstName'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${firstName}%`
              }
            }))
          }
        })
        res.send(profile)
      } else {
        res.send('USER NOT FOUND.')
      }
    } catch (err) {
      console.log(err.message)
      res.status(500).send({
        error: 'Please make sure the name is correct.'
      })
    }
  }
}
