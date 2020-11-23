import React from 'react';
import PropTypes from 'prop-types';

const CoinGeckoData = ({
  data: { block_time_in_minutes, categories, coingecko_rank, coingecko_score, community_score },
}) => {
  return (
    <div className='coinGeckoData'>
      <p>
        <strong> Coingecko data:</strong>
      </p>
      <ul className='dataList'>
        <li>{`Block time in minutes: ${block_time_in_minutes}`}</li>
        <li>{`Categories: ${categories[0] || 'none'}`}</li>
        <li>{`Coingecko rank: ${coingecko_rank}`}</li>
        <li>{`Coingecko score: ${coingecko_score}`}</li>
        <li>{`Community score: ${community_score}`}</li>
      </ul>
    </div>
  );
};

CoinGeckoData.propTypes = {
  data: PropTypes.shape({
    block_time_in_minutes: PropTypes.number,
    categories: PropTypes.arrayOf(PropTypes.string),
    coingecko_rank: PropTypes.number,
    coingecko_score: PropTypes.number,
    community_score: PropTypes.number,
  }),
};

CoinGeckoData.defaultProps = {
  data: {
    block_time_in_minutes: '',
    categories: [],
    coingecko_rank: '',
    coingecko_score: '',
    community_score: '',
  },
};
export default CoinGeckoData;
