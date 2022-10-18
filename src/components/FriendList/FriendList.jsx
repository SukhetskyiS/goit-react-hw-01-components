import FriendListItem from './FriendListItem';

export default function FriendList({ items }) {
  return (
    <ul className="friend-list">
      {items.map(item => (
        <div key={item.id}>
          <FriendListItem
            isOnline={item.isOnline}
            avatar={item.avatar}
            name={item.name}
          />
        </div>
      ))}
    </ul>
  );
}
