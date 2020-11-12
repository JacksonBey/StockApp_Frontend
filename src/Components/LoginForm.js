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
            <div className='ui container'>
                <form className='ui big form' onSubmit={this.handleSubmit}>
                    <div className='two fields'>
                        <div className='field'>
                            <label>Username</label>
                            <input type='text' name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                        </div>
                        <div className='field'>
                            <label>Password</label>
                            <input type='password' name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <input className="ui button" type="submit" value="Log In" />
                </form>
                {this.props.error ? <p style={{ color: 'red' }}>Invalid username or password</p> : null}
            </div>
        )
    }
}