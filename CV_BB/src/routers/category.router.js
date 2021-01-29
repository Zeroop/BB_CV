const express =require('express');
const router=express.Router();

const contegoryModel = require('../app/model/category.model')
//example about middleware |
/* router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  }) */
router.get('/create_cv', async function(req,res){
    const list = await contegoryModel.all;
    res.render('vwCategories/create_cv',{
        catagories: list,
        empty:list.length ===0
    });
})
router.get('/profileuser',function(req,res){
    res.render('vwCategories/profile_user');
})
router.get('/show_account',function(req,res){
    res.render('vwCategories/show_account');
})
module.exports =router;