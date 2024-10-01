import { meleeAbility } from "../types/ability";

export const abilityMeleeAttack = (modifier: number): meleeAbility => {
  return {
    name: "Melee Attack",
    type: "melee",
    description: "A basic melee strike.",
    psiCost: 0,
    cooldown: 1,
    physicalDamage: 1 + modifier,
    mentalDamage: 0,
    effects: [],
  };
};

export const abilityMeleeFocusAttack = (modifier: number): meleeAbility => {
    return {
      name: "Melee Attack",
      type: "melee",
      description: "A basic melee strike.",
      psiCost: 1,
      cooldown: 5,
      physicalDamage: 3 + modifier * 1.5,
      mentalDamage: 0,
      effects: [],
    };
  };
  