
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    userId: {
      type: DataTypes.INTEGER,
      promaryKey: true,
      alowNull: false
    },
    friendId: {
      type: DataTypes.INTEGER,
      defaultValue: null
    }
  })
  Friend.removeAttribute('id')
  return Friend
}
