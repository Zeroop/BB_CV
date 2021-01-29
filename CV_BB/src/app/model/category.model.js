const db = require("../ultis/db");

module.exports={
    all: function(){
        return  db.load('select * from user_account')
    },
    
}