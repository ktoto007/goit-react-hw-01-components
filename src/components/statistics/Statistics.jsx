import PropTypes from 'prop-types';
import { Title } from './title/Title';
import { OneStat } from './stats/stats';
import { StatsList, Container } from './Statistics.styled';

export const Statistics = ({ title, statistic }) => {
  return (
    <Container>
      {title.length > 0 && <Title text={title} />}

      <StatsList>
        {statistic.map(stat => (
          <OneStat
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </StatsList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistic: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ).isRequired,
};
