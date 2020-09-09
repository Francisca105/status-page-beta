require('dotenv').config()

const { Sequelize } = require("sequelize")

module.exports = new Sequelize(/*process.env.TABELA, process.env.USER, process.env.PASS, {*/ 's66_status', 'u66_Z9gYfTYsqN', 'by5L^+YlH@fAH!PEaoRPi1Gl', {
    host: '51.81.121.137', //process.env.IP,
    dialect: 'mysql'
})