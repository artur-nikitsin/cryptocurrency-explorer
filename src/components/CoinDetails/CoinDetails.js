import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { RightOutlined } from '@ant-design/icons';
import { getCoinData } from '../api/getData';
import CoinChart from '../CoinChart/CoinChart';
import Preloader from '../Preloader/Preloader';
import './coinDetails.scss';
import Converter from '../Converter/Converter';

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

  const {
    name,
    image,
    market_data,
    description,
    symbol,
    block_time_in_minutes,
    categories,
    coingecko_rank,
    coingecko_score,
    community_data,
    community_score,
  } = coinData;

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
              <img src={image.small} alt={name} />
              <h1>{`${name} (${symbol.toUpperCase()})`}</h1>
            </span>
            <h1>{`${market_data.current_price[vsCurrency] || 0} ${vsCurrency}`}</h1>
          </div>

          <div className='coinData'>
            <div className='communityInfo'>
              <p>
                <strong>Community data:</strong>
              </p>
              <ul className='dataList'>
                <li>{`Facebook likes: ${community_data.facebook_likes || 0}`}</li>
                <li>{`Reddit accounts active 48h: ${community_data.reddit_accounts_active_48h || 0}`}</li>
                <li>{`Reddit average comments 48h: ${community_data.reddit_average_comments_48h || 0}`}</li>
                <li>{`Reddit average posts 48h: ${community_data.reddit_average_posts_48h || 0}`}</li>

                <li>{`Reddit subscribers: ${community_data.reddit_subscribers || 0}`}</li>
                <li>{`Telegram channel user count: ${community_data.telegram_channel_user_count || 0}`}</li>
                <li>{`Twitter followers: ${community_data.twitter_followers || 0}`}</li>
              </ul>
            </div>

            <div className='coinGeckoData'>
              <p>
                <strong> Coingecko data:</strong>
              </p>
              <ul className='dataList'>
                <li>{`Block time in minutes: ${block_time_in_minutes}`}</li>
                <li>{`Categories: ${categories[0]}`}</li>
                <li>{`Coingecko rank: ${coingecko_rank}`}</li>
                <li>{`Coingecko score: ${coingecko_score}`}</li>
                <li>{`Community score: ${community_score}`}</li>
              </ul>
            </div>

            <div className='coinGeckoData'>
              <p>
                <strong> Market data:</strong>
              </p>
              <ul className='dataList'>
                <li>{`Market cap: ${market_data.market_cap[vsCurrency]} ${vsCurrency}`}</li>
                <li>{`24 low/high: ${market_data.low_24h[vsCurrency]}/${market_data.high_24h[vsCurrency]} ${vsCurrency}`}</li>
                <li>{`Fully diluted valuation: ${market_data.fully_diluted_valuation[vsCurrency]} ${vsCurrency}`}</li>
                <li>{`Circulating supply: ${market_data.circulating_supply}`}</li>
                <li>{`Max supply: ${market_data.max_supply}`}</li>
              </ul>
            </div>
          </div>
          <Converter coin={symbol} vsCurrency={vsCurrency} price={market_data.current_price[vsCurrency]} />
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
