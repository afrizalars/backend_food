exports.insertneworder = function(req,res){
    if(req.method == "GET"){
        var orderFrom = req.body.orderFrom
        var OrderTo = req.body.OrderTo
        var GoTime = req.body.GoTime
        var BackTime = req.body.BackTime
        var Notes = req.body.Notes
        var nip = req.body.nip
        var lat = req.body.lat
        var long = req.body.long

        var batch = 2

        var sql = "INSERT INTO Orders (OrderFrom,OrderTo,OrderDate,GoTime,BackTime,Notes,NIP,StatusOrder,latitude,longitude,batch) "+
        "VALUES ('"+orderFrom+"','"+OrderTo+"',NOW(),'"+GoTime+"','"+BackTime+"','"+Notes+"','"+nip+"','pending','"+lat+"','"+long+"','"+batch+"');"
        pool.query(sql, (error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json({
                results : "Ok"
            })
          })
    }
}


