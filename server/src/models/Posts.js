
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Posts', {
    userId: {
      type: DataTypes.INTEGER,
      alowNull: false
    },
    postRecord: {
      type: DataTypes.TEXT,
      defaultValue: null
    }
  })
  return Post
}
