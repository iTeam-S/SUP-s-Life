var controller = require("../controller/controller");
var login = require("../controller/login");
var user = require("../controller/user");
var foyer = require("../controller/foyer");
var accueil = require("../controller/accueil");
var middleware = require("../middleware/auth");

// On injecte le router d"express, nous en avons besoin pour définir les routes 
module.exports = function(router) {   
    router.get("/", controller.index);
    router.get("/list", controller.list);

    //REGISTER LOGIN
    router.post("/api/v1/register", login.register);
    router.post("/api/v1/login", login.connexion);
    router.post("/api/v1/r_register", login.r_register);

    //USER
    router.get("/api/v1/info_compte", user.info_compte);
    router.get("/api/v1/list_type_compte", user.list_type_compte);
    router.get("/api/v1/list_compte_inactif", user.list_compte_inactif);
    router.post("/api/v1/activer_compte", user.activation_compte);

    //FOYER
    router.post("/api/v1/creation_foyer", foyer.create);
    router.get("/api/v1/list_foyer", foyer.list_foyer);

    //CONNECTED
    router.get("/api/v1/connecter", middleware.connecter, accueil.index);
};