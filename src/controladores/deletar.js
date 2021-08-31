const knex = require('../../database/conexao');

const deletarDocumento = async (req, res) => {
  const { id } = req.params;

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const deletedAt = today.toDateString();

  const resposta = await knex('documents').where({ id }).patch({
    deletedAt,
  });

  if (resposta.rowCount === 0) {
    return res.status(404).json('O documento do ID infomado não existe');
  }
  return res.json(resposta);
};

module.exports = { deletarDocumento };
