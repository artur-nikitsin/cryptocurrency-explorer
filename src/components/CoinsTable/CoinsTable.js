import React from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getToFixedNumber from '../../helpers/getToFixedNumber';
import MainCoinsTableHeaders from './MainCoinsTableHeaders';
import { setNewOrderBy } from '../../redux/actionGenerators/actionGenerators';
import './coinsTable.scss';

// eslint-disable-next-line no-shadow
const CoinsTable = ({ coinsList, activePage, resultsPerPage, vsCurrency, orderBy, setNewOrderBy }) => {
  const createTable = (data) => {
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

      return {
        key: id,
        number: activePage === 1 ? activePage + i : (activePage - 1) * resultsPerPage + i + 1,
        coin: name,
        image,
        price: current_price,
        priceChange1h: short1h,
        priceChange24h: short24h,
        priceChange7d: short7d,
        priceChange1hNumber: price_change_percentage_1h_in_currency,
        priceChange24hNumber: price_change_percentage_24h_in_currency,
        priceChange7dNumber: price_change_percentage_7d_in_currency,
        vsCurrency,
      };
    });
  };

  return (
    <Table
      size='middle'
      pagination={false}
      columns={MainCoinsTableHeaders({ orderBy, setNewOrderBy })}
      dataSource={createTable(coinsList)}
    />
  );
};

const mapStateToProps = (state) => {
  const { coinsList, resultsPerPage, activePage, vsCurrency, orderBy } = state.coins;
  return {
    coinsList,
    resultsPerPage,
    activePage,
    vsCurrency,
    orderBy,
  };
};

CoinsTable.propTypes = {
  coinsList: PropTypes.arrayOf(PropTypes.object),
  resultsPerPage: PropTypes.number,
  activePage: PropTypes.number,
  vsCurrency: PropTypes.string,
  orderBy: PropTypes.string,
  setNewOrderBy: PropTypes.func,
};

CoinsTable.defaultProps = {
  coinsList: [],
  resultsPerPage: 10,
  activePage: '1',
  vsCurrency: 'usd',
  orderBy: '',
  setNewOrderBy: null,
};
export default connect(mapStateToProps, { setNewOrderBy })(CoinsTable);
