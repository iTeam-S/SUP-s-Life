const service = require("../service/service");
var connexion = require("../service/connexion")();

module.exports = {
	info_compte: function(req, res){
		console.log("==> GET INFO : " + req.query.id);
		var id = req.query.id;
		connexion.then(function(db){
			db.query("SELECT id, nom, prenom, appelation, foyer, poste, universite, date_naissance, niveau, email, tel, promotion, type FROM user where id = ?", [id], function(err, resultats){
			if(err) res.status(500).send("Error: ressource");
			if(!resultats.length){
				res.status(404).send("Aucun résultat");
			}
			else{
				res.status(200).send(resultats[0]);
			}
			})
		})
	},

	list_type_compte: function(req, res){
		var type_compte = req.query.type_compte;
		connexion.then(function(db){
			db.query("SELECT id, appelation from user where type = ?", [type_compte], function(err, resultats){
				if(err) res.status(500).send("Error: ressource");
				if(!resultats.length){
					res.status(404).send("Aucun résultat");
				}
				else{
					res.status(200).send(resultats);
				}
			})
		})
	},

  	activation_compte: function(req, res){
		console.log("==> ACTIVATION COMPTE");
		var id_user = req.body.id_user, type_compte_inactif = req.body.type_compte_inactif, type_compte = req.body.type_compte, droit = req.body.droit;
		if(id_user && type_compte == "referant" && type_compte_inactif){
			if( (type_compte_inactif == "referant" && droit == "chef referant" && type_compte == "referant") || (type_compte_inactif == "etudiant" && type_compte == "referant" && (droit == "chef referant" || droit == "referant")) ){
				connexion.then(function(db){
					service.verifier_exist_user(id_user, db).then(function(exist){
						if(exist){
							db.query("UPDATE user set activation = ? where id = ?", [1, id_user], function(err){
								if(err) res.status(500).send("Error: ressource");
								res.send("Success");
							})
						}
						else{
							res.status(403).send("Utilisateur introuvable");
						}
					})
				})
			}
			else{
				res.status(403).send("Erreur d'accès");
			}
		}
		else{
			res.status(403).send("Erreur d'accès");
		}

	},

	list_compte_inactif: function(req, res){
		console.log("==> DEMANDE ACTIVATION");
		var type_compte = req.query.type_compte_inactif;
		connexion.then(function(db){
			db.query("SELECT id, nom, prenom, appelation from user where type = ? AND activation = ?", [type_compte, 0], function(err, resultats){
				if(err) res.status(500).send("Error: ressource");
				if(!resultats.length){
					res.status(404).send("Aucun résultat");
				}
				else{
					res.status(200).send(resultats);
				}
			})
		})
	}
}