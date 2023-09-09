import user from '../data/user.json'
import data from "../data/data.json"
import friends from "../data/friends.json"
import transactions from "../data/transactions.json"
import { Profile } from 'components/Profile/Profile';
import { Statistics } from "components/Statistics/Statistic";
import { FriendList } from "components/FriendList/FriendList";
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import css from "./Profile/Profile.module.css";


export const App = () => {
  return (
    <div className={css.wrap}>
      {/* <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    ></div> */}
       <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
      );
};
