var connexion = require("../service/connexion")();

module.exports = {
    index: function(req, res){
        console.log("==> GET INDEX");
        res.send("Hello world!");
    },

    list: function(req, res){
        console.log("==> GET LIST");
        connexion.then(function(db){
            db.query("SELECT * FROM user where id = ?", [1], function(err, resultats){
                if(err) res.status(500).send("Error: ressource");
                res.status(200).send(resultats);
            })
        })
    }
}