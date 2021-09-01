const diaDaSemana = async (req, res) => {
  const { startday, amountofdays } = req.query;
  const semana = ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO'];

  if (!startday) {
    return res.status(404).json('É preciso informar um dia inicial');
  }
  if (!amountofdays) {
    return res.status(404).json('É preciso informar um incremento de dias');
  }

  function diasDaSemana(dias) {
    const resto = dias % 7;

    switch (resto) {
      case 0:
        return 'Domingo';
      case 1:
        return 'Segunda';
      case 2:
        return 'terça';
      case 3:
        return 'Quarta';
      case 4:
        return 'Quinta';
      case 5:
        return 'Sexta';
      case 6:
        return 'Sabado';
    }
  }
  const resposta = diasDaSemana(semana.indexOf(startday.toUpperCase()) + Number(amountofdays));
  return res.json(resposta);
};

module.exports = { diaDaSemana };
