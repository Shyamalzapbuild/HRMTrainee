const Sequelize=require('sequelize');

const sequelize=new Sequelize('hrm','newuser1','1234',{
    dialect:'mysql',
    host:'localhost'
});
module.exports=sequelize;