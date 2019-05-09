const { Youtube, sequelize } = require('../models')

module.exports = {
  async getVideos (req, res) {
    try {
      const youtube = await Youtube.findAll({
        where: {
          userId: req.params.id
        }
      })
      res.send(youtube)
    } catch (err) {
      console.log(err.message)
      res.status(500).send({
        error: 'An error occured trying to fetch the data'
      })
    }
  },
  async addVideo (req, res) {
    console.log(req.body)
    try {
      const video = await Youtube.create(req.body)
      res.send(video)
    } catch (err) {
      console.log(err.message)
      res.status(500).send({
        error: 'An error has occured trying to add youtube videos.'
      })
    }
  },
  async deleteVideo (req, res) {
    try {
      await sequelize.query(`delete
      from Youtubes where id=?`, { replacements: [req.body.id], type: sequelize.QueryTypes.DELETE }, { model: Youtube })
      res.send('Deleted.')
    } catch (err) {
      console.log(err.message)
      res.status(500).send({
        error: 'An error has occured trying to delete this video.'
      })
    }
  }
}
