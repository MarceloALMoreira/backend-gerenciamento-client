const ClientServices = require("../services/ClientServices");
const clientServices = new ClientServices();

class ClientController {
  static async createClient(req, res) {
    const { nome, email, telefone } = req.body;

    console.log(nome, email, telefone);
    try {
      const client = await clientServices.createClient({
        nome,
        email,
        telefone,
      });

      res.status(201).json(client);
    } catch (error) {
      console.error(error);
      res.status(400).send({ message: error.message });
    }
  }

  static async listClient(req, res) {
    try {
      const clients = await clientServices.listClient();
      res.status(200).json(clients);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  static async listclientByNome(req, res) {
    try {
      const { nome } = req.query; // Obtém o parâmentro de consulta "nome"
      if (!nome) {
        return res
          .status(400)
          .send({ message: 'Parâmentro "nome" é obrigatório.' });
      }
      const clients = await clientServices.listclientByNome(nome);
      res.status(200).json(clients);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  static async updateClientID(req, res) {
    try {
      const { id } = req.params; // Obtém o ID do cliente a ser atualizado
      const { nome, email, telefone } = req.body; // Novos dados do cliente

      const updateClient = await clientServices.updateClientID(id, {
        nome,
        email,
        telefone,
      });
      res.status(200).json(updateClient);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deleteClientID(req, res) {
    try {
      const { id } = req.params; // Obtém o ID do cliente a ser excluído

      await clientServices.deleteClientID(id);
      res.status(204).send(); // Resposta sem conteúdo para sucesso na exclusão
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

module.exports = ClientController;
