// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

const Category = require('./Category');

/*
Product
    id
        Integer
        Doesn't allow null values
        Set as primary key
        Uses auto increment
    product_name
        String
        Doesn't allow null values
    price
        Decimal
        Doesn't allow null values
        Validates that the value is a decimal
    stock
        Integer
        Doesn't allow null values
        Set a default value of 10
        Validates that the value is numeric
    category_id
        Integer
        References the category model's id
*/

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            // Validate that it's a decimal
            isDecimal: true
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
            // Validate that it's a decimal
            isNumeric: true
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id'
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
});

module.exports = Product;