import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import { RootState } from '../../store/store';
import classes from './Header.module.css';

export default function Header() {

  const isAuthenticated = useSelector<RootState, boolean>(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

