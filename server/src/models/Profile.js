
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      alowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    birthday: {
      type: DataTypes.DATE,
      defaultValue: null
    }
  })
  Profile.removeAttribute('id')
  return Profile
}
