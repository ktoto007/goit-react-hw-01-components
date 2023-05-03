import PropTypes from 'prop-types';
import { TableBodyElement } from './Transaction.styled';
export const Transaction = ({ type, amount, currency }) => {
  return (
    <tr>
      <TableBodyElement>{type}</TableBodyElement>
      <TableBodyElement>{amount}</TableBodyElement>
      <TableBodyElement>{currency}</TableBodyElement>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
