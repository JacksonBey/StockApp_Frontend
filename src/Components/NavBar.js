import React from 'react';
import { NavLink } from 'react-router-dom';

// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }

const NavBar = () => {
    return(
        <div className='ui secondary pointing menu'>
            <NavLink
                className='ui item'
                to= '/'
                exact
                activeStyle={{
                    background: 'lightgrey'
                }}
                >Home</NavLink>

            <NavLink
                className='ui item'
                to= '/stocks'
                exact
                activeStyle={{
                    background: 'lightgrey'
                }}
                >Stocks</NavLink> 

            <NavLink
                className='ui item'
                to= '/about'
                exact
                activeStyle={{
                    background: 'lightgrey'
                }}
                >About StockApp</NavLink> 

            <NavLink
                className='ui item'
                to= '/login'
                exact
                activeStyle={{
                    background: 'lightgrey'
                }}
                >Login</NavLink> 

            <NavLink
                className='ui item'
                to= '/signup'
                exact
                activeStyle={{
                    background: 'lightgrey'
                }}
                >Sign up</NavLink> 

            <NavLink
                className='ui item'
                to= '/watchlist'
                exact
                activeStyle={{
                    background: 'lightgrey'
                }}
                >Watchlist</NavLink> 

        </div>
    )
}


export default NavBar;