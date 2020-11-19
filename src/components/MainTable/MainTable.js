import React from 'react';
import {getCoins, getCoinsList, getCurrencyData} from "../api/getData";
import {Table} from 'reactstrap';
import "./mainTable.scss"
import Paginator from "../Paginator/Paginator";
import Preloader from "../Preloader/Preloader";

class MainTable extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            currencyList: [],
            currencyTableData: [],
            currencyCount: 0,
            pagesNumber: 1,
            activePage: 1
        }
    }

    componentDidMount() {
        const {activePage} = this.state;
        this.getDataByPage(activePage)
    }


    getDataByPage = (page) => {
        getCoins(page, "usd").then(async (data) => {
            await getCoinsList().then((list) => {
                this.setState({
                    currencyList: list,
                    pagesNumber: Math.ceil(list.length / 100)
                })
            })
            this.setState({
                currencyList: data,
            })

            this.createTable(data)
        })
    }


    handleChangeRange = (nextPage) => () => {
        this.setState({
            loading: true,
            activePage: nextPage
        })
        this.getDataByPage(nextPage)
    }


    headers() {
        return (
            <thead>
            <tr>
                <th>#</th>
                <th>Coin</th>
                <th>Price</th>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
            </tr>
            </thead>
        )
    }


    createTable = (data) => {
        const currencyTableData = data.map((item, i) => {
            const {
                id, image, current_price, name,
                price_change_percentage_1h_in_currency,
                price_change_percentage_24h_in_currency,
                price_change_percentage_7d_in_currency
            } = item
            return (
                <tr key={id}>
                    <td>{i + 1}</td>
                    <td><img className='coinLogo' src={image} alt=""/>{name}</td>
                    <td>{current_price || '$0.00'}</td>
                    <td>{price_change_percentage_1h_in_currency || '?'}</td>
                    <td>{price_change_percentage_24h_in_currency || '?'}</td>
                    <td>{price_change_percentage_7d_in_currency || '?'}</td>
                </tr>
            )
        })
        this.setState({
            currencyTableData,
            loading: false
        })
    }


    render() {
        const {loading, currencyTableData, activePage, pagesNumber} = this.state
        return (
            <div className='tableContainer'>
                {loading ? <Preloader/> :
                    <Table striped className='mainTable'>
                        {this.headers()}
                        <tbody>
                        {currencyTableData}
                        </tbody>
                    </Table>}

                <Paginator activePage={activePage} pagesNumber={pagesNumber}
                           handleChangeRange={this.handleChangeRange}/>
            </div>
        )
    }

}

export default MainTable;