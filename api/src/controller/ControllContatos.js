/* eslint-disable no-underscore-dangle */
/* eslint-disable no-const-assign */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
const Conteudo = require('../models/Contatos');
const User = require('../models/User');

class ControllContato {
  // Procurando por usuário
  async index(req, res) {
    const { status } = req.body;

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
    const { user_id } = req.headers;
    const updateDados = await Conteudo.findById(id_contatos);
    const user = await User.findById(user_id);

    if ((String(user._id)) !== (String(updateDados.user))) {
      res.status(401).json({ erro: 'Não autorizado' });
    } else {
      await Conteudo.updateOne({ _id: id_contatos }, {
        user: user_id,
        nome,
        email,
        telefone,
      });

      res.json('Esse contato foi atualizado com sucesso');
    }
  }

  // Deletando o contato
  async destroy(req, res) {
    // Primeira parte - requisição
    const { id_contatos } = req.body;
    const { user_id } = req.headers;
    const contato = await Conteudo.findById(id_contatos);
    const user = await User.findById(user_id);

    if (contato !== null) {
      if ((String(user._id)) !== (String(contato.user))) {
        res.status(401).json({ erro: 'Não autorizado' });
      } else {
        await Conteudo.findByIdAndDelete({ _id: id_contatos });
        res.json('Contato foi deletado com sucesso !');
      }
    }
    res.json('Não existe esse contato na lista !');
  }
}

module.exports = new ControllContato();
