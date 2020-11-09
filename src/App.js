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
import { Component } from 'react';
import UserBar from './Components/UserBar';




export default class App extends Component{

  // show wether logged in or not
  state = {
    loggedIn: false
  }

  // check if logged in, change state
  // componentDidUpdate() {
  //   this.setState({
  //     loggedIn: true
  //   })
  // }


  render() {
  return (
    <Router>
      <div>
        {/* display differint bars depending on the loggedIn state */}
        {(this.state.loggedIn) ? <UserBar /> :<NavBar />}
      
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/stocks' component={StocksContainer} />
      <Route exact path='/watchlist' component={Watchlist} />
      <Route exact path='/login' component={LoginForm} />
      <Route exact path='/signup' component={SignUpForm} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/CreateWLForm' component={CreateWLForm} />
      </div>
    </Router>
  );
}
}

