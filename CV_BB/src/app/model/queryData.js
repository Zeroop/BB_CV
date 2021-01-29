class dataQuery {
    getAccount (con,callback){
        con.query("SELECT * FROM user_account",callback);
    };
    getByUserName(con,username,callback){
        con.query(`SELECT * FROM user_account Where user_name = ${username}`,callback);
    };
    getByTagName(con,tagname,callback){
        con.query(`SELECT * FROM user_account Where tagname=${tagname}`,callback);
    };
    getByLocation(con,location,callback){
        con.query(`SELECT *FROM location where location=${location}`,callback);
    };
    getCV(con,cv_id,callback){
        con.query(``)
    }
}

module.exports = new dataQuery;