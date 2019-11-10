const Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
const config = 'supersecret'

exports.signup = function (req, res) {
    if (req.method == "POST") {
        var post = req.body;
        var nip = post.nip;
        var nama = post.nama
        var nohp = post.nohp
        var namaAtasan = post.namaAtasan
        var noAtasan = post.noAtasan
        var encryp = cryptr.encrypt(req.body.password);
        var type = post.type
        var role = 'waiting'

        var sql = ""

        if (type == "user"){
            sql = "INSERT INTO users (nama,noHp,NIP,NamaAtasan,NoHPatasan,PASS,ROLES) " +
            "VALUES  ('" + nama + "', '" + nohp + "','" + nip + "','" + namaAtasan + "','" + noAtasan + "','" + encryp + "','waiting')"
        } else if(type == "admin"){
            sql = "INSERT INTO users (nama,noHp,NIP,NamaAtasan,NoHPatasan,PASS,ROLES) " +
            "VALUES  ('" + nama + "', '" + nohp + "','" + nip + "','" + namaAtasan + "','" + noAtasan + "','" + encryp + "','admin')"
        }

        pool.query(sql, (error, results) => {
            if (error) {
                res.status(200).json({
                    result: "NotOK"
                })
            }
            res.status(200).json({
                result: "OK"
            })
        })
    }
}


exports.login = function (req, res) {

    if (req.method == "POST") {
        var post = req.body;
        var nip = post.nip;
        var password = post.password;

        var sql = "select * from users where nip = '" + nip + "'"
        pool.query(sql, (error, results) => {
            if (error) {
                throw error
            }
            
            if(results.rows.length == 0){
                res.status(200).json({
                    result: {
                        status: "notRegistered",
                        message: "please register your accout"
                    }
                })
            } else {
                var payload = {
                    nama: results.rows[0].nama
                };
                var token = jwt.sign(payload, config, {
                    expiresIn: 86400 * 30 // expires in 30 days
                });
    
                if (nip == results.rows[0].nip && password == cryptr.decrypt(results.rows[0].pass)) {
                    if (results.rows[0].roles == 'waiting') {
                        res.status(200).json({
                            result: {
                                status: "notAuth",
                                message: "Your account is still waiting for approval"
                            }
                        })
                    } else {
                        res.status(200).json({
                            result: {
                                status: "Auth",
                                token: token,
                                message: "Your account is approved"
                            }
                        })
                    }
                } else {
                    res.status(200).json({
                        result: {
                            status: "pswd",
                            message: "password is wrong"
                        }
                    })
                }
            }
        })
    }
}

exports.user_approval = function(req,res){
    if (req.method == "GET"){
        var nip = req.query.nip
        var sql = "update users set roles = 'user' where nip = '"+nip+"';"

        pool.query(sql,(err,result) =>{
            if (err) res.send("Error")
            else{
                res.send({
                    result: "Updated "+nip
                })
            }
        })
    } else {
        res.send({
            result: "Request Harus GET"
        })
    }
}