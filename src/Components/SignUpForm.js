import React, {Component} from 'react';

const url = 'http://localhost:5000/users'

export default class SignUpForm extends Component {


    state={
        username: "",
        password: "",
        // cPassword: "",
        // name: "",
        // bio: "",
        // image: ""
    }

    handleChange= (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit=(e) => {
        e.preventDefault()
        //props.handlelogin here
        // console.log('username: ', this.state.username)
        // console.log('password: ', this.state.password)
        // console.log('cPassword: ', this.state.cPassword)
        // console.log('name: ', this.state.name)
        // console.log('bio: ', this.state.bio)
        // console.log('image: ', this.state.image)
        // fetch('http://localhost:3001/api/v1/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         user: {
        //             username: this.state.username,
        //             password: this.state.password,
        //             name: this.state.name,
        //             bio: this.state.bio,
        //             image: this.state.image
        //         }
        //     })
        // })
        // .then(resp => resp.json())
        // .then(user => console.log(user.user))
        this.props.handleSubmit(this.state)

    }
    // :name, :username, :password, :password_confirmation, :bio, :image)

    render() {
        console.log(this.props)
        return(
            <div>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Username
                    <input name="username" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>Password
                    <input name="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <br/>
                    {/* <label>Confirm Password
                    <input name="cPassword" value={this.state.cPassword} onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>bio
                    <input name="bio" value={this.state.bio} onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>name
                    <input name="name" value={this.state.name} onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>Profile pic
                    <input name="image" value={this.state.image} onChange={this.handleChange}/>
                    </label>
                    <br/> */}
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}