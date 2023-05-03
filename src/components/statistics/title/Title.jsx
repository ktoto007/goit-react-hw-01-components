import PropTypes from 'prop-types';
import { TitleStyle } from './Title.styled';
export const Title = ({ text }) => {
  return <TitleStyle>{text}</TitleStyle>;
};

Title.propTypes = {
  text: PropTypes.string,
};
