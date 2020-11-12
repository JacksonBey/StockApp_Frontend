import React from 'react'
import WatchListStock from './WatchListStock'

const WatchListComponent = ({ watchlist }) => {
    return (
        <div>
            <h3>{watchlist.title}</h3>
            <div className='ui cards'>
                {watchlist.stocks.map(stock => <WatchListStock key={stock.id} stock={stock} />)}
            </div>
        </div>
    )
}

export default WatchListComponent