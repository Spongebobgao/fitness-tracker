const { Youtube } = require('../models')

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
  }
}
