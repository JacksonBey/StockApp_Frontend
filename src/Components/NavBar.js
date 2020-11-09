import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
    return(
        <div className='navbar'>
            <NavLink
                to= '/'
                exact
                style={link}
                activeStyle={{
                    background: 'lightgrey'
                }}
                >Home</NavLink>

            <NavLink
                to= '/stocks'
                exact
                style={link}
                activeStyle={{
                    background: 'lightgrey'
                }}
                >Stocks</NavLink> 

            <NavLink
                to= '/about'
                exact
                style={link}
                activeStyle={{
                    background: 'lightgrey'
                }}
                >About StockApp</NavLink> 

            <NavLink
                to= '/login'
                exact
                style={link}
                activeStyle={{
                    background: 'lightgrey'
                }}
                >Login</NavLink> 

            <NavLink
                to= '/signup'
                exact
                style={link}
                activeStyle={{
                    background: 'lightgrey'
                }}
                >Sign up</NavLink> 

            <NavLink
                to= '/watchlist'
                exact
                style={link}
                activeStyle={{
                    background: 'lightgrey'
                }}
                >Watchlist</NavLink> 

        </div>
    )
}


export default NavBar;