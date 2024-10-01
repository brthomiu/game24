export interface DialogueNode {
    text: string;
    result: DialogueTree | string;
}

export interface DialogueTree {
  nodes: DialogueNode[]
}
