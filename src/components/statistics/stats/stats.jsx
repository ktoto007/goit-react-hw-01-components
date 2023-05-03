import PropTypes from 'prop-types';
import { StatsContainer, StatsElement } from './Stats.styled';
export const OneStat = ({ label, percentage }) => {
  return (
    <StatsContainer>
      <StatsElement>{label}</StatsElement>
      <StatsElement>{percentage}%</StatsElement>
    </StatsContainer>
  );
};

OneStat.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
