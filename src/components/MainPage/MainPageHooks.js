import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './mainPage.scss';
import Preloader from '../Preloader/Preloader';
import Paginator from '../Paginator/Paginator';
import { getDataByPage, jumpToPage } from '../../redux/reducers/coinsReducer';
import CoinsTable from '../CoinsTable/CoinsTable';
import CoinsTableANT from '../CoinsTableANT/CoinsTableANT';

const MainPageHooks = ({ loading, getDataByPage, resultsPerPage, activePage, vsCurrency, orderBy }) => {
  useEffect(() => {
    getDataByPage({ page: activePage, vsCurrency, orderBy, resultsPerPage });
  }, [activePage]);

  return (
    <div className='tableContainer'>
      {loading ? <Preloader /> : <CoinsTableANT />}
      <Paginator />
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

export default connect(mapStateToProps, { getDataByPage, jumpToPage })(MainPageHooks);
