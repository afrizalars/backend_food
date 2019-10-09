exports.insertDriver = function(req,res){
    if(req.method == "GET"){
        var namaDriver = req.body.namaDriver
        var foto = req.body.foto
        var nohp = req.body.nohp
        var PlatNo = req.body.PlatNo
        var JenisMobil = req.body.JenisMobil

        var sql = "INSERT INTO Driver (nama,foto,noHp,PlatNo,JenisMobil,StatusDriver) "+
        "VALUES ('"+namaDriver+"','"+foto+"','"+nohp+"','"+PlatNo+"','"+JenisMobil+"','unavailable');"
        
        pool.query(sql, (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json({
                results: "OK"
            })
          })
    }
}

exports.getorder = function(req,res){
    if(req.method == "GET"){

        var sql = "select a.id,a.orderfrom,a.orderto,a.orderdate,a.gotime,a.backtime,a.notes,a.statusorder,b.nama,b.nohp from trips a left join users b on a.nip = b.nip and a.statusorder = 'pending'"
        
        pool.query(sql, (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json({
                results: results.rows
            })
          })
    }
}


exports.updateStatusDriver = function(req,res){
    if(req.method == "GET"){
        var id = req.body.id_driver
        var status = req.body.status

        var sql = "update driver set statusdriver = '"+status+"' where id = '"+id+"';"
        
        pool.query(sql, (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json({
                results: "OK"
            })
          })
    }
}

exports.cancelOrder = function(req,res){
    if(req.method == "GET"){
        var id = req.body.id_driver

        var sql = "update orders set statusorder = 'canceled' where id = '"+id+"';"
        
        pool.query(sql, (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json({
                results: "OK"
            })
          })
    }
}

exports.approveOrder = function(req,res){
    if(req.method == "POST"){
        var id = req.body.id
        var status = req.body.status

        var sql = "update trips set statusorder = '"+status+"' where id = '"+id+"';"
        
        pool.query(sql, (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json({
                results: "OK"
            })
          })
    }
}


exports.getlivetracking = function(req,res){
    if(req.method == "GET"){
        var sql = "select a.id,a.orderfrom,a.orderto,a.orderdate,a.gotime,a.backtime,a.notes,a.statusorder,b.nama,b.nohp from orders a, users b where a.nip = b.nip and a.statusorder = 'going';"
        pool.query(sql, (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results.rows)
          })
    }
}

