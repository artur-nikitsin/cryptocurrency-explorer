import React from 'react';
import {getCoins, getCoinsList, getCoinData} from "../api/getData";
import {Table} from 'reactstrap';
import "./mainTable.scss"
import Preloader from "../Preloader/Preloader";
import Paginator from "../Paginator/Paginator";
import getToFixedNumber from "../../helpers/getToFixedNumber";
import returnColorClassName from "../../helpers/returnColorClassName";
import TableHeader from "../TableHeaders/TableHeaders";
import {mainCoinsTableHeaders} from "../FormatTemplates/tableHeaders";
import {NavLink} from 'react-router-dom';


class MainTable extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            coinList: [],
            coinTableData: [],
            pagesNumber: 1,
            resultPerPage: 100,

            activePage: 1,
            vsCurrency: "usd",
            orderBy: "market_cap_desc"
        }
    }

    componentDidMount() {
        const {activePage, vsCurrency, orderBy, resultPerPage} = this.state;
        this.getDataByPage({activePage, vsCurrency, orderBy, resultPerPage})
    }


    getDataByPage = ({page, vsCurrency, orderBy, resultPerPage}) => {
        getCoins({page, vsCurrency, orderBy, resultPerPage}).then(async (data) => {
            await getCoinsList().then((list) => {
                this.setState({
                    pagesNumber: Math.ceil(list.length / resultPerPage)
                })
            })
            this.setState({
                coinList: data,
            })
            this.createTable(data)
        })
    }


    handleGoToPage = (nextPage) => {
        const {vsCurrency, orderBy, resultPerPage} = this.state;
        this.setState({
            loading: true,
            activePage: nextPage
        })
        this.getDataByPage({page: nextPage, vsCurrency, orderBy, resultPerPage})
    }


    createTable = (data) => {
        const coinTableData = data.map((item, i) => {
            const {
                id, image, current_price, name,
                price_change_percentage_1h_in_currency,
                price_change_percentage_24h_in_currency,
                price_change_percentage_7d_in_currency
            } = item;

            const short1h = getToFixedNumber(price_change_percentage_1h_in_currency, 1)
            const short24h = getToFixedNumber(price_change_percentage_24h_in_currency, 1)
            const short7d = getToFixedNumber(price_change_percentage_7d_in_currency, 1)

            const {activePage, resultPerPage} = this.state;
            return (
                <tr key={id} onClick={() => getCoinData(id)}>
                    <td>{activePage === 1 ? activePage + i : (activePage - 1) * resultPerPage + i + 1}</td>
                    <td className='nameWithLogo'>
                        <img className='coinLogo' src={image} alt=""/>
                        <NavLink to={`/coins/${id}`}>{name}</NavLink>
                    </td>
                    <td>{current_price || '$0.00'}</td>
                    <td className={`${returnColorClassName(short1h)} collapsed`}>{short1h}</td>
                    <td className={`${returnColorClassName(short24h)} collapsed`}>{short24h}</td>
                    <td className={`${returnColorClassName(short7d)} collapsed`}>{short7d}</td>

                    <td className='minRow'>
                        <ul className='tableInfo'>
                            <li className={`${returnColorClassName(short1h)}`}>{`1h: ${short1h}`}</li>
                            <hr/>
                            <li className={`${returnColorClassName(short24h)}`}>{`24h: ${short24h}`}</li>
                            <hr/>
                            <li className={`${returnColorClassName(short7d)}`}>{`7d: ${short7d}`}</li>
                        </ul>
                    </td>

                </tr>
            )
        })
        this.setState({
            coinTableData,
            loading: false
        })
    }


    render() {

        const {loading, coinTableData, activePage, pagesNumber, currencyList} = this.state
        return (
            <div className='tableContainer'>
                {loading ? <Preloader/> :
                    <Table striped className='mainTable'>
                        <TableHeader template={mainCoinsTableHeaders}/>
                        <tbody>
                        {coinTableData}
                        </tbody>
                    </Table>}

                <Paginator activePage={activePage} pagesNumber={pagesNumber}
                           handleGoToPage={this.handleGoToPage}
                           currencyList={currencyList}/>
            </div>
        )
    }

}

export default MainTable;