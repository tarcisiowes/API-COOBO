const knex = require('../../database/conexao');

const buscarDocumento = async (req, res) => {
  const { id } = req.params;
  const resposta = await knex('documents').where({ id }).where('deleted', false);

  if (resposta.rowCount === 0) {
    return res.status(404).json('O documento do ID infomado não existe');
  }
  return res.json(resposta);
};

module.exports = { buscarDocumento };
