import React, {Component} from 'react';

const url = 'http://localhost:5000/users'

export default class SignUpForm extends Component {


    state={
        username: "",
        password: "",
        cPassword: "",
        name: "",
        bio: "",
        image: ""
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
        console.log('cPassword: ', this.state.cPassword)
        console.log('name: ', this.state.name)
        console.log('bio: ', this.state.bio)
        console.log('image: ', this.state.image)

        fetch(url, {
            method: 'POST',
            headers: {'Accept': 'application/json',
            'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                password_confirmation: this.state.cPassword,
                name: this.state.name,
                bio: this.state.bio,
                image: this.state.image
            })

        })
        .then(res => res.json())
        .then(user => {
            console.log(user)
        })

    }
    // :name, :username, :password, :password_confirmation, :bio, :image)

    render() {
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
                    <label>Confirm Password
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
                    <br/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}