import React, {Component} from 'react';
import Stock from '../Components/Stock'

export default class StocksContainer extends Component {

    state = {
        stock_id: '',
        wl_id: '',
        filter: 'all',
        sort: '',
        stocks: this.props.stocks
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
    handleSClick = (e) => {
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

    // filter functions


    handleFClick = (e) => {
        console.log(e.target.value)
        this.setState({
            filter: e.target.value
        })
    }

    filterStocks = (stocks) => {
        if(this.state.filter === 'all') {
            return stocks
        } else {
            return stocks.filter(stock => stock.attributes.industry === this.state.filter)
        }
    }

    //end of filter



    render() {
        let stocks = this.filterStocks(this.props.stocks)
        return(
            <div>
                {/* sort */}
                <div  className="ui buttons">
                    <button onClick={this.handleSClick} value= 'value' className="ui button">By Value</button>
                    <button onClick={this.handleSClick} value= 'alphabetical' className="ui button">Alphabetical</button>
                </div>
                {/* end of sort */}
                <select name="filter" multiple="" className="ui fluid dropdown" onChange={this.handleFClick} >
                        <option value='all' onClick={this.handleFClick} >All</option>
                    {this.props.industries.map((industry, idx) => {
                        return <option key={idx} value={industry}>{industry}</option>
                    })}
    
                </select>
                
                {/* filter */}


                {/* end of filter */}
                <h1>All Stocks</h1>
                <div className='ui cards'>
                    {this.sortStocks(stocks).map((stock, idx) => <Stock key={idx} stock={stock} handleSubmit={this.getStockId}/>)}
                </div>
            </div>
        )
    }
}