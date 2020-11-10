import React, {Component} from 'react';

export default class LoginForm extends Component {

    state={
        username: "",
        password: ""
    }

    handleChange= (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit=(e) => {
        e.preventDefault()
        //props.handlelogin here
        console.log('username: ', this.state.username)
        console.log('password: ', this.state.password)
        // fetch('http://localhost:3001/api/v1/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         user: {
        //             username: this.state.username,
        //             password: this.state.password
        //         }
        //     })
        // })
        // .then(resp => resp.json())
        // .then(user => console.log(user.user))
        this.props.handleSubmit(this.state)
    }


    render() {
        return(
            <div>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Username
                    <input name="username" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <label>Password
                    <input name="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}