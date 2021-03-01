module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0 ) {
    return false;
  }
  const configArray = bracketsConfig.map(brackets => brackets.join(''));
  const bracketsArray = str.split('');
  const stack = [];

  for (let i = 0; i < bracketsArray.length; i++) {
    const current = bracketsArray[i];
    stack.push(current);
    if (stack.length > 1) {
      const pair = [stack[stack.length - 2], stack[stack.length - 1]].join('')
      if (configArray.some(e => e === pair)) {
        stack.splice(-2, 2);
      }
    }
  }
  return stack.length === 0;
}
