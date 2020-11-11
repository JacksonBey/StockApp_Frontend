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
        this.props.handleSubmit(this.state)
    }

    componentDidMount() {
        console.log('hi from login')
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
                {this.props.error ? <p style={{ color: 'red' }}>Invalid username or password</p> : null}
            </div>
        )
    }
}