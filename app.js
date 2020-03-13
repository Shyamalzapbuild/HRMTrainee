const sequelize=require('./utils/database');

const express=require('express');
const app=express();

const performance =require('./models/performance');
const test=require('./models/test');
const leave=require('./models/leave');
const role=require('./models/role');
const Auth=require('./models/Auth');
const category=require('./models/category');
const sub_category=require('./models/sub_category');

performance.belongsTo(test, { constraints: true, onDelete: 'CASCADE' });
Auth.belongsTo(role);


sequelize
.sync({force:true})
.then()
.catch(err=>{
    console.log(err);
});