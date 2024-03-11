import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <ul>
      {Array.isArray(friends) &&
        friends.map((friend) => {
          return <FriendListItem key={friend.id} friend={friend} />;
        })}
    </ul>
  );
};

export default FriendList;
