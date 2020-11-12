import React, {Component} from 'react';

export default class AboutPage extends Component {
    render() {
        return(
            <div className='ui container'>
                <div className='ui two column very relaxed grid'>
                    <div className='column'>
                        <h1>Stock App</h1>
                        <p>
                            Is a basic web app made to monitor stocks and create watchlists for those stocks. 
                            A watchlist is a group of stocks with a specified notification condition. 
                        </p>
                        <p>
                            Is a basic web application designed to monitor and further track groups of stocks put together by users.
                            The application can be used to create watchlists of stocks, providing a user with an easy to use tracking expireience like many others.
                            Each watchlist can be cusomized with your favorite or most hated stocks so users can receive tailored notifications for a watchlist.
                        </p>
                    </div>
                    <div className='column'>
                        
                        <p>
                            StockApp, Inc. is an American financial services company headquartered in The Cloud. 
                            The company offers a website that allows people the ability to track stocks and ETFs through StockApp Financial.
                            The company has no storefront branches and operates entirely online without fees.
                        </p>
                        <p>
                            StockApp is a JBJR regulated stock-tracker, registered on the Internet, and is a member of the UNO Investor Tracking Corporation. 
                            The company's main source of revenue comes from... Well nowhere, but if we were to make money, it would come from interest earned on customers' cash balances, selling order information to high-frequency traders (a practice for which SEC opened a probe into the company in September 2020) and margin lending. 
                            The company has 2 users as of its most recent GITHUB push.
                        </p>
                        <p>
                            StockApp was founded in November 2020 by Jackson Beytebiere and Jasper Reed, who had previously built simple, but efficient apps for class. 
                            The company's name comes from its mission to "not confuse consumers". 
                            Reed and Beytebiere noted that creating a watchlist cost brokerages "zero dollars".
                        </p>
                    </div>
                </div>
                <div className='ui vertical divider'>
                    and
                </div>
            </div>
        )
    }
}