import React from 'react';
import PropTypes from 'prop-types';

const MarketData = ({ data: { market_data, vsCurrency } }) => {
  return (
    <div className='marketData'>
      <p>
        <strong> Market data:</strong>
      </p>
      <ul className='dataList'>
        <li>{`Market cap: ${market_data.market_cap[vsCurrency]} ${vsCurrency}`}</li>
        <li>{`24 low/high: ${market_data.low_24h[vsCurrency]}/${market_data.high_24h[vsCurrency]} ${vsCurrency}`}</li>
        <li>{`Fully diluted valuation: ${market_data.fully_diluted_valuation[vsCurrency]} ${vsCurrency}`}</li>
        <li>{`Circulating supply: ${market_data.circulating_supply}`}</li>
        <li>{`Max supply: ${market_data.max_supply}`}</li>
      </ul>
    </div>
  );
};

MarketData.propTypes = {
  data: PropTypes.shape({
    market_data: PropTypes.shape({
      market_cap: PropTypes.objectOf(PropTypes.number),
      high_24h: PropTypes.objectOf(PropTypes.number),
      low_24h: PropTypes.objectOf(PropTypes.number),
      fully_diluted_valuation: PropTypes.objectOf(PropTypes.number),
      circulating_supply: PropTypes.number,
      max_supply: PropTypes.number,
    }),
    vsCurrency: PropTypes.string,
  }),
};

MarketData.defaultProps = {
  data: {
    market_data: {
      market_cap: '',
      high_24h: '',
      low_24h: '',
      fully_diluted_valuation: '',
      circulating_supply: '',
      max_supply: '',
    },
    vsCurrency: 'usd',
  },
};
export default MarketData;
