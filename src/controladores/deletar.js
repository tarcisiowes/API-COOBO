const knex = require('../../database/conexao');

const deletarDocumento = async (req, res) => {
  const { id } = req.params;

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const deletedat = today.toDateString();

  const deleted = true;

  try {
    const resposta = await knex('documents').where({ id }).update({ deletedat, deleted });

    if (resposta.rowCount === 0) {
      return res.status(404).json('O documento do ID infomado não existe');
    }
    return res.json('Documento deletado com sucesso!');
  } catch (error) {
    return res.status(404).json(`Erro ${error}`);
  }
};

module.exports = { deletarDocumento };
