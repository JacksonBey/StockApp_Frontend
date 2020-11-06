import React, {Component} from 'react';

const url = 'http://localhost:5000/stocks'

export default class StocksContainer extends Component {


    state = {
        stocks: []
    }

    componentDidMount() {
        this.getStocks()
    }

    getStocks(){
        fetch(url)
        .then(res => res.json())
        .then(stocks => {
            this.setState({
                stocks
            })
        })
    }


    render() {
        return(
            <div>
                <h1>Hi from StocksContainer</h1>
                <p>stocks</p>
            </div>
        )
    }
}