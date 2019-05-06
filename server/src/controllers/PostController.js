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
