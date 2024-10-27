require('dotenv').config()
const { Sequelize } = require('sequelize')

const sequelizeInstance = new Sequelize(process.env.DB_URI, {
    dialect: 'postgres',
    logging: true
})

sequelizeInstance.sync({ alter: true })

module.exports = sequelizeInstance;