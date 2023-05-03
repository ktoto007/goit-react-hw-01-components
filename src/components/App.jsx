import { Profile } from './profile/Profile';
import user from 'path/user';
import { Statistics } from './statistics/Statistics';
import data from 'path/data';
import { FriendList } from './friendList/FriendList';
import friends from 'path/friends';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from 'path/transactions';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" statistic={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
