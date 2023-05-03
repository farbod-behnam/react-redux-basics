import { CounterState } from "./counter-state.model";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialCounterState = new CounterState(0, true);

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment: (state): CounterState => {

            // state.counter++;
            return {
                ...state,
                value: state.value + 1,
            }
        },
        decrement: (state): CounterState => {

            // state.counter--;
            return {
                ...state,
                value: state.value - 1,
            }
        },
        increase: (state, action: PayloadAction<number>): CounterState => {
            // state.counter = state.counter + action.payload;
            return {
                ...state,
                value: state.value + action.payload,
            }
        },
        toggleCounter: (state): CounterState => {
            // state.showCounter = !state.showCounter;
            return {
                ...state,
                showCounter: !state.showCounter,
            }
        }
    }
});

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;