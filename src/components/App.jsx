import Profile from './Profile/Profile';
import user from 'assets/user.json';
import Statistics from './Statistics/Statistics';
import data from 'assets/data.json';
import FriendList from './FriendList/FriendList';
import friends from 'assets/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from 'assets/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
