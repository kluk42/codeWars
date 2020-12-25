function capitalize(str) {
    if (typeof str !== 'string') {
        return 'Это не строка'
    }
    const initialMassive = str.split(' ');
    const capitalCharactersMassive = initialMassive.map(word => {
      return word.slice(0,1).toUpperCase()+word.slice(1)
    })
    const newString = capitalCharactersMassive.join(' ')
    console.log(newString)
    return newString
  }
  
  capitalize('Надоел, надоел, надоел ты'); // Надоел, Надоел, Надоел Ты
  capitalize('Надоели, надоели, надоели вы все'); // Надоели, Надоели, Надоели Вы Все
  capitalize('Прошу уходи, уходи'); // Прошу Уходи, Уходи
  capitalize('Уходи прошу, уходи совсем'); // Уходи Прошу, Уходи Совсем