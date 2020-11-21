import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './mainPage.scss';
import Preloader from '../Preloader/Preloader';
import Paginator from '../Paginator/Paginator';
import { getDataByPage, jumpToPage } from '../../redux/reducers/coinsReducer';
import CoinsTable from '../CoinsTable/CoinsTable';

const MainPageHooks = (props) => {
  useEffect(() => {
    const { getDataByPage, resultsPerPage, activePage, vsCurrency, orderBy } = props;
    getDataByPage({ page: activePage, vsCurrency, orderBy, resultsPerPage });
  }, []);

  const handleGoToPage = (nextPage) => {
    const { vsCurrency, orderBy, resultsPerPage, getDataByPage, jumpToPage } = props;
    jumpToPage(nextPage);
    getDataByPage({ page: nextPage, vsCurrency, orderBy, resultsPerPage });
  };

  const { loading, activePage, pagesNumber, coinsList } = props;
  return (
    <div className='tableContainer'>
      {loading ? <Preloader /> : <CoinsTable />}
      <Paginator
        activePage={activePage}
        pagesNumber={pagesNumber}
        handleGoToPage={handleGoToPage}
        currencyList={coinsList}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    loading,
    coinsList,
    coinsTableData,
    pagesNumber,
    resultsPerPage,
    activePage,
    vsCurrency,
    orderBy,
  } = state.coins;
  return {
    loading,
    coinsList,
    coinsTableData,
    pagesNumber,
    resultsPerPage,
    activePage,
    vsCurrency,
    orderBy,
  };
};

export default connect(mapStateToProps, { getDataByPage, jumpToPage })(MainPageHooks);
