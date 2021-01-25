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
    watchlists: [],
    stocks: [],
    industries: [],
    loggedIn: false,
    error: false
  }

  //render component
  handleHome = () => <HomePage user={this.state.user} />
  renderLogin = () => <LoginForm name="Login Form" handleSubmit={this.handleLogin} error={this.state.error}/>
  renderSignUp = () => <SignUpForm name="SignUp Form" handleSubmit={this.handleSignUp} />
  handleWatchList = () => <Watchlist loggedIn={this.state.loggedIn} watchlists={this.state.watchlists} token={this.state.token}/>
  renderAccount = () => <UserShow user={this.state.user} token={this.state.token} handleLogout={this.handleLogout}/>
  handleCreateWLForm = () => <CreateWLForm token={this.state.token} user={this.state.user} handleSubmit={this.handleWatchListCreate}/>
  handleStockContainer = () => <StocksContainer stocks={this.state.stocks} loggedIn={this.state.loggedIn} token={this.state.token} watchlists={this.state.watchlists}
  industries={this.state.industries.filter(this.onlyUnique)} handleAddStock={this.handleAddStock}/>

  componentDidMount() {
    fetch('https://stockappapi1234.herokuapp.com/stocks')
      .then(res => res.json())
      .then(stocks => {
          this.setState({
              stocks: stocks.data
          }) 
          this.getIndustries()
      })


  }

  //getting unique industrie array:
onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  getIndustries() {
    this.state.stocks.map(stock => {
      this.setState({
        industries: [...this.state.industries, stock.attributes.industry]
      })
    })
  }


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
      if(data.message === 'Invalid username or password') {
        this.setState({error: true},() => {
          this.props.history.push('/login')
        })
      } else {
      this.setState({user: data.user, token: data.token, error: false, loggedIn: true}, () => {
        this.handleWatchlistFetch()
        this.props.history.push('/') 
      })}
    })
  }

  handleWatchlistFetch = () => {
    fetch('https://stockappapi1234.herokuapp.com/watch_lists', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.state.token}`
      }
    })
    .then(resp => resp.json())
    .then(watchlists => {
      this.setState({
        watchlists: watchlists.data
      })
    })
  }

  // handleAddStock = (stock, id) => {

  // }

  handleLogin = (info) => {
    this.handleAuthFetch(info,'https://stockappapi1234.herokuapp.com/api/v1/login')

  }

  handleSignUp = (info) => {
    this.handleAuthFetch(info,'https://stockappapi1234.herokuapp.com/api/v1/users')
  }


  handleLogout = () => {
      this.setState(() => {
        this.props.history.push('/')
      })
      this.setState({
        user: "", token: ""
      })
  }

  //watchlist functions

  handleWatchListCreate = (title) => {
    fetch('https://stockappapi1234.herokuapp.com/watch_lists', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorizaton': `Bearer ${this.props.token}`
        },
        body: JSON.stringify({
            watch_list: {
                title: title,
                user_id: this.state.user.data.id
            }
        })
    })
    .then(resp => resp.json())
    .then(watchlist => {
      let newWL = [...this.state.watchlists, watchlist.data]
      this.setState({
        watchlists: newWL
        // watchlists: this.state.watchlists.push(watchlist)
       
      }, () => { this.props.history.push('/watchlist')})
    })
    
}

  //end of watchlist functions

  


  render() {
  return (
      <div className='App'>
        {/* display differint bars depending on the loggedIn state */}
        {(this.state.user !== '') ? <UserBar /> :<NavBar />}
      <Switch>
      <Route exact path='/' component={this.handleHome}/>
      <Route exact path='/stocks' component={this.handleStockContainer} />
      <Route exact path='/watchlist' component={this.handleWatchList} />
      <Route exact path='/login' component={this.renderLogin} />
      <Route exact path='/signup' component={this.renderSignUp} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/CreateWLForm' component={this.handleCreateWLForm} />
      <Route exact path='/usershow' component={this.renderAccount} />
      </Switch>
      </div>
  );
}
}

export default withRouter(App)