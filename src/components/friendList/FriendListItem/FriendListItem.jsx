import PropTypes from 'prop-types';
import { OneFriend, Name, Status } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <OneFriend>
      <Status status={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="64" />
      <Name>{name}</Name>
    </OneFriend>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
