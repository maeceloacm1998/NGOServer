/* eslint-disable no-underscore-dangle */
/* eslint-disable no-const-assign */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
const Conteudo = require('../models/Contatos');

class ControllContato {
  // Procurando por usuário
  async index(req, res) {
    const { status } = req.params;

    const search = await Conteudo.find({ status });

    res.json(search);
  }

  // Criando Contatos
  async store(req, res) {
    const {
      nome, email, telefone, status,
    } = req.body;

    const contato = await Conteudo.find({
      nome, email, telefone, status,
    });

    if (contato.length !== 0) {
      res.json({ 'Esse contato ja foi criado:': contato });
    } else {
      const createContato = await Conteudo.create({
        nome,
        email,
        telefone,
        status,
      });

      res.json({ 'Usuário Criado:': createContato });
    }
  }

  // Atualizando o contato
  async update(req, res) {
    const { nome, email, telefone } = req.body;
    const { id_contatos } = req.params;

    await Conteudo.updateOne({ _id: id_contatos }, {
      nome,
      email,
      telefone,
    });

    res.json('Esse contato foi atualizado com sucesso');
  }

  // Deletando o contato
  async destroy(req, res) {
    // Primeira parte - requisição
    const { id_contatos } = req.params;

    await Conteudo.findByIdAndDelete({ _id: id_contatos });
    res.json('Contato foi deletado com sucesso !');
  }
}

module.exports = new ControllContato();
