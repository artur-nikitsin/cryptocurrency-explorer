import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { getCoinData } from '../api/getData';
import CoinChart from '../CoinChart/CoinChart';
import Preloader from '../Preloader/Preloader';
import './coinDetails.scss';

const CoinDetails = ({
  localization,
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
  }, []);

  const { name, image, description } = coinData;

  console.log(coinData);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className='coinInfoContainer'>
          <NavLink to='/'>Return to full list</NavLink>
          <div>
            <img src={image.small} alt={name} />
            <h1>{name}</h1>
          </div>
          <div>{ReactHtmlParser(description[localization])}</div>
          <div className='coinChartWrapper'>
            <CoinChart ids={ids} />
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { localization } = state.coins;
  return {
    localization,
  };
};

CoinDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      ids: PropTypes.string.isRequired,
    }),
  }),
  localization: PropTypes.string,
};

CoinDetails.defaultProps = {
  match: PropTypes.shape({
    params: {
      ids: null,
    },
  }),
  localization: 'en',
};

export default connect(mapStateToProps)(CoinDetails);
