import React, {Component} from 'react';

export default class UserShow extends Component {

    handleClick = () => {
        this.setState({
            edit: true
        })
    }

    state={
        edit:false,
        // username: "",
        // password: "",
        name: this.props.user.data.attributes.name,
        bio: this.props.user.data.attributes.bio,
        image: this.props.user.data.attributes.image
    }

    handleChange= (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    // handleSubmit=(e) => {
    //     e.preventDefault()
    //     this.props.handleSubmit(this.state)
    // }


    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/api/v1/users/${this.props.user.data.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.props.token}`
          },
          body: JSON.stringify({
            user: {
                name: this.state.name,
                bio: this.state.bio,
                image: this.state.image
            }
          })
        })
        .then(res => res.json())
        .then(data => {
        //   console.log(data)
          this.setState({
              edit: false
          })
        })
      }

    //   handleSignUp = (info) => {
    //     console.log('sign up')
    //     this.handleAuthFetch(info,'http://localhost:3001/api/v1/users')
    //   }
    
    render() {
        if (this.props.user.data !== undefined) {
        let {username, bio, image, name} = this.props.user.data.attributes
        return(
            <div className='ui container'>
                <h1>Hi {username}</h1>
                <img src={this.state.image} alt='userimg'/>
                <p>aka {this.state.name}</p>
                <p> bio: {this.state.bio}</p>
                <button onClick={this.props.handleLogout}>Logout</button>
                {
                    this.state.edit ? 
                    <form className='ui big form' onSubmit={this.handleSubmit}>
                        <div className='three fields'>
                            <div className='field'>
                                <label>name</label>
                                <input name="name" value={this.state.name} placeholder={name} onChange={this.handleChange}/>
                            </div>
                            <div className='field'>
                                <label>bio</label>
                                <input name="bio" value={this.state.bio} placeholder={bio} onChange={this.handleChange}/>
                            </div>
                            <div className='field'>
                                <label>Profile pic</label>
                                <input name="image" value={this.state.image} placeholder={image} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <input type="submit" value="submit" />
                    </form> : <button onClick={this.handleClick}>Edit account</button>
                }
            </div>
        )} else {
            return (<h1>user not found</h1>)
        }
    }
}

// {/* <label>Username
//                 <input name="username" value={this.state.username} placeholder={username} onChange={this.handleChange}/>
//                 </label>
//                 <br/> */}
//                 {/* <label> New Password
//                 <input name="password" value={this.state.password} onChange={this.handleChange}/>
//                 </label>
//                 <br/> */}