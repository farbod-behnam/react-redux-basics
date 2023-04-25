import { ActionType } from "./action-type.enum";

export class Action {
    type: ActionType;

    constructor(type: ActionType) {
        this.type = type;
    }
}