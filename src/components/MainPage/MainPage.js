import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './mainPage.scss';
import PropTypes from 'prop-types';
import Preloader from '../Preloader/Preloader';
import Paginator from '../Paginator/Paginator';
import { getDataByPage, jumpToPage } from '../../redux/actions/actions';
import CoinsTable from '../CoinsTable/CoinsTable';

const MainPage = ({ loading, getDataByPage, resultsPerPage, activePage, vsCurrency, orderBy }) => {
  useEffect(() => {
    getDataByPage({ page: activePage, vsCurrency, orderBy, resultsPerPage });
  }, [resultsPerPage, activePage, vsCurrency, orderBy, getDataByPage]);

  return (
    <div className='tableContainer'>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <CoinsTable />
          <Paginator />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    loading,
    coinsList,
    coinsTableData,
    coinsNumber,
    resultsPerPage,
    activePage,
    vsCurrency,
    orderBy,
  } = state.coins;
  return {
    loading,
    coinsList,
    coinsTableData,
    coinsNumber,
    resultsPerPage,
    activePage,
    vsCurrency,
    orderBy,
  };
};

MainPage.propTypes = {
  loading: PropTypes.bool,
  resultsPerPage: PropTypes.number,
  activePage: PropTypes.number,
  vsCurrency: PropTypes.string,
  orderBy: PropTypes.string,
  getDataByPage: PropTypes.func,
};

MainPage.defaultProps = {
  loading: true,
  resultsPerPage: 10,
  activePage: '1',
  vsCurrency: 'usd',
  orderBy: '',
  getDataByPage: null,
};
export default connect(mapStateToProps, { getDataByPage, jumpToPage })(MainPage);
