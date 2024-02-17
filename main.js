export const getDotCombinations = (characters) => {
  const result = [characters];
  const charactersLength = characters.length;

  for (let i = 1; i < 2 ** (charactersLength - 1); i++) {
    const combination = characters.split('');
    let index = i;

    for (let j = 0; j < charactersLength; j++) {
      if (index % 2 === 1) {
        combination[j] += '.';
      }
      
      index = Math.floor(index / 2);
    }

    result.push(combination.join(''));
  }

  return result;
};
