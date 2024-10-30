const sequelize = require('../libs/sequelize')
const { DataTypes } = require('sequelize')

const Document = sequelize.define('document', {
    number: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    }
}, {
    timestamps: false
})

module.exports = Document;