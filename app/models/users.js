const Sequalize = require('sequelize')
const db = require('../util/database')

const User = db.define('users', {
    id:{
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequalize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequalize.STRING,
        allowNull: false,
    },
    password:{
        type: Sequalize.STRING,
        allowNull: false
    }
})

module.exports = User