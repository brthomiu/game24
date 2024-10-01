export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

export const isAbilityCrit = (modifier: number): boolean => {
  if (getRandomInt(1, 100) > 94 - modifier) {
    return true;
  } else return false;
};

export const isEdgeCell = (cell: number, n: number): boolean => {
  // Top edge
  if (cell >= 0 && cell < n) {
    return true;
  }
  // Left edge
  if (cell % n === 0) {
    return true;
  }
  // Bottom edge
  if (cell >= n * (n - 1) && cell < n * n) {
    return true;
  }
  // Right edge
  if ((cell + 1) % n === 0) {
    return true;
  }
  return false;
};
