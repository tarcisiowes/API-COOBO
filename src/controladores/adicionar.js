const knex = require('../../database/conexao');

const adicionarDocumento = async (req, res) => {
  const {
    name, content, kbSize,
  } = req.body;

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const createdAt = today.toDateString();

  const resposta = await knex('documents').insert({
    name, content, createdAt, kbSize,
  });

  if (resposta.rowCount === 0) {
    return res.status(404).json('Não foi possivel adicionar o documento, tente novamente');
  }
  return res.json(resposta);
};

module.exports = { adicionarDocumento };
