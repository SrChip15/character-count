function countLetters(string) {
  let output = {};
  string.split('').forEach(element => {
    output[element] = output[element] == undefined ? 1 : output[element] + 1;
  });

  return output;
}

console.log(countLetters('srinathchintapalli'));