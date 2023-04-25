import { createStore } from "redux";
import { ActionType } from "./action-type.enum";
import { Action } from "./action.model";
import { State } from "./state.model";

const initialState = new State(0, true);

const counterReducer = (state: State = initialState, action: Action): State => {


    if (action.type === ActionType.increment) {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }

    if (action.type === ActionType.decrement) {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }

    if (action.type === ActionType.increase && action.value) {

        return {
            counter: state.counter + action.value,
            showCounter: state.showCounter
        };
    }

    if (action.type === ActionType.toggle) {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        };
    }

    return initialState;
}

const store = createStore(counterReducer);

export default store;