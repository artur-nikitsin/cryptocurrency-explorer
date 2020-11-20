import { getCoinsList } from '../../components/api/getData';

const SET_COINS_LIST = 'SET_COINS_LIST';
const SET_LOADING = 'SET_LOADING';

export const setLoading = (loading) => ({ type: SET_LOADING, loading });
export const setCoins = (coinsList) => ({ type: SET_COINS_LIST, coinsList });

const initialState = {
  loading: true,
  coinsList: [],
};

export const getAllCoins = () => (dispatch) => {
  getCoinsList()
    .then((result) => {
      console.log('result', result);
      dispatch(setCoins(result));
    })
    .catch((error) => {});
};

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.loading };
    case SET_COINS_LIST:
      return { ...state, loading: action.coinsList };
    default:
      return state;
  }
};

export default coinsReducer;
