import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { RightOutlined } from '@ant-design/icons';
import { getCoinData } from '../../api/getData';
import CoinChart from '../CoinChart/CoinChart';
import Preloader from '../Preloader/Preloader';
import './coinDetails.scss';
import Converter from '../Converter/Converter';
import CommunityData from './CommunityData';
import CoinGeckoData from './CoingeckoData';
import MarketData from './MarketData';
import PriceChange from './PriceChange';

const CoinDetails = ({
  localization,
  vsCurrency,
  match: {
    params: { ids },
  },
}) => {
  const [coinData, setCoinData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCoinData(ids).then((result) => {
      setCoinData(result);
      setLoading(false);
    });
  }, [ids]);

  const { name, image, market_data, description, symbol, community_data } = coinData;

  return (
    <div className='coinDetails'>
      {loading && coinData ? (
        <Preloader />
      ) : (
        <div className='coinInfoContainer'>
          <span className='navLinks'>
            <NavLink to='/'>Coins</NavLink>
            <RightOutlined size='small' />
            <NavLink to={`/coins/${ids}`}>{ids}</NavLink>
          </span>

          <div className='mainHeader'>
            <span className='nameWithLogo'>
              <img className='logo' src={image.small} alt={name} />
              <h1>{`${name} (${symbol.toUpperCase()})`}</h1>
            </span>
            <h1>{`${market_data.current_price[vsCurrency] || 0} ${vsCurrency}`}</h1>
          </div>

          <div className='coinData'>
            <CommunityData data={community_data} />
            <CoinGeckoData data={coinData} />
            <MarketData data={{ market_data, vsCurrency }} />
          </div>

          <Converter coin={symbol} vsCurrency={vsCurrency} price={market_data.current_price[vsCurrency]} />
          <PriceChange data={{ market_data, vsCurrency }} />
          <div className='coinChartWrapper'>
            <CoinChart ids={ids} />
          </div>

          <div className='description'>{ReactHtmlParser(description[localization])}</div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { localization, vsCurrency } = state.coins;
  return {
    localization,
    vsCurrency,
  };
};

CoinDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      ids: PropTypes.string.isRequired,
    }),
  }),
  localization: PropTypes.string,
  vsCurrency: PropTypes.string,
};

CoinDetails.defaultProps = {
  match: PropTypes.shape({
    params: {
      ids: null,
    },
  }),
  localization: 'en',
  vsCurrency: 'usd',
};

export default connect(mapStateToProps)(CoinDetails);
