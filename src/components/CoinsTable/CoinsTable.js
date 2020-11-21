import React from 'react';
import { Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCoinData } from '../api/getData';
import './coinsTable.scss';
import getToFixedNumber from '../../helpers/getToFixedNumber';
import returnColorClassName from '../../helpers/returnColorClassName';
import TableHeader from '../TableHeaders/TableHeaders';
import { mainCoinsTableHeaders } from '../FormatTemplates/tableHeaders';
import { getDataByPage, jumpToPage } from '../../redux/reducers/coinsReducer';

class CoinsTable extends React.PureComponent {
  createTable = (data) => {
    const { activePage, resultsPerPage } = this.props;
    return data.map((item, i) => {
      const {
        id,
        image,
        current_price,
        name,
        price_change_percentage_1h_in_currency,
        price_change_percentage_24h_in_currency,
        price_change_percentage_7d_in_currency,
      } = item;

      const short1h = getToFixedNumber(price_change_percentage_1h_in_currency, 1);
      const short24h = getToFixedNumber(price_change_percentage_24h_in_currency, 1);
      const short7d = getToFixedNumber(price_change_percentage_7d_in_currency, 1);

      return (
        <tr key={id}>
          <td>{activePage === 1 ? activePage + i : (activePage - 1) * resultsPerPage + i + 1}</td>
          <td className='nameWithLogo'>
            <img className='coinLogo' src={image} alt='' />
            <NavLink to={`/coins/${id}`}>{name}</NavLink>
          </td>
          <td>{current_price || '$0.00'}</td>
          <td className={`${returnColorClassName(short1h)} collapsed`}>{short1h}</td>
          <td className={`${returnColorClassName(short24h)} collapsed`}>{short24h}</td>
          <td className={`${returnColorClassName(short7d)} collapsed`}>{short7d}</td>

          <td className='minRow'>
            <ul className='tableInfo'>
              <li className={`${returnColorClassName(short1h)}`}>{`1h: ${short1h}`}</li>
              <hr />
              <li className={`${returnColorClassName(short24h)}`}>{`24h: ${short24h}`}</li>
              <hr />
              <li className={`${returnColorClassName(short7d)}`}>{`7d: ${short7d}`}</li>
            </ul>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { coinsList } = this.props;
    return (
      <Table striped className='coinsTable'>
        <TableHeader template={mainCoinsTableHeaders} />
        <tbody>{this.createTable(coinsList)}</tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  const { coinsList, resultsPerPage, activePage } = state.coins;
  return {
    coinsList,
    resultsPerPage,
    activePage,
  };
};

export default connect(mapStateToProps, { getDataByPage, jumpToPage })(CoinsTable);
