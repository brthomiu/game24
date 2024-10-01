import { Character } from "../types/character";

// Array for level/attribute costs and gains

export const levelUpExperienceRequirements = [
  0, 100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200,
];

export const levelUpStatPointGain = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const statPointCost = [0, 1, 2, 3, 4, 5, 6];

// Level up functions

export const levelUpCharacter = (character: Character): Character => {
  let newCharacter = { ...character };
  const newLevel = newCharacter.stats.level + 1;
  if (newLevel > 0 && newLevel < 11) {
    newCharacter.stats.level = newLevel;
    newCharacter.stats.maxHealth += 2;
    if (newLevel % 2 === 0) {
      newCharacter.stats.maxPsi += 1;
    }
    newCharacter.stats.statPoints += levelUpStatPointGain[newLevel -1];
  } else {
    console.log(
      "ERROR: New level was outside of valid range! Character was not leveled up. /features/leveling.ts"
    );
  }
  return newCharacter;
};

export const raiseAttribute = (
  attribute:
    | "strength"
    | "stamina"
    | "mind"
    | "perception"
    | "agility"
    | "charisma",
  character: Character
): Character => {
  let newCharacter = { ...character };
  const cost = statPointCost[newCharacter.stats[attribute]];
  if (cost > newCharacter.stats.statPoints) {
    console.log("Not enough stat points to level up this attribute.");
    return character;
  }
  newCharacter.stats.statPoints -= cost;
  newCharacter.stats[attribute] += 1;
  return newCharacter;
};
