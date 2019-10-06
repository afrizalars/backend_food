const Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
const config = 'supersecret'

exports.signup = function(req,res){
    if(req.method == "POST"){
        var post = req.body;
        var nip = post.nip;
        var nama = post.nama
        var nohp = post.nohp
        var namaAtasan = post.namaAtasan
        var noAtasan = post.noAtasan
        var encryp = cryptr.encrypt(req.body.password);
        var role = 'waiting'

        var sql = "INSERT INTO users (nama,noHp,NIP,NamaAtasan,NoHPatasan,PASS,ROLES) "+
        "VALUES  ('"+nama+"', '"+nohp+"','"+nip+"','"+namaAtasan+"','"+noAtasan+"','"+encryp+"','waiting')"
        pool.query(sql, (error, results) => {
            if (error) {
                res.status(200).json({
                    result : "NotOK"
                })
            }
            res.status(200).json({
                result : "OK"
            })
          })
    }
}

exports.login = function (req, res) {

    if (req.method == "POST") {
        var post = req.body;
        var nip = post.nip;
        var password = post.password;

        var sql = "select * from users where nip = '"+nip+"'"

        pool.query(sql, (error, results) => {
            if (error) {
                throw error
            }
            var payload = {
                id: results.rows[0].id,
                nama: results.rows[0].nama,
                nohp: results.rows[0].nohp,
                nip: results.rows[0].nip,
                namaatasan: results.rows[0].namaAtasan,
                nohpatasan: results.rows[0].nohpatasan,
                roles: results.rows[0].roles
               };

            var token = jwt.sign(payload, config, {
                expiresIn: 86400 * 30 // expires in 30 days
            });

            if(password == cryptr.decrypt(results.rows[0].pass)){
                if(results.rows[0].roles == 'waiting'){
                    res.status(200).json({
                        result : {
                            status: "notAuth",
                            token : token,
                            message : "Your account is still waiting for approval"
                        }
                    })
                } else {
                    res.status(200).json({
                        result : {
                            status: "Auth",
                            token : token,
                            message : "Your account is approved"
                        }
                    })
                }
            } else {
                res.status(200).json({
                    result : "notAuth"
                })
            }
          })
        }
    }

