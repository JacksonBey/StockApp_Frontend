import React, {Component} from 'react';
import Stock from '../Components/Stock'

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
                stocks: stocks.data
            })
        })
    }


    render() {
        console.log(this.state.stocks)
        return(
            <div>
            {this.state.stocks.map((stock, idx) => <Stock key={idx} stock={stock}/>)}
            </div>
         )
        }
}