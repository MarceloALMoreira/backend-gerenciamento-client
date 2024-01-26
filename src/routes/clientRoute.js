const Router = require("express");
const ClientController = require("../controllers/ClientController");

const routes =  Router();


routes.post('/client', ClientController.store)



module.exports = routes