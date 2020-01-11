function oddOrEven() {
  let result = {
    pares: [],
    impares: []
  }

  for(let i = 0; i <= 20; i++){
    if(i % 2) {
      result.impares.push(i);
    } else {
      result.pares.push(i);
    }
  }
  return result;
}

module.exports = oddOrEven;