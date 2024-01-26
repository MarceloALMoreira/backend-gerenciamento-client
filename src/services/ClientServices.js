const database = require("../models");
const uuid = require("uuid");



class ClientServices {
  async store(dto) {
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
}

module.exports = ClientServices;
