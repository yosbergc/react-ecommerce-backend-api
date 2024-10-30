const sequelize = require('../libs/sequelize')
const { DataTypes } = require('sequelize')
const Document = require('../schemas/document')
const Post = require('../schemas/posts')

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

User.hasOne(Document)
Document.belongsTo(User)
User.hasMany(Post)
Post.belongsTo(User)

module.exports = User;