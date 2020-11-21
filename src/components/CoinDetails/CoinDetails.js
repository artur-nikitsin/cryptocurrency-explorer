import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { getCoinData } from '../api/getData';
import CoinChart from '../CoinChart/CoinChart';
import Preloader from '../Preloader/Preloader';
import './coinDetails.scss';

class CoinDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      coinData: {},
    };
  }

  componentDidMount() {
    const { ids } = this.props.match.params;

    getCoinData(ids).then((coinData) => {
      this.setState({
        coinData,
        loading: false,
      });
    });
  }

  render() {
    const { ids } = this.props.match.params;
    const { loading } = this.state;
    const { localization } = this.props;
    const { name, image, description } = this.state.coinData;

    console.log(this.state);
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
  }
}

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
