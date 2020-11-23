import PropTypes from 'prop-types';
import getToFixedNumber from '../../helpers/getToFixedNumber';

const createTable = ({ coinsList, activePage, resultsPerPage, vsCurrency }) => {
  return coinsList.map((item, i) => {
    const {
      id,
      image,
      current_price,
      name,
      price_change_percentage_1h_in_currency,
      price_change_percentage_24h_in_currency,
      price_change_percentage_7d_in_currency,
    } = item;

    const short1h = getToFixedNumber(price_change_percentage_1h_in_currency, 1);
    const short24h = getToFixedNumber(price_change_percentage_24h_in_currency, 1);
    const short7d = getToFixedNumber(price_change_percentage_7d_in_currency, 1);

    return {
      key: id,
      number: activePage === 1 ? activePage + i : (activePage - 1) * resultsPerPage + i + 1,
      coin: name,
      image,
      price: current_price,
      priceChange1h: short1h,
      priceChange24h: short24h,
      priceChange7d: short7d,
      priceChange1hNumber: price_change_percentage_1h_in_currency,
      priceChange24hNumber: price_change_percentage_24h_in_currency,
      priceChange7dNumber: price_change_percentage_7d_in_currency,
      vsCurrency,
    };
  });
};

createTable.propTypes = {
  coinsList: PropTypes.arrayOf(PropTypes.object),
  resultsPerPage: PropTypes.number,
  activePage: PropTypes.number,
  vsCurrency: PropTypes.string,
  orderBy: PropTypes.string,
  setNewOrderBy: PropTypes.func,
};

createTable.defaultProps = {
  coinsList: [],
  resultsPerPage: 10,
  activePage: '1',
  vsCurrency: 'usd',
};
export default createTable;
