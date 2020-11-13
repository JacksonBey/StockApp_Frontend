import React, { Component } from 'react'
import WatchListStock from './WatchListStock'

class WatchListComponent extends Component{

    state = {
        stocks: this.props.watchlist.stocks
    }

    handleClick = (stock) => {
        console.log('hi')
        console.log(stock)

        let nstocks = this.state.stocks.filter(s => s.id !== stock.id)
        console.log(nstocks)
        this.setState({
            stocks: nstocks
        })
        this.props.handleClick(stock)
    }


    render() {
    return (
        <div>
            <br/>
            <h3>{this.props.watchlist.title}</h3>
            <div className='ui cards'>
                {this.state.stocks.map(stock => <WatchListStock key={stock.id} stock={stock} handleClick={() => this.handleClick(stock)} watchliststocks={this.state.stocks}/>)}
            </div>
        </div>
    )}
}

export default WatchListComponent