import React from 'react';
import PropTypes from 'prop-types';
import returnColorClassName from '../../helpers/returnColorClassName';
import getToFixedNumber from '../../helpers/getToFixedNumber';

const PriceChange = ({ data: { market_data, vsCurrency } }) => {
  console.log(market_data);
  return (
    <ul className='priceChange'>
      <li className={returnColorClassName(market_data.price_change_percentage_1h_in_currency[vsCurrency])}>
        {`1h: ${getToFixedNumber(market_data.price_change_percentage_1h_in_currency[vsCurrency])}`}
      </li>
      <li className={returnColorClassName(market_data.price_change_24h_in_currency[vsCurrency])}>
        {`24h: ${getToFixedNumber(market_data.price_change_24h_in_currency[vsCurrency])}`}
      </li>
      <li className={returnColorClassName(market_data.price_change_percentage_7d_in_currency[vsCurrency])}>
        {`7d: ${getToFixedNumber(market_data.price_change_percentage_7d_in_currency[vsCurrency])}`}
      </li>
      <li className={returnColorClassName(market_data.price_change_percentage_14d_in_currency[vsCurrency])}>
        {`14d: ${getToFixedNumber(market_data.price_change_percentage_14d_in_currency[vsCurrency])}`}
      </li>
      <li className={returnColorClassName(market_data.price_change_percentage_30d_in_currency[vsCurrency])}>
        {`30d: ${getToFixedNumber(market_data.price_change_percentage_30d_in_currency[vsCurrency])}`}
      </li>
      <li className={returnColorClassName(market_data.price_change_percentage_1y_in_currency[vsCurrency])}>
        {`1y: ${getToFixedNumber(market_data.price_change_percentage_1y_in_currency[vsCurrency])}`}
      </li>
    </ul>
  );
};

PriceChange.propTypes = {
  data: PropTypes.shape({
    market_data: PropTypes.shape({
      price_change_percentage_1h_in_currency: PropTypes.objectOf(PropTypes.number),
      price_change_24h_in_currency: PropTypes.objectOf(PropTypes.number),
      price_change_percentage_7d_in_currency: PropTypes.objectOf(PropTypes.number),
      price_change_percentage_14d_in_currency: PropTypes.objectOf(PropTypes.number),
      price_change_percentage_30d_in_currency: PropTypes.objectOf(PropTypes.number),
      price_change_percentage_1y_in_currency: PropTypes.objectOf(PropTypes.number),
    }),
    vsCurrency: PropTypes.string,
  }),
};

PriceChange.defaultProps = {
  data: {
    market_data: {
      price_change_percentage_1h_in_currency: '',
      price_change_24h_in_currency: '',
      price_change_percentage_7d_in_currency: '',
      price_change_percentage_14d_in_currency: '',
      price_change_percentage_30d_in_currency: '',
      price_change_percentage_1y_in_currency: '',
    },
    vsCurrency: 'usd',
  },
};
export default PriceChange;
