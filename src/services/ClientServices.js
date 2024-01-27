const database = require("../models");
const uuid = require("uuid");

class ClientServices {
  async createClient(dto) {
    const existingClient = await database.clients.findOne({
      where: { email: dto.email },
    });

    if (existingClient) {
      throw new Error("Cliente ja existe");
    }

    try {
      const newClient = await database.clients.create({
        id: uuid.v4(),
        nome: dto.nome,
        email: dto.email,
        telefone: dto.telefone, // Corrigido para "telefone"
      });

      return newClient;
    } catch (error) {
      throw new Error(`Erro ao tentar cadastrar ${dto.nome}`);
    }
  }

  async listClient() {
    const clients = await database.clients.findAll();
    return clients;
  }

  async listclientByNome(nome) {
    const clients = await database.clients.findAll({
      where: { nome },
    });
    return clients;
  }

  async updateClientID(id, data) {
    const client = await database.clients.findByPk(id);

    if (!client) {
      throw new Error("Cliente não encontrado.");
    }
    try {
      const updateClient = await client.update(data);
      return updateClient;
    } catch (error) {
      throw new Error(`Erro ao atualizar cliente: ${error.message}`);
    }
  }

  async deleteClientID(id) {
    const client = await database.clients.findByPk(id);

    if (!client) {
      throw new Error("Cliente não encontrad.");
    }

    try {
      await client.destroy();
      return { message: "Cliente excluido com sucesso!" };
    } catch (error) {
      throw new Error(`Erro ao excluir cliente: ${error.message}`);
    }
  }
}

module.exports = ClientServices;
