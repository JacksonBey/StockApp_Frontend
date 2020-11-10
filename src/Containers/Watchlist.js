import React, {Component} from 'react';
import { Link } from 'react-router-dom';



export default class Watchlist extends Component {

    showUsername = () => {
        if (this.props.user.data === undefined) {
            return <div>
                <h1>Looks Like You Aren't Signed In</h1>
                <h3>Sign In To Create A Watchlist</h3>
                </div>
        } else if (this.props.user.data.attributes.watch_lists === undefined) {
            return <div>
                <h1>Looks Like You Don't Have Any Watch Lists!</h1>
                <h3>Would you like to create one?</h3>
                </div>
        } else {
            console.log(this.props)
            let watchlists = this.props.user.data.attributes.watch_lists
            return watchlists.map(list => <li>{list.title}</li>)
        }
    }


    render() {
        return(
            <div>
                <br/>
                {this.showUsername()}
                <button>
                <Link to={'/CreateWLForm'}>createWL</Link>
                </button>
            </div>
        )
    }
}