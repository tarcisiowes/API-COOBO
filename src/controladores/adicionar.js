const knex = require('../../database/conexao');

const adicionarDocumento = async (req, res) => {
  let {
    name, content,
  } = req.body;

  if (!name) {
    return res.status(404).json('É preciso informar um nome');
  }
  if (!content) {
    return res.status(404).json('É preciso informar o conteudo');
  }

  const nomeJaCadastrado = await knex('documents').select('name').where({ name });

  if (nomeJaCadastrado.length > 0) {
    return res.status(400).json('Não é permitido utilizar este nome, ele ja foi cadastrado!');
  }

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
      return res.status(404).json('Não foi possivel fazer o cadastro, tente novamente');
    }
    return res.json('Cadastro realizado com sucesso!');
  } catch (error) {
    return res.status(404).json(`Erro ${error}`);
  }
};

module.exports = { adicionarDocumento };
