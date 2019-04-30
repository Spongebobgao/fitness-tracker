module.exports = (sequelize, DataTypes) => {
  const Youtube = sequelize.define('Youtube', {
    userId: {
      type: DataTypes.INTEGER,
      promaryKey: true,
      alowNull: false
    },
    youtubeId: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    youtubeName: {
      type: DataTypes.STRING,
      defaultValue: null
    }
  })
  return Youtube
}
