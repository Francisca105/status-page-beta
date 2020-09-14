require('dotenv').config()

const { Sequelize } = require("sequelize")

module.exports = new Sequelize(process.env.TABELA, process.env.USER, process.env.PASS,{
    host: process.env.IP,
    dialect: 'mysql'
})
