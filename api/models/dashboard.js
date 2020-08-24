const sequelize = require("./sequelize");
const { DataTypes, Sequelize } = require('sequelize');
const { dashboard } = require(".");


const Dashboard = sequelize.define('dashboard', {
    // Model attributes are defined here
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
});

// `sequelize.define` also returns the model



module.exports = Dashboard;

