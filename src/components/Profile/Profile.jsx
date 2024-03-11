import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.profileMain}>
        <img src={image} alt={name} className={css.profileImage} />
        <p>
          <b>{name}</b>
        </p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span>Followers</span>
          <span>
            <b>{stats.followers}</b>
          </span>
        </li>
        <li className={css.profileItem}>
          <span>Views</span>
          <span>
            <b>{stats.views}</b>
          </span>
        </li>
        <li className={css.profileItem}>
          <span>Likes</span>
          <span>
            <b>{stats.likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
