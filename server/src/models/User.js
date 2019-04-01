const bcrypt = require('bcrypt')
const SALT_ROUNDS = 8

function hashPassword (user, options) {
  if (!user.changed('password')) {
    return
  }

  const hash = bcrypt.hashSync(user.password, SALT_ROUNDS)
  user.setDataValue('password', hash)
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeSave: hashPassword
    }
  }

  )

  User.prototype.comparePassword = function (password) {
    console.log(password, this.password)
    const x = bcrypt.compareSync(password, this.password)
    return x
  }

  return User
}
