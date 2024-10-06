import { Character } from "./character";
import { Container, Item } from "./items";

export interface World {
  worldName: string;
  description: string;
  areas: string[];
}

export interface WorldProps {
  worldName: string;
  description: string;
  areaQuantity: number;
  areaWidth: number;
}

export interface Area {
  areaName: string;
  world: string;
  description: string;
  grid: string[];
}

export interface Tile {
  tileId: string;
  name: string;
  description: string;
  frequency: 1 | 2 | 3 | 4 | 5 | null;
  traversable: boolean;
  contents: Character | Container | Item | Static | null;
}

export interface Static {
  name: string;
  description: string;
}
