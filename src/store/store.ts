import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth-slice';
import { counterReducer } from './counter-slice';


const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});

export type RootState = ReturnType<typeof store.getState>

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