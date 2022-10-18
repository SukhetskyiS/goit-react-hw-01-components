import PropTypes from 'prop-types';
import {
  StatContainer,
  StatList,
  StatTtile,
  StatItem,
} from './Statistics.styled';

export default function Statistics({ stats, title = 'Upload stats' }) {
  return (
    <StatContainer>
      <StatTtile>{title}</StatTtile>

      <StatList>
        {stats.map(item => (
          <li key={item.id}>
            <StatItem>{item.label} </StatItem>
            <span>{item.percentage}%</span>
          </li>
        ))}
      </StatList>
    </StatContainer>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
