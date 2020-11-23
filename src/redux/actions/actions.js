import store from '../store';
import { getCoins, getCoinsList } from '../../api/getData';
import {
  SET_ACTIVE_PAGE,
  SET_COINS_LIST,
  SET_COINS_NUMBER,
  SET_COINS_TABLE_DATA,
  SET_LOADING,
  SET_ORDER_BY,
  SET_RESULTS_PER_PAGE,
  SET_VC_CURRENCY,
} from './actionTypes';

export const setLoading = (loading) => ({ type: SET_LOADING, loading });
export const setCoinsList = (coinsList) => ({ type: SET_COINS_LIST, coinsList });
export const setCoinsTableData = (coinsTableData) => ({ type: SET_COINS_TABLE_DATA, coinsTableData });
export const setCoinsNumber = (coinsNumber) => ({ type: SET_COINS_NUMBER, coinsNumber });
export const setResultsPerPage = (resultsPerPage) => ({ type: SET_RESULTS_PER_PAGE, resultsPerPage });
export const setActivePage = (activePage) => ({ type: SET_ACTIVE_PAGE, activePage });
export const setVsCurrency = (vsCurrency) => ({ type: SET_VC_CURRENCY, vsCurrency });
export const setOrderBy = (orderBy) => ({ type: SET_ORDER_BY, orderBy });

export const setNewOrderBy = (nextOrder) => (dispatch) => {
  const { activePage, vsCurrency, orderBy, resultsPerPage } = store.getState().coins;

  dispatch(setLoading(true));
  dispatch(setOrderBy(nextOrder));
  dispatch(getDataByPage({ page: activePage, vsCurrency, orderBy, resultsPerPage }));
};

export const getDataByPage = ({ page, vsCurrency, orderBy, resultsPerPage }) => (dispatch) => {
  getCoins({ page, vsCurrency, orderBy, resultsPerPage }).then((coinsList) => {
    getCoinsList().then((list) => {
      dispatch(setCoinsNumber(list.length));
    });
    dispatch(setCoinsList(coinsList));
    dispatch(setLoading(false));
  });
};

export const jumpToPage = (nextPage) => (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setActivePage(nextPage));
};
