var express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
/* const route = require('./routers'); */
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
var bcrypt = require('bcryptjs');
var app = express();
var model = require('./app/ultis/db');
const db = new model()
//template engien
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(express.urlencoded({
    extended: true
}));
//static file
app.use(express.static(path.join(__dirname, 'public')));
//body parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());
/* 
const redis = require('redis')
const redisclient = redis.createClient(); */
var session = require('express-session');
//require cookie parser
var cookieParser = require('cookie-parser')
app.use(cookieParser())
/* let RedisStore = require('connect-redis')(session);
 */app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 7000 },
    /* cookie: { secure: true } */ // duong truyen phai la https
/*     store: new RedisStore({host: 'localhost',port:3000,client:redisclient,ttl:86460})
 */}))
/* redisclient.on("error", function(error) {
    console.error(error);
  });
   
  redisclient.set("key", "value", redis.print);
  redisclient.get("key", redis.print);

//session */
/*
const router = require('./routers/login.router');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 60000
    }
}))
app.get('/login',function (req,res) {
    res.render('login');
})
app.post('/login',function(req,res){
    console.log(req.body);
})
app.post('/cv', async function(req,res){
    const entity ={
        location: req.location,
        tag_name:req.tag_name,
        skill: req.skill,
        product: req.product,
        experience: {
            old_company: req.old_company,
            join_date: req.join_date,
            out_date: req.out_date	
        },
        numbersOfLike: 0,
        
    }
})
const categoryRouter =require('./routers/category.router');
app.use('/admin',categoryRouter); */
/* app.get('/', function (req, res, next) {
    if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + req.session.views + '</p>')
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        req.session.views = 1
        res.end('welcome to the session demo. refresh!')
    }
}) */


/* route(app); */
//db
/* var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bb_cv_project'
})


connection.connect(function (err) {
    if (err) throw err;
  
});
 */

//
/* app.get('/login', (req, res) => {
    res.render('login');
}) */

/* app.post('/register', (req, res, next) => {
    const password_hash= bcrypt.hashSync(req.body.password, 8);
    const entity ={
        username = req.body.username,
        password_hash,
        email = req.body.email,
        phonenumbers = req.body.phonenumbers,
        permission =0
    } */

/* connection.connect(function (err) {
    if (err) throw err;
    var sql = "SELECT * FROM user_account";
    connection.query(sql, function (err, results) {
        if (err) throw err;
        console.log(results);,
    })
}); */

/*  var sql = `SELECT * FROM user_account WHERE user_name ='${username}'`;
 let queryUsername = connection.query(sql);
 let queryEmail = connection.query((`SELECT * FROM user_account WHERE email ="${email}"`), function (err) {
     if (err) throw err;
 });
 if (!queryEmail) {
     res.json = 'Ton tai tai khoan';
     console.log('tontaitaikhoan');
 } else {
     // insert into
     //tra ve id tai khoan vua dang ki de tao token
     connection.query((`INSERT into user_account(user_password,phone_numbers,email,user_name,role_name) values('${password}','${phonenumbers}','${email}','${username}','member')`), function (err) {
         if (err) throw err;
     });
     console.log('dang ki thanh cong')
 }
}) */
/* app.post('/login',(req,res,next)=>{
    let username = req.body.username;
    let password =req.body.password;
    let sql=`SELECT * FROM user_account WHERE user_name =${username} and password=${password}`;
    let query = connection.query(sql);
    let user_id =connection.query(`select user_id from user_account where user_name=${username} and password=${password}`);
    if(query){
        let token = jwt.sign({user_id: user_id},'mk');
        return res.json({
            message : 'succes',
            token: token,
        })
    }
})
app.get('/home/:token',(req,res,next)=>{
    try {
        let token = req.cookies.token;
        let result = jwt.verify(token,'mk');
        if(result)
            next();
    } catch (error) {
        res.redirect('login');
    }
},(req,res,next)=>{
        res.render('home');
})

app.get('/cv',(req,res,next)=>{
    try {
        let token = req.cookies.token;
        let result = jwt.verify(token,'mk');
        let sql=`select user_id from user_account where user_id="${result}"`;
        if(connection.query(sql)){
            next();
        }else{
        }
            
    } catch (error) {

    }
},(req,res,next)=>{

});
app.get('/logout',(req,res,next)=>{
    req.session.destroy();
    res.end();
}) */

/* const pm =db.load('select * from user_account ',function (rows) {
    for(const index of rows){
        console.log(`${index.user_name}=> ${index.user_password}`);
    }
},function (err) {
    console.log(err);
}); */


/* const pm =db.load('select * from user_account limit 2 ');
pm.then(function(rows){
    console.log(rows);
}).catch(function(err){
        console.log(err);
        throw err;
    }); */


// -------------------------------------------------------------------------//
/* const { Sequelize, DataTypes } = require('sequelize');
const  sequelize = new Sequelize('bb_cv', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
 
  sequelize.sync({ force: true, match: /bb_cv/ });

  sequelize.authenticate().then(() => {
    console.log('Connection established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
  const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    tableName: 'Employeess'
  });
  
  // `sequelize.define` also returns the model
  console.log(User === sequelize.models.User);  */
app.get('/', function (req, res, next) {
    if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + req.session.views + '</p>')
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        req.session.views = 1
        res.end('welcome to the session demo. refresh!')
    }
})
app.get('/register', function (req, res) {
    res.render('register');
})
app.post('/register', function (req, res) {
    const entity = {
        username: req.body.username,
        fullname: req.body.fullname,
        email: req.body.email,
        phonenumbers: req.body.phonenumbers,
        permission: 0,
        password: req.body.password
    }
    /*  db.register(entity,function(result){
       
     }) */
    db.checkExist(entity, (result) => {
        if (result) {
            db.addNewUserAccount(entity, (user_id) => {
                let token = jwt.sign({ user_id: user_id }, 'mk');
                console.log(token)
                return res.json({
                    message: 'successfuly',
                    token: token
                })
            });
        } else {
            res.json('Error')
        }
    });
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', function (req, res) {
    const entity = {
        username: req.body.username,
        fullname: req.body.fullname,
        email: req.body.email,
        phonenumbers: req.body.phonenumbers,
        permission: 0,
        password: req.body.password
    }
    db.checkLogin(entity, function (user_id) {
        if (user_id) {
            let token = jwt.sign({ user_id: user_id }, 'mk');
            console.log(token)
            res.setHeader('Token', `${token}`);
            res.cookie('adminID', `${user_id}`, { domain: '.localhost', path: '/login', secure: false })

            return res.json({
                message: 'successfuly',
                token: token
            })

        }
    })
})
app.get('/admin/listaccounts', function (req, res) {
    /* Set-Cookie: sessionId=38afes7a8 */
})
app.post('/admin/listaccounts', function (req, res) {
    db.showListAccount(function (result) {
        if (result) {
            res.status(200).json({
                listAccount: result,
            })
        }
    })
})
app.delete('/admin/listaccounts/:userID', function (req, res) {
    let user_id = req.params.userID;
    db.deleteUserAccount(user_id, (result) => {
                    /* resylt =OkPacket {
            fieldCount: 0,
            affectedRows: 0,
            insertId: 0,
            serverStatus: 2,
            warningCount: 0,
            message: '',
            protocol41: true,
            changedRows: 0
            } */
        console.log(result.affectedRows)
        if (result.affectedRows === 1) {
            res.json('successfully');
        } else {
            res.json('Not exist user ')
        }
    })
})
app.post('/test', function (req, res) {
    res.cookie('name', 'tobi', { domain: '.localhost', path: '/test', secure: false })
    res.end();
})
/* 
function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
  }
  
  doHomework('math', function() {
    console.log('Finished my homework');
  }); */
app.get('/logout', (req, res, next) => {
    var a = 3;
    req.session.destroy();
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Name', `${a}`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
})
app.listen('3000', () => {
    console.log('3000');
});