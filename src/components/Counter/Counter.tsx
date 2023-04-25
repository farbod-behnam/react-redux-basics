import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../store/state.model';
import { ActionType } from '../../store/action-type.enum';

export default function Counter()  {

  const counter = useSelector<State, number>(state => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: ActionType.increment });
  }

  const decrementHandler = () => {
    dispatch({ type: ActionType.decrement });
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

