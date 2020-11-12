import React, {Component} from 'react';
import Stock from '../Components/Stock'

export default class StocksContainer extends Component {

    state = {
        stock_id: '',
        wl_id: ''
    }

    getStockId = (stock) => {
        if(!this.props.loggedIn) {
            alert('please log in to interact with stocks')
        } else {
            console.log(stock.id)
            // fetch('http://localhost:3001/watch_list_stocks', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json',
            //         'Authorization': `Bearer ${this.props.token}`
            //     },
            //     body: JSON.stringify({
            //         watch_list_stock: {
            //             stock_id: stock.id,
            //             watch_list_id: 
            //         }
            //     })
            // })
            // .then(resp => resp.json())
            // .then(console.log)
        }
    }

    getWlId = () => {
        return (
            <div>

            </div>
        )
    }

    render() {
        return(
            <div>
                <h1>All Stocks</h1>
                <div className='ui cards'>
                    {this.props.stocks.map((stock, idx) => <Stock key={idx} stock={stock} handleSubmit={this.getStockId}/>)}
                </div>
            </div>
        )
    }
}