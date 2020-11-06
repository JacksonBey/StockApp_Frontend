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

function App() {
  return (
    <Router>
      <div>
      <NavBar />
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/stocks' component={StocksContainer} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/login' component={LoginForm} />

      </div>
    </Router>
  );
}

export default App;
