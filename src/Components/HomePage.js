import React, {Component} from 'react';

export default class HomePage extends Component {
    render() {
        console.log(this.props)
        return(
            <div>
                <h1>Hi from HomePage</h1>
            </div>
        )
    }
}