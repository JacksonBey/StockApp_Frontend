import './App.css';
import HomePage from './Components/HomePage';
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Switch
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




class App extends Component{


  state = {
    user: "",
    token:""
  }

  //render component
  handleHome = () => <HomePage user={this.state.user} />
  renderLogin = () => <LoginForm name="Login Form" handleSubmit={this.handleLogin} />
  renderSignUp = () => <SignUpForm name="SignUp Form" handleSubmit={this.handleSignUp} />

  //auth
  handleAuthFetch = (info, request) => {
    fetch(request, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: info.username,
          password: info.password
        }
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({user: data.user, token: data.token}, () => {
        console.log(this.state)
        console.log(this.props.history)
        this.props.history.push('/')
      })
    })
  }



  handleLogin = (info) => {
    console.log(info)
    this.handleAuthFetch(info,'http://localhost:3001/api/v1/login')

  }

  handleSignUp = (info) => {
    console.log('sign up')
    this.handleAuthFetch(info,'http://localhost:3001/api/v1/users')
  }


  componentDidMount() {
    console.log('hi from App component')
  }


  render() {
  return (
      <div className='App'>
        {/* display differint bars depending on the loggedIn state */}
        {(this.state.user !== '') ? <UserBar /> :<NavBar />}
      <Switch>
      <Route exact path='/' component={this.handleHome}/>
      <Route exact path='/stocks' component={StocksContainer} />
      <Route exact path='/watchlist' component={Watchlist} />
      <Route exact path='/login' component={this.renderLogin} />
      <Route exact path='/signup' component={this.renderSignUp} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/CreateWLForm' component={CreateWLForm} />
      </Switch>
      </div>
  );
}
}

export default withRouter(App)