import PropTypes from 'prop-types';
import { Transaction } from './transaction/Transaction';
import { Table, TableHeadElement } from './TransactionHistory.styled';
export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadElement>Type</TableHeadElement>
          <TableHeadElement>Amount</TableHeadElement>
          <TableHeadElement>Currency</TableHeadElement>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
