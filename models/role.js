const Sequelize=require('sequelize');

const sequelize=require('../utils/database');

const role=sequelize.define('role',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:true
    }
});

module.exports=role;