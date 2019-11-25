exports.getfoods_fact = function(req,res){
    if(req.method == "GET"){

        var sql = "SELECT * FROM foods_fact_full order by index desc limit 2;"
        
        pool.query(sql , (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results.rows[0].index)
          })
    }
}

exports.searchfood = function(req,res){
    if(req.method == "GET"){
        var name = req.query.name
        var sql = "select code, index, product_name from foods_fact_full where product_name ilike '%"+name+"%';"
        
        pool.query(sql , (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results.rows)
          })
    }
}

exports.detailfood = function(req,res){
    if(req.method == "GET"){
        var id = req.query.id
        var sql = "select * from foods_fact_full where index = "+id+";"
        
        pool.query(sql , (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results.rows)
          })
    }
}