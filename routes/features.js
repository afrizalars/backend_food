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

exports.monthlyfood = function (req, res) {
    if (req.method == "GET") {
        var id = req.query.id;
        var sql = "SELECT sum(energy_100g) as t_energy,sum(fat_100g) as t_fat,sum(carbohydrates_100g) as t_carbo, " +
            "sum(proteins_100g) as t_protein " +
            "FROM food_history LEFT JOIN foods_fact_full ON food_history.foodid = foods_fact_full.index::text " +
            "WHERE food_history.userid ='" + id + "' " +
            "AND food_history.tanggal > current_timestamp - interval '30 day';"

        var sqlcal = "SELECT avg(energy_100g)/4.184 as avg_cal " +
            "FROM food_history LEFT JOIN foods_fact_full ON food_history.foodid = foods_fact_full.index::text " +
            "WHERE food_history.userid ='" + id + "' " +
            "AND food_history.tanggal > current_timestamp - interval '30 day' ";

        pool.query(sql, (error, results) => {
            if (error) {
                res.send({
                    status: 400,
                    success: false,
                    data: null
                });
            }
            pool.query(sqlcal, (err, reslts) => {
                if (err) {
                    res.send({
                        status: 400,
                        success: false,
                        data: null
                    });
                } else {
                    if(results.rows.length == 0 || reslts.rows.length == 0){
                        res.status(200).json({
                            status: 200,
                            success: true,
                            data: []
                        });
                    } else{
                        res.status(200).json({
                            status: 200,
                            success: true,
                            data: {
                                monthly: {
                                    t_energy: results.rows[0].t_energy,
                                    t_fat: results.rows[0].t_fat,
                                    t_carbo : results.rows[0].t_carbo,
                                    t_protein : results.rows[0].t_protein  
                                },
                                avgcalperday: reslts.rows[0].avg_cal
                            }
                        });
                    }
                }
            })
        });
    }
};