import './App.css';
import HomePage from './Components/HomePage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './Components/NavBar';
import StocksContainer from './Containers/StocksContainer';

function App() {
  return (
    <Router>
      <div>
      <NavBar />
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/stocks' component={StocksContainer} />

      </div>
    </Router>
  );
}

export default App;
