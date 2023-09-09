import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          <span
            className={[
              styles.status,
              friend.isOnline ? styles.onLine : styles.offLine,
            ].join(' ')}
          >
            {friend.isOnline}
          </span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
FriendList.prototype = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
