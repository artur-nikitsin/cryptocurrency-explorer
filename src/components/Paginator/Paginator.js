import PropTypes from 'prop-types';
import { Pagination } from 'antd';
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { setResultsPerPage } from '../../redux/actionGenerators/actionGenerators';
import { jumpToPage, getDataByPage } from '../../redux/actionGenerators/actionGenerators';

// eslint-disable-next-line no-shadow
const Paginator = ({ coinsNumber, activePage, resultsPerPage, vsCurrency, orderBy, getDataByPage, jumpToPage }) => {
  const dispatch = useDispatch();
  const onChange = (page, pageSize) => {
    const nextPage = page;
    if (pageSize === resultsPerPage) {
      jumpToPage(page);
      getDataByPage({ page: nextPage, vsCurrency, orderBy, resultsPerPage: pageSize });
    }
  };
  const onShowSizeChange = (current, size) => {
    jumpToPage(1);
    dispatch(setResultsPerPage(size));
    getDataByPage({ page: 1, vsCurrency, orderBy, resultsPerPage: size });
  };
  return (
    <Pagination
      showSizeChanger
      defaultCurrent={1}
      current={activePage}
      onChange={onChange}
      total={coinsNumber}
      defaultPageSize={resultsPerPage}
      onShowSizeChange={onShowSizeChange}
    />
  );
};

Paginator.propTypes = {
  coinsNumber: PropTypes.number,
  activePage: PropTypes.number,
  resultsPerPage: PropTypes.number,
  vsCurrency: PropTypes.string,
  orderBy: PropTypes.string,
  getDataByPage: PropTypes.func,
  jumpToPage: PropTypes.func,
};

Paginator.defaultProps = {
  coinsNumber: null,
  activePage: 1,
  resultsPerPage: 10,
  vsCurrency: 'usd',
  orderBy: 'market_cap_desc',
  getDataByPage: null,
  jumpToPage: null,
};

const mapStateToProps = (state) => {
  const { coinsNumber, resultsPerPage, activePage, vsCurrency, orderBy } = state.coins;
  return {
    coinsNumber,
    resultsPerPage,
    activePage,
    vsCurrency,
    orderBy,
  };
};

export default connect(mapStateToProps, { jumpToPage, getDataByPage })(Paginator);
