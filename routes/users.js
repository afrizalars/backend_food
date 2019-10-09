exports.insertneworder = function (req, res) {
    if (req.method == "GET") {
        var reqjson = req.body.data

        const jsondata = JSON.parse(reqjson);
        const json = jsondata.FormOrderModel
        var batch = '1'

        for (key in json) {
            // insertdata(key.)
            // console.log()
            insertdata(json[key].destinationFrom,
                json[key].destinationTo,
                json[key].destinationGoTime,
                json[key].destinationBackTime,
                json[key].destinationNotes,
                json[key].Nip,
                json[key].Latitude,json[key].Longitude,json[key].batch)
        }
        res.send({
            result: "sukses insert"
        })
    }
}

function insertdata (orderFrom,OrderTo,GoTime,BackTime,Notes,nip,lat,long,batch) {
    var sql = "INSERT INTO Trips (OrderFrom,OrderTo,OrderDate,GoTime,BackTime,Notes,NIP,StatusOrder,latitude,longitude,batch) " +
        "VALUES ('" + orderFrom + "','" + OrderTo + "',NOW(),'" + GoTime + "','" + BackTime + "','" + Notes + "','" + nip + "','pending','" + lat + "','" + long + "','" + batch + "');"
    pool.query(sql, (error, results) => {
        if (error) {
            throw error
        }
        console.log("sukses insert")
    })
}


