import React, {Component} from 'react';
import { Link } from 'react-router-dom';



export default class Watchlist extends Component {
    render() {
        return(
            <div>
                <br/>
                <button>
                <Link to={'/CreateWLForm'}>createWL</Link>
                </button>
            </div>
        )
    }
}