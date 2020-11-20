import React from 'react';
import {NavLink} from "react-router-dom";

class CoinDetails extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    render() {
        const {ids} = this.props.match.params;
        const {currency} = this.props

        return (
            <div>
                <NavLink to="/">Return to full list</NavLink>
                <coingecko-coin-compare-chart-widget coin-ids={ids} currency="usd"
                                                     locale="en"/>
            </div>
        )
    }

}

export default CoinDetails;