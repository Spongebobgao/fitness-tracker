
const bcrypt = require('bcrypt')

function hashPassword (user, options) { // eslint-disable-line
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }
  user.setDataValue('password', bcrypt.hashSync(user.password, SALT_FACTOR))
}
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = user.password && user.password !== '' ? bcrypt.hashSync(user.password, 8) : ''
      }
    }
  })
  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password)
  }
  return User
}
