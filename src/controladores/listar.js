const knex = require('../../database/conexao');

const listarDocumentos = async (req, res) => {
  const resposta = await knex('documents').where('deleted', false);
  if (resposta.rowCount === 0) {
    return res.status(404).json('Não foi encontrado nenhum documento');
  }
  return res.json(resposta);
};

module.exports = { listarDocumentos };
