module.exports = function reverse (n) {
    let nAbs = Math.abs(n);
    let numberString = nAbs.toString();

    let i = 0;
    let result = '';
    
    while (i < numberString.length) {
      result = `${numberString[i]}${result}`;
      i = i + 1;
    }
    let resultNumber = Number(result);
    return resultNumber;
}
