import React from 'react';

const Stocks = (props) => {
        console.log(props)
        return(
            <div>
                <br/>
                <h3>id: {props.stock.id}</h3>
                <h3>type: {props.stock.type}</h3>
                <p>Value: {props.stock.attributes.value}</p>
                <br/>
            </div>
        )
    }

export default Stocks