import React, {Component} from 'react';

export default class UserShow extends Component {





    render() {
        if (this.props.user.data !== undefined) {
        let {username, bio, image, name} = this.props.user.data.attributes
        return(
            <div>
                <h1>Hi {username}</h1>
                <button onClick={this.props.handleLogout}>Logout</button>
            </div>
        )} else {
            return <div>user not found</div>
        }
    }
}