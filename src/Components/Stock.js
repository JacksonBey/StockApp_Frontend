import React from 'react';

const Stocks = (props) => {
        return(
            <div className='ui card'>
                <div className='content'>
                    <div className='header'>{props.stock.attributes.company}</div>
                </div>
                <div className='content'>
                    <h4 className='ui sub header'>Value</h4>
                    <p>{props.stock.attributes.value}</p>
                </div>
                <div className='content'>
                    <h4 className='ui sub header'>Industry</h4>
                    <p>{props.stock.attributes.industry}</p>
                </div>
                <div className="ui icon button" onClick={() => props.handleSubmit(props.stock)}>
                    <i className="add icon"></i>
                </div>
            </div>
        )
    }

export default Stocks