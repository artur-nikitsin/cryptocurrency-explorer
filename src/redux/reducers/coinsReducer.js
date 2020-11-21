import { getCoins, getCoinsList } from '../../components/api/getData';

const SET_LOADING = 'SET_LOADING';
const SET_COINS_LIST = 'SET_COINS_LIST';
const SET_COINS_TABLE_DATA = 'SET_COINS_TABLE_DATA';
const SET_PAGES_NUMBER = 'SET_PAGES_NUMBER';
const SET_RESULTS_PER_PAGE = 'SET_RESULT_PER_PAGE';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_VC_CURRENCY = 'SET_VC_CURRENCY';
const SET_ORDER_BY = 'SET_ORDER_BY';

export const setLoading = (loading) => ({ type: SET_LOADING, loading });
export const setCoinsList = (coinsList) => ({ type: SET_COINS_LIST, coinsList });
export const setCoinsTableData = (coinsTableData) => ({ type: SET_COINS_TABLE_DATA, coinsTableData });
export const setPagesNumber = (pagesNumber) => ({ type: SET_PAGES_NUMBER, pagesNumber });
export const setResultsPerPage = (resultsPerPage) => ({ type: SET_RESULTS_PER_PAGE, resultsPerPage });
export const setActivePage = (activePage) => ({ type: SET_ACTIVE_PAGE, activePage });
export const setVsCurrency = (vsCurrency) => ({ type: SET_VC_CURRENCY, vsCurrency });
export const setOrderBy = (orderBy) => ({ type: SET_ORDER_BY, orderBy });

const initialState = {
  loading: true,
  coinsList: [],
  coinsTableData: [],
  pagesNumber: 1,
  resultsPerPage: 100,

  activePage: 1,
  vsCurrency: 'usd',
  orderBy: 'market_cap_desc',

  localization: 'en',
};

export const getDataByPage = ({ page, vsCurrency, orderBy, resultsPerPage }) => (dispatch) => {
  getCoins({ page, vsCurrency, orderBy, resultsPerPage }).then(async (coinsList) => {
    await getCoinsList().then((list) => {
      const pagesNumber = Math.ceil(list.length / resultsPerPage);
      dispatch(setPagesNumber(pagesNumber));
    });
    dispatch(setCoinsList(coinsList));
    dispatch(setLoading(false));
  });
};

export const jumpToPage = (nextPage) => (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setActivePage(nextPage));
};

/* export const setPageIsLoading = (isLoading) => (dispatch) => {
  dispatch(setLoading(isLoading));
}; */

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.loading };
    case SET_COINS_LIST:
      return { ...state, coinsList: action.coinsList };
    case SET_COINS_TABLE_DATA:
      return { ...state, coinsTableData: action.coinsTableData };
    case SET_PAGES_NUMBER:
      return { ...state, pagesNumber: action.pagesNumber };
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
