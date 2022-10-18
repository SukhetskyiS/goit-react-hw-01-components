import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import { FriendContainer, FriendItemDiv } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendContainer>
      {friends.map(item => (
        <FriendItemDiv key={item.id}>
          <FriendListItem
            isOnline={item.isOnline}
            avatar={item.avatar}
            name={item.name}
          />
        </FriendItemDiv>
      ))}
    </FriendContainer>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
