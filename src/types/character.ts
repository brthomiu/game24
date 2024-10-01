import { DialogueTree } from "./dialogue";
import { FactionStats } from "./faction";
import { Stats } from "./stats";

export interface Character {
  name: string;
  stats: CharacterStats;
  reputations: FactionStats[];
  equipment: CharacterEquipment;
  inventory: string[];
  abilities: string[];
  quests: string[];
  dialogue: DialogueTree;
}

export interface CharacterStats extends Stats {
  // Level and Stat Points
  level: number;
  experience: number;
  statPoints: number;
  // Health and PSI
  currentHealth: number;
  maxHealth: number;
  currentPsi: number;
  maxPsi: number;
}

export interface CharacterEquipment {
  weapon: string | null;
  head: string | null;
  body: string | null;
  legs: string | null;
  accessory1: string | null;
  accessory2: string | null;
}
