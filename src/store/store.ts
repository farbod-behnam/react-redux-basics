import { ActionType } from "./action-type.enum";
import { Action } from "./action.model";
import { State } from "./state.model";
import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit'

const initialState = new State(0, true);

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {

            state.counter++;

        },
        decrement: (state) => {

            state.counter--;

        },
        increase: (state, action: PayloadAction<number>) => {
            state.counter = state.counter + action.payload;

        },
        toggleCounter(state) {

            state.showCounter = !state.showCounter;

        }
    }
});



const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;


// ============================
// without using slice
// ============================
// const counterReducer = (state: State = initialState, action: Action): State => {


//     if (action.type === ActionType.increment) {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === ActionType.decrement) {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === ActionType.increase && action.value) {

//         return {
//             counter: state.counter + action.value,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === ActionType.toggle) {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         };
//     }

//     return initialState;
// }

// const store = createStore(counterReducer);

// export default store;