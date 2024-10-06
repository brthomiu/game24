import { Character, CharacterEquipment } from "../types/character";
import { DialogueTree } from "../types/dialogue";
import { FactionStats } from "../types/faction";
import { levelUpExperienceRequirements } from "./leveling";

const determineCharacterStat = (
  stat: "strength" | "stamina" | "mind" | "perception" | "agility" | "charisma",
  type: "melee" | "ranged" | "psi",
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
): number => {
  if (type === "melee") {
    if (stat === "strength") {
      return 2 + level / 2;
    }
    if (stat === "stamina") {
      return 2 + level / 2;
    }
    if (stat === "mind") {
      return 1 + level / 6;
    }
    if (stat === "perception") {
      return 1 + level / 5;
    }
    if (stat === "agility") {
      return 1 + level / 4;
    }
    if (stat === "charisma") {
      return 1 + level / 5;
    }
  } else if (type === "ranged") {
    if (stat === "strength") {
      return 2 + level / 5;
    }
    if (stat === "stamina") {
      return 2 + level / 4;
    }
    if (stat === "mind") {
      return 1 + level / 6;
    }
    if (stat === "perception") {
      return 1 + level / 2;
    }
    if (stat === "agility") {
      return 1 + level / 2;
    }
    if (stat === "charisma") {
      return 1 + level / 5;
    }
  } else if (type === "psi") {
    if (stat === "strength") {
      return 2 + level / 6;
    }
    if (stat === "stamina") {
      return 2 + level / 5;
    }
    if (stat === "mind") {
      return 1 + level / 2;
    }
    if (stat === "perception") {
      return 1 + level / 5;
    }
    if (stat === "agility") {
      return 1 + level / 2;
    }
    if (stat === "charisma") {
      return 1 + level / 4;
    }
  }
  return 1;
};

const determineCharacterSkill = (
  skill:
    | "meleeWeapons"
    | "rangedWeapons"
    | "medicine"
    | "hacking"
    | "lockpicking"
    | "persuasion"
    | "psionics",
  type: "melee" | "ranged" | "psi",
  skillLevel: 1 | 2 | 3
): number => {
  if (type === "melee") {
    if (skill === "meleeWeapons") {
      return 1 + skillLevel;
    }
    if (skill === "medicine") {
      return 1 + skillLevel / 2;
    }
  }
  if (type === "ranged") {
    if (skill === "rangedWeapons") {
      return 1 + skillLevel;
    }
    if (skill === "medicine") {
      return 1 + skillLevel / 2;
    }
  }
  if (type === "psi") {
    if (skill === "psionics") {
      return 1 + skillLevel;
    }
    if (skill === "medicine") {
      return 1 + skillLevel / 2;
    }
  }
  return 1;
};

const createCharacter = (
  type: "melee" | "ranged" | "psi",
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
  skillLevel: 1 | 2 | 3,
  reputations: FactionStats[],
  equipment: CharacterEquipment,
  abilities: string[],
  inventory: string[],
  quests: string[],
  dialogue: DialogueTree
): Character => {
  return {
    name: "",
    stats: {
      level,
      experience: levelUpExperienceRequirements[level - 1],
      statPoints: 0,
      currentHealth: 10 + level * 2,
      maxHealth: 10 + level * 2,
      currentPsi: 3 + level / 2,
      maxPsi: 3 + level / 2,
      strength: determineCharacterStat("strength", type, level),
      stamina: determineCharacterStat("stamina", type, level),
      mind: determineCharacterStat("mind", type, level),
      perception: determineCharacterStat("perception", type, level),
      agility: determineCharacterStat("agility", type, level),
      charisma: determineCharacterStat("charisma", type, level),
      meleeWeapons: determineCharacterSkill("meleeWeapons", type, skillLevel),
      rangedWeapons: determineCharacterSkill("rangedWeapons", type, skillLevel),
      medicine: determineCharacterSkill("medicine", type, skillLevel),
      hacking: 1,
      lockpicking: 1,
      persuasion: 1,
      psionics: determineCharacterSkill("psionics", type, skillLevel),
      physicalDefense: 1,
      physicalOffense: 1,
      mentalDefense: 1,
      mentalOffense: 1,
      speed: 1,
      evasion: 1,
      critical: 1,
    },
    reputations,
    equipment,
    abilities,
    inventory,
    quests,
    dialogue,
  };
};
