function reverseWords(str) {
    if (typeof str !== 'string') {
        return console.log('Это не строка')
    }
    let initialMassive = str.split(' ');
    let reverseString = '';
    for (i=initialMassive.length-1; i >= 0; i =i-1) {
        if (i === initialMassive.length-1) {
            reverseString = initialMassive[i];
        } else {
            reverseString = reverseString+' ' + initialMassive[i];
        }
    }
    console.log(reverseString)
    return reverseString
  }
  
  reverseWords('всегда много путей достичь цель есть'); // "есть цель достичь путей много всегда"
  reverseWords('испробовать их все должны вы'); // "вы должны все их испробовать"