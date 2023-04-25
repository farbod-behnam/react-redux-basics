import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../store/state.model';
import { ActionType } from '../../store/action-type.enum';

export default function Counter()  {

  const counter = useSelector<State, number>(state => state.counter);
  const showCounter = useSelector<State, boolean>(state => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: ActionType.increment });
  }

  const decrementHandler = () => {
    dispatch({ type: ActionType.decrement });
  }

  const increaseHandler = () => {
    dispatch({ type: ActionType.increase, value: 10 })
  }

  const toggleCounterHandler = () => {
    dispatch({ type: ActionType.toggle });
  };

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

