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
        this.props.handleSubmit(this.state.title)
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

