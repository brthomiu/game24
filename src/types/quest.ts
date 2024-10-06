export interface Quest {
  name: string;
  requester: string;
  assignee: string;
  goals: Goal[];
  completed: boolean;
}

export interface Goal {
  name: string;
  type: "delivery" | "kill" | "hack";
  description: string;
  completed: boolean;
}

export interface DeliveryGoal extends Goal {
  type: "delivery";
  item: string;
}

export interface KillGoal extends Goal {
  type: "kill";
  target: string;
}

export interface HackGoal extends Goal {
  type: "hack";
  target: string;
}
