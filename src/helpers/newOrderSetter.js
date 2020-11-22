import { getDataByPage, setNewOrderBy } from '../redux/reducers/coinsReducer';
import { connect, useDispatch } from 'react-redux';

const newOrderSetter = ({ coinsNumber, resultsPerPage, activePage, vsCurrency, orderBy }) => {
  setNewOrderBy('gecko_desc');
  getDataByPage({ page: activePage, vsCurrency, orderBy, resultsPerPage });
  console.log('Hi');
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

export default connect(mapStateToProps, { setNewOrderBy })(newOrderSetter);
