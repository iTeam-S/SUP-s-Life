var connexion = require("../service/connexion")();

module.exports = {
	create: function(req, res){
        console.log("==> CREATION FOYER");
        var donnee = req.body;
        var nom = donnee.nom, adresse = donnee.adresse, ville = donnee.ville, type = donnee.type_compte;
        if(type == "referant"){
            if(nom && adresse && ville){
                connexion.then(function(db){
                    db.query("INSERT INTO foyer(nom, adresse, ville) VALUES(?,?,?)", [nom, adresse, ville], function(err){
                        if(err) res.status(500).send("Error: ressource");
                        res.send("Success");
                    })
                })
            }
            else{
                res.status(403).send("Information insuffisante");
            }
        }
        else{
            res.status(403).send("Erreur d'accès");
        }  
    },

    list_foyer: function(req, res){
        console.log("==> LIST FOYER");
        connexion.then(function(db){
            db.query("SELECT * FROM foyer", function(err, resultats){
                if(err) res.status(500).send("Error: ressource");
                if(resultats.length){
                    res.send(resultats);
                }
                else{
                    res.send("Aucun résultat");
                }
                
            })
        })
    }
}