import PropTypes from 'prop-types';
import {
  UserContainer,
  UserCard,
  UserData,
  UserList,
  UserItem,
} from 'components/Profile/Profile.styled';

export default function Profile({ avatar, username, tag, location, stats }) {
  return (
    <UserContainer>
      <UserCard>
        <img src={avatar} alt="User avatar" />
        <UserData>{username}</UserData>
        <UserData>@{tag}</UserData>
        <UserData>{location}</UserData>
      </UserCard>

      <UserList>
        <li>
          <UserItem>Followers</UserItem>
          <span> {stats.followers}</span>
        </li>
        <li>
          <UserItem>Views</UserItem>
          <span> {stats.views}</span>
        </li>
        <li>
          <UserItem>Likes</UserItem>
          <span> {stats.likes}</span>
        </li>
      </UserList>
    </UserContainer>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
