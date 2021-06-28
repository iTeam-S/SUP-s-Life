var connexion = require("../service/connexion")();
var service = require("../service/service");
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    index: function(req, res){
        res.send("Connexion réussi ! ")
    }
    
}