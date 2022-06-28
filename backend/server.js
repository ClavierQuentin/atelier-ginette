const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

require('dotenv').config()

const PORT = process.env.PORT || 4000; 

app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../frontend/index.html')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"atelier_ginette"
  /*  host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    charset  : 'UTF8_UNICODE_CI',
    multipleStatements: true*/
})
db.connect((err)=>{
    if(err){
        throw err
    }
    console.log("Connecté à MySql");
})


app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/api/produit/', (req, res) => {
    let sql = `SELECT * FROM categories`
    db.query(sql, (err, result) => {
        if(err){
            throw err  
        }
        let article = result;
        res.send(article)
    })
});
app.get('/home/',(req, res)=>{
    let sql = `SELECT * FROM textes_accueil WHERE id_texte_accueil=(SELECT MAX(id_texte_accueil) FROM textes_accueil)`
    db.query(sql,(err, result)=>{
        if(err){
            throw err
        }
        res.status(200).send(result)
    })
})

app.get("/pages/about/", (req,res) => {
    let sql = `SELECT * FROM images_prez`;
    db.query(sql, (err, result) => {
        if(err){
            throw err  
        }
        let article = result;
        res.send(article)
    })
});

app.get("/pages/categories/:id", (req, res) => {
    let sql = `SELECT * FROM produits WHERE id_categorie = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err){
            throw err
        }
        console.log(req.params.id);
        res.send(result);
    })
});

app.get("/pages/produit/:id", (req,res) => {
    let sql = `SELECT * FROM produits WHERE id_produit = ${req.params.id}`
    db.query(sql, (err, result) => {
        if(err){
            throw err
        }
        res.send(result)
    })
});


app.post('/send', (req, res)=>{
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.mail,
            pass: process.env.pass
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    let mailOptions = {
        to:"clavier.quentin@gmail.com",
        from: req.body.email,
        subject: req.body.sujet,
        html: "<b>" + req.body.prenom + " " + req.body.nom + "</b>" + " " + '\"' + req.body.email + '\"' + " a écrit : " + "<br> " + "<h3>" + req.body.sujet + "</h3>" + "<br>" + "<p>" + req.body.body + "</p>" + "<br>Répondre à " + req.body.email, 
    };
    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            return console.log(err)
        }
        console.log("Message envoyé", info.messageId, info.response);
        //res.sendFile(path.resolve(__dirname, '../frontend/index.html'))
        res.status(200).redirect('http://localhost:4000/')
    })
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
