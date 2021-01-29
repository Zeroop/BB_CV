/* var mysql =require('mysql');
const config = require('../config/default.json');


const pool = mysql.createPool(config.mysql);
 */
const { Router } = require('express');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bb_cv"
});
con.connect(function(err) {
    if (err) throw err;
  });
  
function model(){

} ;
model.prototype = {
   /* load : function(sql){
      
        return new Promise(function(resolve,reject){
            pool.query(sql,function (err,result,fields){ 
                if(err){
                    return reject(err);
                }
                resolve(result);
        });
         })
    },
    /* load : function(sql,fun_done,fun_fail){
        pool.query(sql,function (err,result,fields){ 
            if(err){
                return fun_fail(err);
            }
          fun_done(result);
         })
    } */

    /*create: function(table,entity){
        return new Promise(function(resolve,reject){
            const sql =`insert into ${table} set?`
            pool.query(sql,entity,function (err,result){ 
                if(err){
                    return reject(err);
                }
                resolve(result);
        });
         })
    },*/
    register: function(entity,callback){
            

    },
    checkLogin: function(entity,callback){
        const sql=`select user_id from user_account where user_name= '${entity.username}' and user_password= '${entity.password}'` ;
        con.query(sql,function (err, result, fields) {
            if (err) throw err;
            //check exist data
            if(result.length >0){
                /* console.log(result[0]); = RowDataPacket { user_id: 1 }*/
                callback(result[0].user_id); 
          }else{
              callback(null); 
          }
         });
    }, 
    addNewUserAccount: function (entity,callback) {
            const sql=`insert into user_account(user_name,user_password,phone_numbers,email,permission,fullname_user) values('${entity.username}','${entity.password}','${entity.phonenumbers}','${entity.email}','0','${entity.fullname}')`
            con.query(sql,function(err,result){
                if(err) throw err;
               /*  console.log(result.insertId) */
               callback(result.insertID);
                console.log('add thanh cong')
            })
        
      },
    checkExist:  function (entity,callback) {
            const sql=`select user_id from user_account where user_name= '${entity.username}'` ;
            con.query(sql,function (err, result, fields) {
                if (err) throw err;
                //check exist data
                if(result.length ==0){
                    callback(entity); 
              }else{
                  callback(null); 
              }
             });/* 

            this.addNewUserAccount(entity) */
        },
    showListAccount: function(callback){
        const sql='select * from user_account';
        con.query(sql,function (err,result,fields) {
            if(err) throw err;
            callback(result)
          })
    },
    deleteUserAccount: function(user_id,callback){
        const sql=`delete from user_account where user_id=${user_id}`;
        con.query(sql,function(err,result,fields){
            if(err) throw err;
            callback(result);
        })
    }, 
    addNewCvRTemplate: function (entity,callback) {
        const sql=`insert into user_account(user_name,user_password,phone_numbers,email,permission,fullname_user) values('${entity.username}','${entity.password}','${entity.phonenumbers}','${entity.email}','0','${entity.fullname}')`

        const sql=`insert into cv_template(location,tag_name)`
      }
};
module.exports =  model;