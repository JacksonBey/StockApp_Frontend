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


  state = {
    user: "",
    token:""
  }

  //render component
  handleHome = () => <HomePage username={this.state.user.username} />
  renderLogin = () => <LoginForm name="Login Form" handleSubmit={this.handleLogin} />
  renderSignUp = () => <SignUpForm name="SignUp Form" handleSubmit={this.handleSignUp} />

  //auth
  handleAuthFetch= (info, request) => {
    fetch(request,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password
      })
    })
    .then(res => res.json())
    .then(data => ({user: data.user, token: data.token }, () => {
      console.log(this.state)
      this.props.history.push('/')
    }))
  }



  handleLogin = (info) => {
    console.log('login')
    this.handleAuthFetch(info,'http://localhost:3001/api/v1/login')

  }

  handleSignUp = (info) => {
    console.log('sign up')
    this.handleAuthFetch(info,'http://localhost:3001/api/v1/users')
  }





  render() {
  return (
    <Router>
      <div>
        {/* display differint bars depending on the loggedIn state */}
        {(this.state.loggedIn) ? <UserBar /> :<NavBar />}
      
      <Route exact path='/' component={this.handleHome}/>
      <Route exact path='/stocks' component={StocksContainer} />
      <Route exact path='/watchlist' component={Watchlist} />
      <Route exact path='/login' component={this.renderLogin} />
      <Route exact path='/signup' component={this.renderSignUp} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/CreateWLForm' component={CreateWLForm} />
      </div>
    </Router>
  );
}
}

