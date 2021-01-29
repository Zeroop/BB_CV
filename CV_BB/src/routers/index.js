const loginRouter =require('./login.router');
const aboutRouter =require('./about.router');
const homeRouter  =require('./home.router');
const logined     =require('./')
module.exports = function(app){
   app.route('/login').get(loginRouter);
   
  
} 