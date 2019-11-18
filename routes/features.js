exports.getfoods_fact = function(req,res){
    if(req.method == "GET"){

        var sql = "SELECT * FROM foods_fact_full order by index desc;"
        
        pool.query(sql , (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results.rows)
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
        var sql = "select * from foods_fact where index = "+id+";"
        
        pool.query(sql , (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results.rows)
          })
    }
}

exports.getfoods_fact_dev = function(req,res){
    if(req.method == "GET"){

        var sql = "SELECT * FROM foods_fact order by index desc limit 2;"
        
        pool.query(sql , (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results.rows)
          })
    }
}

exports.driverlist = function(req,res){
    if(req.method == "GET"){
        var filter = req.query.filter

        var sql = "SELECT * FROM driver"
        if(filter != null){
            sql = "SELECT * FROM driver where statusdriver ='"+filter+"'"
        }
        
        pool.query(sql , (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results.rows)
          })
    }
}

exports.getwaitinglist_order = function(req,res){
    if(req.method == "GET"){
        var sql = "select a.id,a.orderfrom,a.orderto,a.orderdate,a.gotime,a.backtime,a.notes,a.statusorder,b.nama,b.nohp from orders a, users b where a.nip = b.nip and a.statusorder = 'waiting';"
        pool.query(sql, (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results.rows)
          })
    }
}

exports.gethistoryorder = function(req,res){
    if(req.method == "GET"){
        var sql = "select a.id,a.orderfrom,a.orderto,a.orderdate,a.gotime,a.backtime,a.notes,a.statusorder,b.nama,b.nohp from orders a, users b where a.nip = b.nip and a.statusorder = 'done';"
        pool.query(sql, (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results.rows)
          })
    }
}