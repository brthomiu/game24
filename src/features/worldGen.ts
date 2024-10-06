import { Area, Tile, World, WorldProps } from "../types/world";
import { isEdgeCell } from "./utilities";

export const generateWorld = ({
  worldName,
  description,
  areaQuantity,
  areaWidth,
}: WorldProps): World => {
  return {
    worldName,
    description,
    areas: [],
    characters: [],
    factions: [],
    items: [],
    quests: [],
  };
};

export const generateAreaList = (
  worldName: string,
  areaQuantity: number,
  areaWidth: number
) => {
  const areaList = [];
  for (let i = 0; i < areaQuantity; i++) {
    let area = generateArea(
      `${worldName}-area-${i.toString()}`,
      worldName,
      `${worldName}-area-${i.toString()} placeholder description`,
      areaWidth
    );
    areaList.push(area);
  }
  return areaList;
};

const generateArea = (
  areaName: string,
  world: string,
  description: string,
  width: number
): Area => {
  return {
    areaName,
    world,
    description,
    grid: [],
    links: [],
  };
};

const generateGrid = (width: number): Tile[] => {
  const gridSize = width * width;
  const grid = [];
  for (let i = 0; i < gridSize; i++) {
    let tile;
    if (isEdgeCell(i, gridSize)) {
      // Set tiles for area borders
      tile = {
        tileId: i,
        name: "wall",
        description: "A wall that cannot be traversed.",
        frequency: null,
        traversable: false,
        contents: null,
      };
    } else {
      // Set tiles for the interior of the area
      tile = {
        tileId: i,
        name: "floor",
        description: "A floor that you can walk on.",
        frequency: null,
        traversable: true,
        contents: null,
      };
    }
    grid.push(tile);
  }
  return grid;
};
