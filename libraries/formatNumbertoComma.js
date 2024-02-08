const numFormatter = (number) => {
  const str = String(number);
  let newString = "",
    revString = "";
  counter = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (counter === 3) {
      newString += ",";
      counter = 0;
    }
    newString += str[i];
    counter++;
  }
  for (let i = newString.length - 1; i >= 0; i--) {
    revString += newString[i];
  }
  return revString;
};
module.exports = { numFormatter };
