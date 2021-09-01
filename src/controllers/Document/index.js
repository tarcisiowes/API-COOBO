const knex = require('../../../database/conexao');

const insertDocument = async (req, res) => {
  let {
    name, content,
  } = req.body;

  if (!name) {
    return res.status(404).json('É preciso informar um nome');
  }
  if (!content) {
    return res.status(404).json('É preciso informar o conteudo');
  }

  const alreadyRegister = await knex('documents').select('name').where({ name });

  if (alreadyRegister.length > 0) {
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
    const response = await knex('documents').insert({
      name, content, createdat, kbsize,
    });

    if (response.rowCount === 0) {
      return res.status(404).json('Não foi possivel fazer o cadastro, tente novamente');
    }
    return res.json('Cadastro realizado com sucesso!');
  } catch (error) {
    return res.status(404).json(`Erro ${error}`);
  }
};

const listAllDocuments = async (req, res) => {
  try {
    const response = await knex('documents').where('deleted', false);
    if (response.rowCount === 0) {
      return res.status(404).json('Não ha nenhum registro no momento!');
    }
    return res.json(response);
  } catch (error) {
    return res.status(404).json(`Erro ${error}`);
  }
};

const deleteDocument = async (req, res) => {
  const { id } = req.params;

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const deletedat = today.toDateString();

  const deleted = true;

  try {
    const response = await knex('documents').where({ id }).update({ deletedat, deleted });

    if (response.rowCount === 0) {
      return res.status(404).json('O ID infomado não existe');
    }
    return res.json('Remoção realizada com sucesso!');
  } catch (error) {
    return res.status(404).json(`Erro ${error}`);
  }
};

const searchDocument = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await knex('documents').where({ id }).where('deleted', false);

    if (response.rowCount === 0) {
      return res.status(404).json('O ID infomado não existe');
    }
    return res.json(response);
  } catch (error) {
    return res.status(404).json(`Erro ${error}`);
  }
};

module.exports = {
  insertDocument, listAllDocuments, deleteDocument, searchDocument,
};
