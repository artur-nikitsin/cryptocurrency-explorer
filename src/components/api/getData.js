const axios = require('axios').default;


export const getCoins = ({page, vsCurrency, orderBy, resultPerPage}) => {
    return axios({
        method: 'get',
        url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&order=${orderBy}&per_page=${resultPerPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`,
        responseType: 'json'
    })
        .then(function (response) {
            return response.data
        })
        .catch(error => {
            console.log("error", error)
        });
}


export const getCoinsList = () => {
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