export interface Faction {
  name: string;
  description: string;
  allies: string[];
  enemies: string[];
}

export interface FactionStats {
  faction: string;
  reputation: number;
}
