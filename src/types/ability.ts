export interface Ability {
    name: string;
    type: string;
    description: string;
    psiCost: number;
    cooldown: number;
    effects: string[];
}

export interface meleeAbility extends Ability {
    type: "melee";
    physicalDamage: number;
    mentalDamage: number;
}

export interface rangedAbility extends Ability {
    type: "ranged";
    physicalDamage: number;
    mentalDamage: number;
}

export interface psiAbility extends Ability {
    type: "psi";
    physicalDamage: number;
    mentalDamage: number;
    healing: number
}

