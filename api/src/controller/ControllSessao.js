/* eslint-disable eqeqeq */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-const-assign */

const User = require('../models/User');

class ControllSessao {
  // Login usuário
  async index(req, res) {
    // Primeira parte - Chamada no JSON
    const { email, senha } = req.body;

    // Segunda parte - Lógica (Procura por email e senha dentro do banco de dados).
    const user = await User.findOne({ email });
    const password = await User.findOne({ senha });

    // Validação para logar.
    if (user !== null) {
      if (password !== null) {
        return res.json({ 'Usuário logado': user });
      }
    }
    return res.json('Usuário não encontrado, informe um email e senha válidos');
  }

  // Criação de usuário
  async store(req, res) {
    // Primeira parte - Chamada no JSON
    const {
      nome, email, senha, confsenha,
    } = req.body;
    console.log(nome);

    // Segunda parte - Lógica (Procura por email e senha dentro do banco de dados).
    const user = await User.find({ email, senha });

    // Verificação usada para ver se o usuário ja existe.
    if (user.length !== 0) {
      return res.json({ 'Usuário ja existe': user });
    }

    // Verificação se as senhas conhecidem.
    if (senha !== confsenha) {
      return res.json('As senhas não coencidem, coloque senhas iguais');
    }

    // Criação do usuário caso atenda as exigencias;
    const UserCreate = await User.create({
      nome, email, senha, confsenha,
    });

    // Retorno da criação do usuário
    return res.json({ 'Usuário foi criado ': UserCreate });
  }
}

module.exports = new ControllSessao();
