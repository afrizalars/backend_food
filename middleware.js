var jwt = require('jsonwebtoken');
const config = 'supersecret'

function auth(req, res, next){
    const token = req.header('Authorization');
    if(!token) return res.status(401).json({
        message : "Required token"
    })

    try {
        const decoded = jwt.verify(token, config);
        req.user = decoded;
        next();
    } 
    catch (ex) {
        res.status(400).json({
            message: "Invalid Token"
        })
    }
}

module.exports = auth;