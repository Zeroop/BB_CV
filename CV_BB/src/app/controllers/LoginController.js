
class LoginController {
    index(req,res){
        res.render('login',{title:"Login"});
    }
    login(req,res,queryData){
         
    }
}

module.exports = new LoginController;