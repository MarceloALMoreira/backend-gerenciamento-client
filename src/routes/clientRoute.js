const Router = require("express");
const ClientController = require("../controllers/ClientController");

const routes = Router();

routes
  .post("/client", ClientController.createClient)
  .get("/client", ClientController.listClient)
  .get("/client/byNome", ClientController.listclientByNome)
  .put("/client/:id", ClientController.updateClientID)
  .delete("/client/:id", ClientController.deleteClientID);

module.exports = routes;
