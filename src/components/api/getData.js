const axios = require('axios').default;


export const getCoins = (page, currency) => {
    return axios({
        method: 'get',
        url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`,
        responseType: 'json'
    })
        .then(function (response) {
            return response.data
        })
        .catch(error => {
            console.log("error", error)
        });
}


export const getCoinsList = (page) => {
    return axios({
        method: 'get',
        url: `https://api.coingecko.com/api/v3/coins/list`,
        responseType: 'json'
    })
        .then(function (response) {
            return response.data
        })
        .catch(error => {
            console.log("error", error)
        });
}

export const getCurrencyData = (id) => {
    return axios({
        method: 'get',
        url: `https://api.coingecko.com/api/v3/coins/`,
        responseType: 'json'
    })
        .then(function (response) {
            /*console.log(response.data)*/
            if (response.status === 200) {
                return response.data
            }

        }).catch(error => {
            console.log("error", error)
        });
}