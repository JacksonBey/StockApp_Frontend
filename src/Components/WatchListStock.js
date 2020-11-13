import React from 'react'

const WatchListStock = ({stock, handleClick, watchliststocks}) => {
    return (
        <div className='ui card'>
            <div className='content'>
                <div className='header'>{stock.company}</div>
            </div>
            <div className='content'>
                <h4 className='ui sub header'>Value</h4>
                <p>{stock.value}</p>
            </div>
            <div className='content'>
                <h4 className='ui sub header'>Industry</h4>
                <p>{stock.industry}</p>
            </div>
            <div className="ui icon button" onClick={() => {
                let deleteId = watchliststocks.filter( wls => wls.id === stock.id)
                handleClick(deleteId)
            }}>
                <i className="minus icon"></i>
            </div>
        </div>
        
    )
}

export default WatchListStock