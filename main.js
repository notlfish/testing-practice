export const stringLength = (string) => {
  const chars = string.split('');
  let res = 0;
  chars.forEach(() => {
    res += 1;
  });
  if (res === 0 || res > 10) throw new Error('String length outside bounds');
  return res;
};

export const stringReverse = (string) => {
  const chars = string.split('');
  const reverse = [];
  chars.forEach((c) => {
    reverse.unshift(c);
  });
  return reverse.join('');
};

export const calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
};

export const capitalize = (string) => {
  const index = string.search(/[a-zA-Z]/);
  const chr = string[index].toUpperCase();
  return string.substring(0, index) + chr + string.substring(index + 1);
};
