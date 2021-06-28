const jwt = require('jsonwebtoken');
const SECRET = 'mykey'

/*
Explication function:
==> inscrire: function(email, mdp1, mdp2, db)
Vérification existence email et confirmation mdp
resolve(true) ou resolve("Confirmation mot de passe incorrecte" ou "...");

==> verifier_exist_user: function(id_user, db)
Vérifier l'existence de l'user à partir de son id
resolve(true); ou resolve(false);

==> generer_token: function(id, email)
return token

==> return_user_email: function(email, db)
vérification existence user à partir de son email, retourne tous les données de l'user (même son mdp)
resolve(resultat) ou resolve("Vérifier votre adresse email");
*/


module.exports = {
    inscrire: function(email, mdp1, mdp2, db){
        return new Promise(function(resolve){
            if(email){
                db.query("SELECT email FROM user where email = ?", [email], function(err, resultats){
                    if(err) throw("Erreur: ressource");
                    if(resultats.length){
                        resolve("Adresse email déjà utilisé");
                    }
                    else{
                        if(mdp1 == mdp2){
                            resolve(true);
                        }
                        else{
                            resolve("Confirmation mot de passe incorrecte");
                        }
                    }
                })      
            }
            else{
                resolve("Aucun adresse email");
            }
        })
    },

    verifier_exist_user: function(id_user, db){
        return new Promise(function(resolve){
            if(id_user){
                db.query("SELECT id FROM user WHERE id = ?", [id_user] , function(err, resultat){
                    if(err) throw("Erreur: ressource");
                    if(resultat.length == 1){
                        resolve(true);
                    }
                    else{
                        resolve(false);
                    }
                })
            }
            else{
                resolve(false);
            }
        })
    },

    generer_token: function(id, email){
        const token = jwt.sign({
            id: id,
            mail: email,
        }, SECRET, { expiresIn: '7d' })
        return token;
    },

    return_user_email: function(email, db){
        return new Promise(function(resolve){
            db.query("SELECT * FROM user where email = ?", [email], function(err, resultat){
                if(err) throw("Erreur: ressource");
                if(resultat.length == 1){
                    resolve(resultat);
                }
                else{
                    resolve("Vérifier votre adresse email");
                }
            })
        })
    }

}