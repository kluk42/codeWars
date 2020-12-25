const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];

function findVowels(str) {
  if (typeof str !== 'string') {
        return 'Это не строка'
    }
  let amountOfVowels = 0;
  for (let k=0; k<vowels.length; k+=1) {
      for (let i=0; i<str.length; i+=1) {
        if (str[i]===vowels[k]) {
            amountOfVowels+=1
        }
      }
  }

  console.log(amountOfVowels)
    return amountOfVowels
}

findVowels('уоеоыууу'); // 8
findVowels('привет'); // 2
findVowels('хеллоу'); // 3