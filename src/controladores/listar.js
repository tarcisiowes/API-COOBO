const knex = require('../../database/conexao');

const listarDocumentos = async (req, res) => {
  try {
    const resposta = await knex('documents').where('deleted', false);
    if (resposta.rowCount === 0) {
      return res.status(404).json('Não ha nenhum registro no momento!');
    }
    return res.json(resposta);
  } catch (error) {
    return res.status(404).json(`Erro ${error}`);
  }
};

module.exports = { listarDocumentos };
