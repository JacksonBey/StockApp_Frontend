import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import WatchListComponent from '../Components/WatchListComponent'



export default class Watchlist extends Component {


    showUsername = () => {

        if (!this.props.loggedIn) {
            return <div>
                <h1>Looks Like You Aren't Signed In</h1>
                <h3>Sign In To View / Create A Watchlist</h3>
                </div>
        } else {
            console.log(this.props.watchlists)
            return this.props.watchlists.map(watchlist => <WatchListComponent key={watchlist.id} watchlist={watchlist.attributes} />)
        }
    }


    render() {
        return(
            <div>
                <br/>
                <div>
                    {this.showUsername()}
                </div>
                <button>
                <Link to={'/CreateWLForm'}>createWL</Link>
                </button>
            </div>
        )
    }
}