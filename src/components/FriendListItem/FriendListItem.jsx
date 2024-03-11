import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ friend }) => {
  return (
    <li>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p>{friend.name}</p>
      {friend.isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </li>
  );
};

export default FriendListItem;
