import { Area, Tile, World } from "../types/world";
import { isEdgeCell } from "./utilities";

export const generateWorld = (
  name: string,
  description: string,
  areaQuantity: number,
  areaWidth: number
): World => {
  return {
    name,
    description,
    areas: generateAreaList(3, 10),
    characters: [],
    factions: [],
    items: [],
    quests: [],
  };
};

const generateAreaList = (areaQuantity: number, areaWidth: number) => {
  const areaList = [];
  for (let i = 0; i < areaQuantity; i++) {
    let area = generateArea(
      `Area${i.toString()}`,
      `Area${i.toString()} placeholder description`,
      areaWidth
    );
    areaList.push(area);
  }
  return areaList;
};

const generateArea = (
  name: string,
  description: string,
  width: number
): Area => {
  return {
    name,
    description,
    grid: generateGrid(width),
    links: [],
  };
};

const generateGrid = (width: number): Tile[] => {
  const gridSize = width * width;
  const grid = [];
  for (let i = 0; i < gridSize; i++) {
    let tile;
    if (isEdgeCell(i, gridSize)) {
      tile = {
        id: i,
        name: "wall",
        description: "A wall that cannot be traversed.",
        traversable: false,
        contents: null,
      };
    } else {
      tile = {
        id: i,
        name: "floor",
        description: "A floor that you can walk on.",
        traversable: true,
        contents: null,
      };
    }
    grid.push(tile);
  }
  return grid;
};
