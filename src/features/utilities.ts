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

export const isEdgeCell = (cell: number, gridSize: number): boolean => {
  const gridWidth = Math.sqrt(gridSize);

  // Top edge
  if (cell >= 0 && cell <= gridWidth) {
    console.log("------TOP EDGE");
    return true;
  }
  // Left edge
  else if (cell % gridWidth === 0) {
    console.log("------LEFT EDGE");
    return true;
  }
  // Bottom edge
  else if (cell >= gridSize - gridWidth && cell < gridSize) {
    console.log("------BOTTOM EDGE");
    return true;
  }
  // Right edge
  else if ((cell + 1) % gridWidth === 0) {
    console.log("------TOP EDGE");
    return true;
  } else return false;
};

export const getUnusedPort = (port: number, activePorts: number[]): number => {
  let currentPort = port;

  while (activePorts.includes(currentPort)) {
    currentPort += 1;
  }

  return currentPort;
};
