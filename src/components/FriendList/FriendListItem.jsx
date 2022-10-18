import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendItemTrue,
  FriendItemFalse,
} from './FriendList.styled';

export default function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <FriendItem>
      <span>
        {isOnline ? (
          <FriendItemTrue>+</FriendItemTrue>
        ) : (
          <FriendItemFalse>-</FriendItemFalse>
        )}
      </span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
