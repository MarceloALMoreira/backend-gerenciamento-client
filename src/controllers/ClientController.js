const ClientServices = require("../services/ClientServices");
const clientServices = new ClientServices();

class ClientController {
  static async store(req, res) {
    const { nome, email, telefone } = req.body;

    console.log(nome, email, telefone);
    try {
      const client = await clientServices.store({ nome, email, telefone });

      res.status(201).json(client);
    } catch (error) {
      console.error(error);
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = ClientController;
