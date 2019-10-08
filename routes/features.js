exports.driverlist = function(req,res){
    if(req.method == "GET"){
        pool.query('SELECT * FROM driver', (error, results) => {
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