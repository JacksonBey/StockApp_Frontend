import React, {Component} from 'react';
import Stock from '../Components/Stock'

export default class StocksContainer extends Component {

    state = {
        stock_id: '',
        wl_id: '',
        fiters: [],
        sort: ''
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

    // sort functions
    handleClick = (e) => {
        this.setState({
            sort: e.target.value
        })
    }

    valueSort(a, b){
        return a.attributes.value - b.attributes.value
    }

    nameSort(a, b) {
        var textA = a.attributes.company.toUpperCase();
        var textB = b.attributes.company.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }

    sortStocks = (stocks) => {
        if (this.state.sort === 'value') {
            return stocks.sort((a, b) => this.valueSort(a, b))
        } else if (this.state.sort === 'alphabetical') {
            return stocks.sort((a, b) => this.nameSort(a, b))
        } else {
            return stocks
        }
    } 



    //end of sort




    render() {
        return(
            <div>
                {/* sort */}
                <div  className="ui buttons">
                    <button onClick={this.handleClick} value= 'value' className="ui button">By Value</button>
                    <button onClick={this.handleClick} value= 'alphabetical' className="ui button">Alphabetical</button>
                </div>
                {/* end of sort */}
                <h1>All Stocks</h1>
                <div className='ui cards'>
                    {this.sortStocks(this.props.stocks).map((stock, idx) => <Stock key={idx} stock={stock} handleSubmit={this.getStockId}/>)}
                </div>
            </div>
        )
    }
}