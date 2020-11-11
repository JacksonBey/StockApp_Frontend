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
import UserShow from './Components/UserShow';




class App extends Component{


  state = {
    user: "",
    token:"",
    error: false
  }

  //render component
  handleHome = () => <HomePage user={this.state.user} />
  renderLogin = () => <LoginForm name="Login Form" handleSubmit={this.handleLogin} error={this.state.error}/>
  renderSignUp = () => <SignUpForm name="SignUp Form" handleSubmit={this.handleSignUp} />
  handleWatchList = () => <Watchlist user={this.state.user} />
  renderAccount = () => <UserShow user={this.state.user} handleLogout={this.handleLogout}/>

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
      console.log(data.message)
      if(data.message === 'Invalid username or password') {
        this.setState({error: true},() => {
          this.props.history.push('/login')
        })
      } else {
      this.setState({user: data.user, token: data.token, error: false}, () => {
        this.props.history.push('/')
      })}
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


  handleLogout = () => {
    console.log('logout')
      this.setState(() => {
        this.props.history.push('/')
      })
      this.setState({
        user: "", token: ""
      })
      // console.log(this.state)
}


  render() {
  return (
      <div className='App'>
        {/* display differint bars depending on the loggedIn state */}
        {(this.state.user !== '') ? <UserBar /> :<NavBar />}
      <Switch>
      <Route exact path='/' component={this.handleHome}/>
      <Route exact path='/stocks' component={StocksContainer} />
      <Route exact path='/watchlist' component={this.handleWatchList} />
      <Route exact path='/login' component={this.renderLogin} />
      <Route exact path='/signup' component={this.renderSignUp} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/CreateWLForm' component={CreateWLForm} />
      <Route exact path='/usershow' component={this.renderAccount} />
      </Switch>
      </div>
  );
}
}

export default withRouter(App)