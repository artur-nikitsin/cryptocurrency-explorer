const axios = require('axios').default;

export const getCoins = ({ page, vsCurrency, orderBy, resultsPerPage }) => {
  return axios({
    method: 'get',
    url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&order=${orderBy}&per_page=${resultsPerPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`,
    responseType: 'json',
  })
    .then(function(response) {
      return response.data;
    })
    .catch((error) => {
      console.log('error', error);
    });
};

export const getCoinsList = () => {
  return axios({
    method: 'get',
    url: `https://api.coingecko.com/api/v3/coins/list`,
    responseType: 'json',
  })
    .then(function(response) {
      return response.data;
    })
    .catch((error) => {
      console.log('error', error);
    });
};

export const getCoinData = (id) => {
  return axios({
    method: 'get',
    url: `https://api.coingecko.com/api/v3/coins/${id}`,
    responseType: 'json',
  })
    .then(function(response) {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log('error', error);
    });
};

export const getVsCurrencies = () => {
  return axios({
    method: 'get',
    url: `https://api.coingecko.com/api/v3/simple/supported_vs_currencies`,
    responseType: 'json',
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log('error', error);
    });
};
