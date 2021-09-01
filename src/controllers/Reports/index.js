const { getDayInWeek } = require('./utils');

const dayOfWeek = async (req, res) => {
  const { startday, amountofdays } = req.query;
  const week = ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO'];

  if (!startday) {
    return res.status(404).json('É preciso informar um dia inicial');
  }
  if (!amountofdays) {
    return res.status(404).json('É preciso informar um incremento de dias');
  }

  const response = getDayInWeek(week.indexOf(startday.toUpperCase()) + Number(amountofdays));
  return res.json(response);
};

module.exports = { dayOfWeek };
