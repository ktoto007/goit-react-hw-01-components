import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { Friends } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
      name: PropTypes.string,
    })
  ),
};
