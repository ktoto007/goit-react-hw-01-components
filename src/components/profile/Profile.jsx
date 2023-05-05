import PropTypes from 'prop-types';
import {
  MainContainer,
  InformationContainer,
  Avatar,
  MainText,
  SecondaryText,
  Stats,
  StatBlock,
  StatsText,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <MainContainer>
      <InformationContainer>
        <Avatar src={avatar} alt="User avatar" />
        <MainText>{username}</MainText>
        <SecondaryText>@{tag}</SecondaryText>
        <SecondaryText>{location}</SecondaryText>
      </InformationContainer>
      <Stats>
        <StatBlock>
          <StatsText>Followers</StatsText>
          <StatsText>{stats.followers}</StatsText>
        </StatBlock>
        <StatBlock>
          <StatsText>Views</StatsText>
          <StatsText>{stats.views}</StatsText>
        </StatBlock>
        <StatBlock>
          <StatsText>Likes</StatsText>
          <StatsText>{stats.likes}</StatsText>
        </StatBlock>
      </Stats>
    </MainContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
