import React from 'react'
import WatchListStock from './WatchListStock'

const WatchListComponent = ({ watchlist, handleClick }) => {
    console.log(watchlist)
    return (
        <div>
            <br/>
            <h3>{watchlist.title}</h3>
            <div className='ui cards'>
                {watchlist.stocks.map(stock => <WatchListStock key={stock.id} stock={stock} handleClick={handleClick} watchliststocks={watchlist.watch_list_stocks}/>)}
            </div>
        </div>
    )
}

export default WatchListComponent