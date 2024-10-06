import { Character } from "./character";
import { Faction } from "./faction";
import { Container, Item } from "./items";
import { Quest } from "./quest";

export interface World {
  worldName: string;
  description: string;
  areas: string[];
  characters: string[];
  factions: Faction[];
  items: Item[];
  quests: Quest[];
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
  links: string[];
}

export interface Tile {
  tileId: number;
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
