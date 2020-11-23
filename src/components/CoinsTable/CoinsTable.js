import React from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import createTable from './createTable';
import MainCoinsTableHeaders from './MainCoinsTableHeaders';
import { setNewOrderBy } from '../../redux/actions/actions';
import './coinsTable.scss';

const CoinsTable = ({ coinsList, activePage, resultsPerPage, vsCurrency, orderBy, setNewOrderBy }) => {
  return (
    <Table
      size='middle'
      pagination={false}
      columns={MainCoinsTableHeaders({ orderBy, setNewOrderBy })}
      dataSource={createTable({ coinsList, activePage, resultsPerPage, vsCurrency })}
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
