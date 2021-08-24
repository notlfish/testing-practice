export const stringLength = (string) => {
  let res = 0;
  for (let _ in string) res++;
  if (res == 0 || res > 10) throw new Error("String length outside bounds");
  return res;
};

export const stringReverse = (string) => {
  let reverse = [];
  for (let c of string) reverse.unshift(c);
  return reverse.join("");
};

export const calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
};
