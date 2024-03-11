import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ friend }) => {
  const isOnlineFriend = friend.isOnline;

  return (
    <li>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p>{friend.name}</p>
      {friend.isOnline ? (
        <p
          className={clsx({
            [css.online]: isOnlineFriend,
            [css.offline]: !isOnlineFriend,
          })}
        >
          Online
        </p>
      ) : (
        <p>Offline</p>
      )}
    </li>
  );
};

export default FriendListItem;
