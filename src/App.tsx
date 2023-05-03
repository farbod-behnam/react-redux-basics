import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Auth from './components/Auth/Auth';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';
import UserProfile from './components/UserProfile/UserProfile';
import { RootState } from './store/store';

export default function App() {

  const isAuthenticated = useSelector<RootState, boolean>(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

