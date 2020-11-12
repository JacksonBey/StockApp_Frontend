import React, {Component} from 'react';

export default class CreateWLForms extends Component {

    state = {
        title: '',
        showMenu: false
    }

    handleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    handleChange= (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('title: ', this.state.title)
        fetch('http://localhost:3001/watch_lists', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorizaton': `Bearer ${this.props.token}`
            },
            body: JSON.stringify({
                watch_list: {
                    title: this.state.title,
                    user_id: this.props.user.data.id
                }
            })
        })
        .then(resp => resp.json())
        .then(console.log)
        
    }

    render() {
        
        return(
            <div>
                <h1>Create A Watchlist</h1>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Watchlist Title
                        <br/>
                    <input name="title" value={this.state.title} onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

// {/* <button>{user.attributes.name} dfsa</button> */}

// <h3>Select User:</h3>
// <div>
//     <button onClick={this.handleMenu}>
//         {(this.state.showMenu) ? <p>&#x2193; Show Users </p> : <p>&#x2192; Show Users </p>}
//     </button>
    
//     <div className="menu" >
// {(this.state.showMenu) ? this.state.users.map((user, idx) => 
// <div key={idx} >
// <button onClick={() => this.handleSelect(user)}>{(idx+1) + '. '}{user.attributes.name}{(user === this.state.selecteduser) ? ' X' : null}</button>
// </div>
// )
//          : null
//     }
//     </div>