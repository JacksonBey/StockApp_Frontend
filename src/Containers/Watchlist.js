import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import WatchListComponent from '../Components/WatchListComponent'



export default class Watchlist extends Component {

    handleClick = (watch_list_stock) => {
        console.log(watch_list_stock)
        fetch(`http://localhost:3001/watch_list_stocks/${watch_list_stock.id}`, {
            method: 'DELETE'
    })
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //         'Authorization': `Bearer ${this.props.token}`
        //     }
        // })
        // .then(resp => resp.json())
        // .then(console.log)
    }


    showUsername = () => {

        if (!this.props.loggedIn) {
            return <div>
                <h1>Looks Like You Aren't Signed In</h1>
                <h3>Sign In To View / Create A Watchlist</h3>
                </div>
        } else {
            return (
                <div>
                {this.props.watchlists.map(watchlist => <WatchListComponent key={watchlist.id} watchlist={watchlist.attributes} handleClick={this.handleClick} />)}
                <br />
                <button>
                <Link to={'/CreateWLForm'}>create new Watchlist</Link>
                </button>
                </div>
            )}
    }


    render() {
        return(
            <div>
                <br/>
                <div>
                    {this.showUsername()}
                </div>
                <br/>
                {/* <button>
                <Link to={'/CreateWLForm'}>create new Watchlist</Link>
                </button> */}
            </div>
        )
    }
}