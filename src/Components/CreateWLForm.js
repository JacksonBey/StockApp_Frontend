import React, {Component} from 'react';

const usersurl = 'http://localhost:3001//watch_lists'
// const watchlisturl = 'http://localhost:5000/watchlist'

export default class CreateWLForms extends Component {

    state = {
        users: [],
        selecteduser: '',
        title: '',
        showMenu: false
    }


    componentDidMount() {
        fetch(usersurl)
        .then(res => res.json())
        .then(users => {
            console.log(users)
            this.setState({
                users: users.data
            })
        })
        console.log(this.state.users)
    }

    handleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    handleSelect = (user) => {
        this.setState({
            selecteduser: user
        })
    }

    handleChange= (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('user: ', this.state.selecteduser)
        console.log('title: ', this.state.title)
        //submit fetch

        // fetch(watchlisturl, {
        //     method: 'POST',
        //     headers: {'Accept': 'application/json',
        //     'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         user: this.state.selecteduser,
        //         title: this.state.title
        //     })

        // })
        // .then(res => res.json())
        // .then(watchlist => {
        //     console.log(watchlist)
        // })

        //fetch not working yet
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

{/* <button>{user.attributes.name} dfsa</button> */}

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