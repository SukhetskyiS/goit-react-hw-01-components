import PropTypes from 'prop-types';
import { UserContainer, UserTh, UserTd } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <UserContainer>
      <thead>
        <tr>
          <UserTh>Type</UserTh>
          <UserTh>Amount</UserTh>
          <UserTh>Currency</UserTh>
        </tr>
      </thead>
      {items.map(item => (
        <tbody key={item.id}>
          <tr>
            <UserTd>{item.type}</UserTd>
            <UserTd>{item.amount}</UserTd>
            <UserTd>{item.currency}</UserTd>
          </tr>
        </tbody>
      ))}
    </UserContainer>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
