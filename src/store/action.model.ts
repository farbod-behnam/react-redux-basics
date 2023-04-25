import { ActionType } from "./action-type.enum";

export class Action {
    type: ActionType;
    value?: number;

    constructor(type: ActionType, value?: number, ) {
        this.type = type;
        this.value = value;
    }
}