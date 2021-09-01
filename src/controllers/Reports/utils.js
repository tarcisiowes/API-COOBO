function getDayInWeek(days) {
  const rest = days % 7;

  switch (rest) {
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

module.exports = { getDayInWeek };
