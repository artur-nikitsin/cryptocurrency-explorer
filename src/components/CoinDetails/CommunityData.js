import React from 'react';
import PropTypes from 'prop-types';
import PriceChange from './PriceChange';

const CommunityData = ({
  // eslint-disable-next-line react/prop-types
  data: {
    facebook_likes,
    reddit_accounts_active_48h,
    reddit_average_comments_48h,
    reddit_average_posts_48h,
    reddit_subscribers,
    telegram_channel_user_count,
    twitter_followers,
  },
}) => {
  return (
    <div className='communityInfo'>
      <p>
        <strong>Community data:</strong>
      </p>
      <ul className='dataList'>
        <li>{`Facebook likes: ${facebook_likes || 0}`}</li>
        <li>{`Reddit accounts active 48h: ${reddit_accounts_active_48h || 0}`}</li>
        <li>{`Reddit average comments 48h: ${reddit_average_comments_48h || 0}`}</li>
        <li>{`Reddit average posts 48h: ${reddit_average_posts_48h || 0}`}</li>

        <li>{`Reddit subscribers: ${reddit_subscribers || 0}`}</li>
        <li>{`Telegram channel user count: ${telegram_channel_user_count || 0}`}</li>
        <li>{`Twitter followers: ${twitter_followers || 0}`}</li>
      </ul>
    </div>
  );
};

CommunityData.propTypes = {
  // eslint-disable-next-line react/require-default-props
  data: PropTypes.shape({
    facebook_likes: PropTypes.string,
    reddit_accounts_active_48h: PropTypes.number,
    reddit_average_comments_48h: PropTypes.number,
    reddit_average_posts_48h: PropTypes.number,
    reddit_subscribers: PropTypes.number,
    twitter_followers: PropTypes.number,
    telegram_channel_user_count: PropTypes.number,
  }),
};

PriceChange.defaultProps = {
  data: {
    facebook_likes: '',
    reddit_accounts_active_48h: '',
    reddit_average_comments_48h: '',
    reddit_average_posts_48h: '',
    reddit_subscribers: '',
    twitter_followers: '',
    telegram_channel_user_count: '',
  },
};
export default CommunityData;
