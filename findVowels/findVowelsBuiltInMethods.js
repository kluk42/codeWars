const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];

function findVowels(str) {
  let amountOfVowels = 0;
  vowels.forEach(vowel => {
    if (str.includes(vowel)) {
      amountOfVowels +=1
    }
  })
  console.log(amountOfVowels)
    return amountOfVowels
}

findVowels('здравствуй'); // 2
findVowels('привет'); // 2
findVowels('хеллоу'); // 3