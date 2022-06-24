const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');

const app = express();

require('dotenv').config()

const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: 'zlsorffc7qeih1l3',
    charset  : 'UTF8_UNICODE_CI',
    multipleStatements: true
})
db.connect((err)=>{
    if(err){
        throw err
    }
    console.log("Connecté à MySql");
})

const PORT = process.env.PORT || 4000; 

app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../frontend/index.html')));

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


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
