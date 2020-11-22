import React from 'react';
import PropTypes from 'prop-types';

const CoinChart = ({ ids }) => {
  return <coingecko-coin-compare-chart-widget coin-ids={ids} currency='usd' locale='en' />;
};

CoinChart.propTypes = {
  ids: PropTypes.string,
};

CoinChart.defaultProps = {
  ids: '',
};

export default CoinChart;
