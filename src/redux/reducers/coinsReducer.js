import {
  SET_ACTIVE_PAGE,
  SET_COINS_LIST,
  SET_COINS_NUMBER,
  SET_COINS_TABLE_DATA,
  SET_LOADING,
  SET_ORDER_BY,
  SET_RESULTS_PER_PAGE,
  SET_VC_CURRENCY,
} from '../actions/actionTypes';

const initialState = {
  loading: true,
  coinsList: [],
  coinsNumber: 1,
  resultsPerPage: 10,

  activePage: 1,
  vsCurrency: 'usd',
  orderBy: 'market_cap_desc',

  localization: 'en',
};

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.loading };
    case SET_COINS_LIST:
      return { ...state, coinsList: action.coinsList };
    case SET_COINS_TABLE_DATA:
      return { ...state, coinsTableData: action.coinsTableData };
    case SET_COINS_NUMBER:
      return { ...state, coinsNumber: action.coinsNumber };
    case SET_RESULTS_PER_PAGE:
      return { ...state, resultsPerPage: action.resultsPerPage };
    case SET_ACTIVE_PAGE:
      return { ...state, activePage: action.activePage };
    case SET_VC_CURRENCY:
      return { ...state, vsCurrency: action.vsCurrency };
    case SET_ORDER_BY:
      return { ...state, orderBy: action.orderBy };
    default:
      return state;
  }
};

export default coinsReducer;
