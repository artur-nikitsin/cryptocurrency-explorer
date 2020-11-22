import React, { useRef } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import getToFixedNumber from '../../helpers/getToFixedNumber';
import { MainCoinsTableHeaders } from './MainCoinsTableHeaders';
import { setNewOrderBy } from '../../redux/actionGenerators/actionGenerators';
import './coinsTable.scss';

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
        image: image,
        price: current_price,
        priceChange1h: short1h,
        priceChange24h: short24h,
        priceChange7d: short7d,
        priceChange1hNumber: price_change_percentage_1h_in_currency,
        priceChange24hNumber: price_change_percentage_24h_in_currency,
        priceChange7dNumber: price_change_percentage_7d_in_currency,
        vsCurrency: vsCurrency,
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

export default connect(mapStateToProps, { setNewOrderBy })(CoinsTable);
