import React from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import getToFixedNumber from '../../helpers/getToFixedNumber';
import { mainCoinsTableHeaders } from './tableHeaders';
import { getDataByPage, jumpToPage } from '../../redux/reducers/coinsReducer';
import './coinsTable.scss';

const CoinsTable = ({ coinsList, activePage, resultsPerPage }) => {
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
        image: image,
        price: current_price,
        priceChange1h: short1h,
        priceChange24h: short24h,
        priceChange7d: short7d,
      };
    });
  };

  return <Table size='middle' pagination={false} columns={mainCoinsTableHeaders} dataSource={createTable(coinsList)} />;
};

const mapStateToProps = (state) => {
  const { coinsList, resultsPerPage, activePage } = state.coins;
  return {
    coinsList,
    resultsPerPage,
    activePage,
  };
};

export default connect(mapStateToProps, { getDataByPage, jumpToPage })(CoinsTable);
