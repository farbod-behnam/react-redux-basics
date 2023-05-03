import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { CounterState } from '../../store/counter-state.model';
import { ActionType } from '../../store/action-type.enum';
import store, { RootState } from '../../store/store';
import { counterActions } from '../../store/counter-slice';

export default function Counter() {


  const counter = useSelector<RootState, number>(state => state.counter.value);
  const showCounter = useSelector<RootState, boolean>(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // without slice
    // dispatch({ type: ActionType.increment });

    // with slice
    dispatch(counterActions.increment());
  }

  const decrementHandler = () => {
    // without slice
    // dispatch({ type: ActionType.decrement });

    // with slice
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    // without slice
    // dispatch({ type: ActionType.toggle });

    // with slice
    dispatch(counterActions.toggleCounter());
  };

  const increaseHandler = () => {
    // without slice
    // dispatch({ type: ActionType.increase, value: 10 })

    // with slice
    dispatch(counterActions.increase(10));
  }



  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

