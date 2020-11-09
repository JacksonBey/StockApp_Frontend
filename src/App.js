import './App.css';
import HomePage from './Components/HomePage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './Components/NavBar';
import StocksContainer from './Containers/StocksContainer';
import AboutPage from './Components/AboutPage';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
import Watchlist from './Containers/Watchlist';

import CreateWLForm from './Components/CreateWLForm';

function App() {
  return (
    <Router>
      <div>
      <NavBar />
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/stocks' component={StocksContainer} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/login' component={LoginForm} />
      <Route exact path='/signup' component={SignUpForm} />
      <Route exact path='/watchlist' component={Watchlist} />


      <Route exact path='/CreateWLForm' component={CreateWLForm} />
      </div>
    </Router>
  );
}

export default App;
