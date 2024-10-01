import { Stats } from "./stats";

export interface Item {
  name: string;
  description: string;
  type: string;
}

export interface Container {
  name: string;
  items: Item[];
}

export interface EquipmentStats extends Stats {
  maxHealth: number;
  maxPsi: number;
}

export interface ConsumableStats extends Stats {
  currentHealth: number;
  currentPsi: number;
}

export interface ConsumableItem extends Item {
  type: "consumable";
  stats: ConsumableStats[];
}

export interface JobItem extends Item {
  type: "job";
}

export interface Equipment extends Item {
  type: "equipment";
  slot: string;
  stats: EquipmentStats[];
}

export interface WeaponItem extends Equipment {
  slot: "weapon";
}

export interface HeadItem extends Equipment {
  slot: "head";
}

export interface BodyItem extends Equipment {
  slot: "body";
}

export interface LegsItem extends Equipment {
  slot: "legs";
}

export interface AccessoryItem extends Equipment {
  slot: "accessory";
}
