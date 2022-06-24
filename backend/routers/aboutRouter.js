
exports.aboutRouter = {
    URI: '/api/produit/', 
    action: (req, res) => {
        let sql = `SELECT * FROM categories`
        db.query(sql, (err, result) => {
            if(err){
                throw err  
            }
            let article = result;
            res.send(article)
        })
        console.log('test');
    }
}

