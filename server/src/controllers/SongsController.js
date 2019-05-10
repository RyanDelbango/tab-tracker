const { Song } = require('../models')

module.exports = {

  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 100
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred in trying to fetch songs.'
      })
    }
  },

  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred in trying to fetch songs.'
      })
    }
  },

  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred in trying to create song.'
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
        error: 'an error has occured trying to update the song'
      })
    }
  }
}
