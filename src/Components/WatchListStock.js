import React from 'react'

const WatchListStock = ({stock}) => {
    return (
        <div className=' ui card'>
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
            <div className="ui icon button">
                <i className="add icon"></i>
            </div>
        </div>
        
    )
}

export default WatchListStock