import { useSelector } from 'react-redux'
import './App.css'
import Auth from './components/Auth'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage';

function App() {

  const isLogin = useSelector(state => state.authLogin.isLogin);
  console.log(isLogin);
  return (
      <>
          <NavBar />
          {!isLogin && <Auth />}
          {isLogin && <HomePage/>}
      </>
  );
}

export default App
