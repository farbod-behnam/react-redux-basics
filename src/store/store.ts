import { createStore } from "redux";
import { ActionType } from "./action-type.enum";
import { Action } from "./action.model";
import { State } from "./state.model";

const counterReducer = (state: State = {counter: 0}, action: Action) => {

    if (action.type === ActionType.increment) {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === ActionType.decrement) {
        return {
            counter: state.counter - 1
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;