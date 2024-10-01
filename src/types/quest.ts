export interface Quest {
  name: string;
  requester: string;
  assignee: string;
  type: string;
  goals: Goal[];
  completed: boolean;
}

export interface Goal {
  name: string;
  description: string;
  completed: boolean;
}

export interface DeliveryQuest extends Quest {
  type: "delivery";
  item: string;
}

export interface KillQuest extends Quest {
  type: "kill";
  target: string;
}

export interface HackQuest extends Quest {
  type: "hack";
  target: string;
}
