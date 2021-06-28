const jwt = require('jsonwebtoken');
const SECRET = 'mykey';

function verify_token(req, res, next){
    //const token = req.headers.authorization ? req.headers.authorization.replace("Accessing ", "") : false;
    // Présence d'un token
    const token = req.body.token ? req.body.token : req.query.token;
    if (!token) {
        res.status(401).json({ message: 'Error: Need a token' });
    }

    // Véracité du token
    jwt.verify(token, SECRET, (err, decodedToken) => {
        if (err) return res.status(401).json({ message: 'Error: Bad token' })
        if(decodedToken){
            next()
        }
        else{
            res.send({error:"Token error"});
        }

    })
}

module.exports = {
    connecter: (req, res, next) => {
        verify_token(req, res, next);
    },
}