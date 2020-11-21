import React from 'react';
import { connect } from 'react-redux';
import './mainPage.scss';
import Preloader from '../Preloader/Preloader';
import Paginator from '../MaterialPaginator/Paginator';
import { getDataByPage, jumpToPage } from '../../redux/reducers/coinsReducer';
import CoinsTable from '../CoinsTable/CoinsTable';

class MainPage extends React.PureComponent {
  componentDidMount() {
    const { getDataByPage, resultsPerPage, activePage, vsCurrency, orderBy } = this.props;
    getDataByPage({ page: activePage, vsCurrency, orderBy, resultsPerPage });
  }

  handleGoToPage = (nextPage) => {
    const { vsCurrency, orderBy, resultsPerPage, getDataByPage, jumpToPage } = this.props;
    jumpToPage(nextPage);
    getDataByPage({ page: nextPage, vsCurrency, orderBy, resultsPerPage });
  };

  render() {
    const { loading, activePage, pagesNumber, coinsList } = this.props;
    return (
      <div className='tableContainer'>
        {loading ? <Preloader /> : <CoinsTable />}
        <Paginator
          activePage={activePage}
          pagesNumber={pagesNumber}
          handleGoToPage={this.handleGoToPage}
          currencyList={coinsList}
        />
      </div>
    );
  }
}

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

export default connect(mapStateToProps, { getDataByPage, jumpToPage })(MainPage);
