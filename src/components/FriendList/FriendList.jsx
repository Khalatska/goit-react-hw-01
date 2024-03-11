import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <div className={css.friendsListContainer}> 
    <ul className={css.friendsList}>
      {Array.isArray(friends) &&
        friends.map((friend) => {
          return <FriendListItem key={friend.id} friend={friend} />;
        })}
    </ul>
    </div>
  );
};

export default FriendList;
