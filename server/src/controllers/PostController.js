const { Posts, sequelize } = require('../models')

module.exports = {
  async getPost (req, res) {
    try {
      const post = await Posts.findAll({
        attributes: ['id', 'postRecord', 'userId', 'updatedAt'],
        where: {
          userId: req.params.id
        },
        order: [ ['updatedAt', 'DESC'] ]
      })
      res.send(post)
    } catch (err) {
      console.log(err.message)
      res.status(500).send({
        error: 'An error occured trying to fetch your posts'
      })
    }
  },
  async create (req, res) {
    try {
      console.log(req.body)
      const post = await Posts.create(req.body)
      res.send(post)
    } catch (err) {
      console.log(err.message)
      res.status(500).send({
        error: 'An error has occured trying to create your post.'
      })
    }
  },
  async delete (req, res) {
    console.log(req.body.id)
    try {
      await sequelize.query(`delete
      from Posts where id=?`, { replacements: [req.body.id], type: sequelize.QueryTypes.DELETE }, { model: Posts })
      res.send('Deleted.')
    } catch (err) {
      console.log(err.message)
      res.status(500).send({
        error: 'An error has occured trying to delete your record.'
      })
    }
  }
}

/* const { Post } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = {
  async index (req, res) {
    try {
      let posts = null
      const search = req.query.search
      if (search) {
        songs = await Song.findAll({
          where: {
            [Op.or]: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured tring to fetch the songs'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured tring to fetch the songs'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the song'
      })
    }
  },
  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update the song'
      })
    }
  }
}
*/
