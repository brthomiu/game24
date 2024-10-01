import { Character } from "./character";
import { Faction } from "./faction";
import { Container, Item } from "./items";
import { Quest } from "./quest";

export interface World {
  name: string;
  description: string;
  areas: Area[];
  characters: Character[];
  factions: Faction[];
  items: Item[];
  quests: Quest[];
}

export interface Area {
  name: string;
  description: string;
  grid: Tile[];
  links: string[];
}

export interface Tile {
  id: number;
  name: string;
  description: string;
  traversable: boolean;
  contents: Character | Container | Item | null;
}
