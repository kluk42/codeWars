function capitalize(str) {
    if (typeof str !== 'string') {
        return 'Это не строка'
    }
    const initialMassive = str.split(' ');
    let newString = '';
    let uppercaseLetter = '';
    let wordCutted = '';
    for (let i=0; i<initialMassive.length; i +=1) {
        uppercaseLetter = initialMassive[i][0].toUpperCase();
        wordCutted = initialMassive[i].substr(1);
        newString = newString + ' ' + uppercaseLetter + wordCutted
    }
    console.log(newString)
    return newString
  }
  
  capitalize('Надоел, надоел, надоел ты'); // Надоел, Надоел, Надоел Ты
  capitalize('Надоели, надоели, надоели вы все'); // Надоели, Надоели, Надоели Вы Все
  capitalize('Прошу уходи, уходи'); // Прошу Уходи, Уходи
  capitalize('Уходи прошу, уходи совсем'); // Уходи Прошу, Уходи Совсем