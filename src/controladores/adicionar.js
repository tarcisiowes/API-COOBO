const knex = require('../../database/conexao');

const adicionarDocumento = async (req, res) => {
  let {
    name, content,
  } = req.body;

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const createdat = today.toDateString();

  content = new Buffer.from(content).toString('base64');

  function byteCount(value) {
    return encodeURI(value).length - 1;
  }
  const kbsize = Math.round(byteCount(content) / 1.37) / 1000;

  try {
    const resposta = await knex('documents').insert({
      name, content, createdat, kbsize,
    });

    if (resposta.rowCount === 0) {
      return res.status(404).json('Não foi possivel adicionar o documento, tente novamente');
    }
    return res.json('Documento criado com sucesso!');
  } catch (error) {
    return res.status(404).json(`Erro ${error}`);
  }
};

module.exports = { adicionarDocumento };
