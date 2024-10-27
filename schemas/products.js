const sequelize = require ('../libs/sequelize')
const { DataTypes } = require('sequelize')

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productPrice: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    productCategory: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productImage: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Product;